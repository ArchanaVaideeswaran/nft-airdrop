import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumberish } from "ethers";
import { ethers } from "hardhat";
import MerkleTree from "merkletreejs";
import {
    generateLeaf,
    generateTree,
    Recipient,
} from "../scripts/utils/merkle-tree-generator";
import { MerkleAirdropNFT, Whalez } from "../typechain-types";

describe("Merkle AirdropNFT Token", () => {
    let owner: SignerWithAddress;
    let sender: SignerWithAddress;
    let users: SignerWithAddress[];
    let nft: Whalez;
    let airdropNft: MerkleAirdropNFT;
    let recepients: Recipient[];
    let merkleTree: MerkleTree;
    let merkleRoot: string;
    let badRecepients: Recipient[];
    let badTree: MerkleTree;

    before(async () => {
        [owner, sender, ...users] = await ethers.getSigners();
        console.log("Deployer: ", owner.address);

        recepients = [];
        for (let i = 0; i < 5; i++) {
            let tokenId = (i + 1).toString();
            recepients.push({
                address: users[i].address,
                value: tokenId,
            });
        }
        merkleTree = generateTree(recepients);
        merkleRoot = merkleTree.getHexRoot();
        console.log("Merkle root: ", merkleRoot);

        badRecepients = [];
        for (let i = 5; i < 10; i++) {
            let tokenId = (i + 1).toString();
            badRecepients.push({
                address: users[i].address,
                value: tokenId,
            });
        }
        badTree = generateTree(badRecepients);
    });

    beforeEach(async () => {
        let tx;
        const NFT = await ethers.getContractFactory("Whalez");
        nft = await NFT.connect(sender).deploy();
        await nft.connect(sender).deployed();

        // mint NFT's to sender
        for (let i = 1; i <= 5; i++) {
            tx = await nft.connect(sender).mint(sender.address);
            await tx.wait();
        }

        console.log("Whalez NFT deployed at: ", nft.address);

        const AirdropNFT = await ethers.getContractFactory("MerkleAirdropNFT");
        airdropNft = await AirdropNFT.deploy();
        await airdropNft.deployed();

        console.log("MerkleAirdropNFT deployed at:", airdropNft.address);
    });

    describe("Function initialize", () => {
        it("should not let other than owner to initialize", async () => {
            await expect(
                airdropNft
                    .connect(sender)
                    .initialize(sender.address, nft.address, merkleRoot)
            ).to.be.revertedWithCustomError(airdropNft, "NotOwner");
        });

        it("should revert if initialized with zero merkle root", async () => {
            let zeroMerkleRoot = ethers.constants.HashZero;
            await expect(
                airdropNft.initialize(
                    sender.address,
                    nft.address,
                    zeroMerkleRoot
                )
            ).to.be.revertedWithCustomError(airdropNft, "ZeroMerkleRoot");
        });

        it("should revert if initialized with zero address for sender", async () => {
            await expect(
                airdropNft.initialize(
                    ethers.constants.AddressZero,
                    nft.address,
                    merkleRoot
                )
            ).to.be.revertedWithCustomError(airdropNft, "ZeroAddress");
        });

        it("should revert if initialized with zero address for nft", async () => {
            await expect(
                airdropNft.initialize(
                    sender.address,
                    ethers.constants.AddressZero,
                    merkleRoot
                )
            ).to.be.revertedWithCustomError(airdropNft, "ZeroAddress");
        });

        it("should revert if initialized with non contract address for nft", async () => {
            await expect(
                airdropNft.initialize(
                    sender.address,
                    sender.address, // token address
                    merkleRoot
                )
            ).to.be.revertedWithCustomError(airdropNft, "NotContract");
        });

        it("should let owner to initialize the contract", async () => {
            await expect(
                airdropNft.initialize(sender.address, nft.address, merkleRoot)
            )
                .to.emit(airdropNft, "SenderChanged")
                .to.emit(airdropNft, "NonFungibleTokenChanged")
                .to.emit(airdropNft, "MerkleRootChanged");

            expect(await airdropNft.getSender()).to.be.equal(sender.address);
            expect(await airdropNft.getMerkleRoot()).to.be.equal(merkleRoot);
            expect(await airdropNft.getToken()).to.be.equal(nft.address);
        });

        it("should only initialize the given value", async () => {
            await expect(
                airdropNft.initialize(sender.address, nft.address, merkleRoot)
            )
                .to.emit(airdropNft, "SenderChanged")
                .to.emit(airdropNft, "NonFungibleTokenChanged")
                .to.emit(airdropNft, "MerkleRootChanged");

            await expect(
                airdropNft.initialize(
                    sender.address,
                    nft.address,
                    badTree.getHexRoot()
                )
            )
                .to.emit(airdropNft, "MerkleRootChanged")
                .not.to.emit(airdropNft, "SenderChanged")
                .not.to.emit(airdropNft, "NonFungibleTokenChanged");

            await expect(
                airdropNft.initialize(
                    users[0].address,
                    nft.address,
                    badTree.getHexRoot()
                )
            )
                .to.emit(airdropNft, "SenderChanged")
                .not.to.emit(airdropNft, "NonFungibleTokenChanged")
                .not.to.emit(airdropNft, "MerkleRootChanged");

            const NewNFT = await ethers.getContractFactory("Cats");
            const newNft = await NewNFT.deploy();
            newNft.deployed();

            await expect(
                airdropNft.initialize(
                    users[0].address,
                    newNft.address,
                    badTree.getHexRoot()
                )
            )
                .to.emit(airdropNft, "NonFungibleTokenChanged")
                .not.to.emit(airdropNft, "SenderChanged")
                .not.to.emit(airdropNft, "MerkleRootChanged");
        });

        it("should not emit any changed events if initialized with same values", async () => {
            await expect(
                airdropNft.initialize(sender.address, nft.address, merkleRoot)
            )
                .to.emit(airdropNft, "SenderChanged")
                .to.emit(airdropNft, "NonFungibleTokenChanged")
                .to.emit(airdropNft, "MerkleRootChanged");

            await expect(
                airdropNft.initialize(sender.address, nft.address, merkleRoot)
            )
                .not.to.emit(airdropNft, "SenderChanged")
                .not.to.emit(airdropNft, "NonFungibleTokenChanged")
                .not.to.emit(airdropNft, "MerkleRootChanged");
        });
    });

    describe("Function claim", () => {
        let leaf;
        let proof;
        let tx;
        it("should revert if airdropNft is inactive", async () => {
            leaf = generateLeaf(recepients[0].address, recepients[0].value);
            proof = merkleTree.getHexProof(leaf);

            await expect(
                airdropNft.connect(users[0]).claim(1, proof)
            ).to.be.revertedWithCustomError(airdropNft, "AirdropInActive");
        });

        it("should revert if user is not in merkle tree", async () => {
            await airdropNft.initialize(
                sender.address,
                nft.address,
                merkleRoot
            );

            leaf = generateLeaf(
                badRecepients[0].address,
                badRecepients[0].value
            );
            proof = badTree.getHexProof(leaf);

            await expect(
                airdropNft.connect(users[5]).claim(6, proof)
            ).to.be.revertedWithCustomError(airdropNft, "NotInMerkleTree");
        });

        it("should return false if not claimed", async () => {
            expect(await airdropNft.hasClaimed(users[0].address)).to.equal(
                false
            );
        });

        it("should revert if user already claimed", async () => {
            // set approval for all
            tx = await nft
                .connect(sender)
                .setApprovalForAll(airdropNft.address, true);
            await tx.wait();

            await airdropNft.initialize(
                sender.address,
                nft.address,
                merkleRoot
            );

            leaf = generateLeaf(recepients[0].address, recepients[0].value);
            proof = merkleTree.getHexProof(leaf);

            tx = await airdropNft.connect(users[0]).claim(1, proof);
            await tx.wait();

            expect(await airdropNft.hasClaimed(users[0].address)).to.equal(
                true
            );

            await expect(
                airdropNft.connect(users[0]).claim(1, proof)
            ).to.be.revertedWithCustomError(airdropNft, "AlreadyClaimed");
        });

        it("should let user added in merkle tree to claim tokens", async () => {
            // set approval for all
            tx = await nft
                .connect(sender)
                .setApprovalForAll(airdropNft.address, true);
            await tx.wait();

            await airdropNft.initialize(
                sender.address,
                nft.address,
                merkleRoot
            );

            leaf = generateLeaf(recepients[2].address, recepients[2].value);
            proof = merkleTree.getHexProof(leaf);

            await expect(
                airdropNft.connect(users[2]).claim(3, proof)
            ).to.changeTokenBalance(nft, users[2], 1);

            expect(await airdropNft.hasClaimed(users[2].address)).to.equal(
                true
            );
        });
    });
});
