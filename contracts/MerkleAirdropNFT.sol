// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import {IERC165} from "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @dev A contract that allows recipients to claim tokens via 'merkle airdrop'.
 */
contract MerkleAirdropNFT is ReentrancyGuard {
    error AirdropInActive();
    error NotInMerkleTree();
    error AlreadyClaimed();
    error NotOwner();
    error ZeroMerkleRoot();
    error ZeroAddress();
    error NotContract();
    error NotERC721();

    bytes4 private constant ERC721_INTERFACE_ID = type(IERC721).interfaceId;
    address private _owner;
    address private _sender;
    IERC721 private _nft;
    bytes32 private _merkleRoot;

    mapping(address => uint8) private _claimed;

    event Claimed(address indexed claimant, uint tokenId);
    event MerkleRootChanged(bytes32 newMerkleRoot);
    event NonFungibleTokenChanged(address newNFT);
    event SenderChanged(address newSender);

    /**
     * @dev Constructor
     */
    constructor() {
        _owner = msg.sender;
    }

    /**
     * @dev initialzer
     * @param sender The account from which the tokens are airdropped.
     * @param nft The address of the airdrop NFT.
     * @param merkleRoot The root of the merkle tree contraining the selected recipients
     */
    function initialize(
        address sender,
        address nft,
        bytes32 merkleRoot
    ) external {
        onlyOwner();
        setSender(sender);
        setNonFungibleToken(nft);
        setMerkleRoot(merkleRoot);
    }

    /**
     * @dev Claims airdropped tokens.
     * @param tokenId The tokenId of the NFT for which claim is being made.
     * @param proof A merkle proof proving the claim is valid.
     */
    function claim(
        uint tokenId,
        bytes32[] calldata proof
    ) external nonReentrant {
        if (
            _sender == address(0) ||
            address(_nft) == address(0) ||
            _merkleRoot == bytes32(0)
        ) revert AirdropInActive();

        if (_claimed[msg.sender] != 0) revert AlreadyClaimed();

        // Verify merkle proof, or revert if not in tree
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender, tokenId));
        bool isValidLeaf = MerkleProof.verify(proof, _merkleRoot, leaf);

        if (!isValidLeaf) revert NotInMerkleTree();

        // Set address to claimed
        _claimed[msg.sender] = 1;

        // Transfer tokens to msg.sender address
        _nft.safeTransferFrom(_sender, msg.sender, tokenId);

        // Emit claim event
        emit Claimed(msg.sender, tokenId);
    }

    function hasClaimed(address claimant) external view returns (bool) {
        if (_claimed[claimant] == 0) return false;
        return true;
    }

    function getToken() external view returns (address) {
        return address(_nft);
    }

    function getSender() external view returns (address) {
        return _sender;
    }

    function getMerkleRoot() external view returns (bytes32) {
        return _merkleRoot;
    }

    function setMerkleRoot(bytes32 merkleRoot) internal {
        if (merkleRoot == bytes32(0)) revert ZeroMerkleRoot();
        if (merkleRoot == _merkleRoot) return;
        _merkleRoot = merkleRoot;
        emit MerkleRootChanged(merkleRoot);
    }

    function setNonFungibleToken(address nft) internal {
        if (nft == address(0)) revert ZeroAddress();
        if (nft.code.length <= 0) revert NotContract();
        if (!(IERC165(nft).supportsInterface(ERC721_INTERFACE_ID)))
            revert NotERC721();
        if (nft == address(_nft)) return;
        _nft = IERC721(nft);
        emit NonFungibleTokenChanged(nft);
    }

    function setSender(address sender) internal {
        if (sender == address(0)) revert ZeroAddress();
        if (sender == _sender) return;
        _sender = sender;
        emit SenderChanged(sender);
    }

    function onlyOwner() internal view {
        if (msg.sender != _owner) revert NotOwner();
    }
}
