# Reports

## Coverage

```console
/nft-airdrop
$ npx hardhat coverage

Version
=======
> solidity-coverage: v0.8.2

Instrumenting for coverage...
=============================

> Cats.sol
> Greeter.sol
> MerkleAirdropNFT.sol
> Whalez.sol

Compilation:
============

(node:4436) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Generating typings for: 17 artifacts in dir: typechain-types for target: ethers-v5
Successfully generated 40 typings!
Compiled 17 Solidity files successfully

Network Info
============
> HardhatEVM: v2.12.4
> network:    hardhat



  Merkle AirdropNFT Token
Deployer:  0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Merkle root:  0xdb58dcc44a6dea2d63555ce4641bb9b5b6202ad230254c07068b8aeb170e03ee
    Function initialize
Whalez NFT deployed at:  0x8464135c8F25Da09e49BC8782676a84730C318bC
MerkleAirdropNFT deployed at: 0x5FbDB2315678afecb367f032d93F642f64180aa3
      ✔ should not let other than owner to initialize (42ms)
Whalez NFT deployed at:  0x1275D096B9DBf2347bD2a131Fb6BDaB0B4882487
MerkleAirdropNFT deployed at: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
      ✔ should revert if initialized with zero merkle root
Whalez NFT deployed at:  0x2dE080e97B0caE9825375D31f5D0eD5751fDf16D
MerkleAirdropNFT deployed at: 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
      ✔ should revert if initialized with zero address for sender
Whalez NFT deployed at:  0x85C5Dd61585773423e378146D4bEC6f8D149E248
MerkleAirdropNFT deployed at: 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
      ✔ should revert if initialized with zero address for nft
Whalez NFT deployed at:  0x446e7636a5Fa9af46c3718719e465B547248bF62
MerkleAirdropNFT deployed at: 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853
      ✔ should revert if initialized with non contract address for nft
Whalez NFT deployed at:  0x5370F78c6af2Da9cF6642382A3a75F9D5aEc9cc1
MerkleAirdropNFT deployed at: 0x8A791620dd6260079BF849Dc5567aDC3F2FdC318
      ✔ should revert if initialized with non ERC721 contract address for nft
Whalez NFT deployed at:  0xE5BD5bDC03371fB239956dbbF40bD185D6c2ea28
MerkleAirdropNFT deployed at: 0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0
      ✔ should let owner to initialize the contract (57ms)
Whalez NFT deployed at:  0xc63d2a04762529edB649d7a4cC3E57A0085e8544
MerkleAirdropNFT deployed at: 0x9A676e781A523b5d0C0e43731313A708CB607508
      ✔ should only initialize the given value (96ms)
Whalez NFT deployed at:  0xD499f5F7d3C918D0e553BA03954c4E02af16B6e4
MerkleAirdropNFT deployed at: 0xc6e7DF5E7b4f2A278906862b61205850344D4e7d
      ✔ should not emit any changed events if initialized with same values
    Function claim
Whalez NFT deployed at:  0x84227190685c25c4aF662EE1bD0E4cd82e57360D
MerkleAirdropNFT deployed at: 0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44
      ✔ should revert if airdropNft is inactive
Whalez NFT deployed at:  0xf69E1dFAc3D43F438Bae80090b8E186B0231CFeb
MerkleAirdropNFT deployed at: 0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f
      ✔ should revert if user is not in merkle tree
Whalez NFT deployed at:  0x7B3Be2dDDdDf9A0a3fE1DC57B98980F662C3a422
MerkleAirdropNFT deployed at: 0x7a2088a1bFc9d81c55368AE168C2C02570cB814F
      ✔ should return false if not claimed
Whalez NFT deployed at:  0xDeBD0Bc00932E8b5bEfF65053989B0687c894b5F
MerkleAirdropNFT deployed at: 0x09635F643e140090A9A8Dcd712eD6285858ceBef
      ✔ should revert if user already claimed (60ms)
Whalez NFT deployed at:  0xa115891Cae16388b84cb7a521A2032f6b354FE25
MerkleAirdropNFT deployed at: 0x67d269191c92Caf3cD7723F116c85e6E9bf55933
      ✔ should let user added in merkle tree to claim tokens (66ms)


  14 passing (3s)

-----------------------|----------|----------|----------|----------|----------------|
File                   |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------------------|----------|----------|----------|----------|----------------|
 contracts\            |    84.44 |    80.56 |    83.33 |    85.71 |                |
  Cats.sol             |        0 |        0 |    33.33 |    14.29 |... 21,22,23,27 |
  Greeter.sol          |        0 |      100 |        0 |        0 |              8 |
  MerkleAirdropNFT.sol |      100 |     87.5 |      100 |      100 |                |
  Whalez.sol           |      100 |       50 |      100 |      100 |                |
-----------------------|----------|----------|----------|----------|----------------|
All files              |    84.44 |    80.56 |    83.33 |    85.71 |                |
-----------------------|----------|----------|----------|----------|----------------|

> Istanbul reports written to ./coverage/ and ./coverage.json
```
## Contract Size

```console
/nft-airdrop
$ npx hardhat size-contracts
(node:12016) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Generating typings for: 17 artifacts in dir: typechain-types for target: ethers-v5
Successfully generated 40 typings!
Compiled 17 Solidity files successfully
 ·--------------------|--------------|----------------·
 |  Contract Name     ·  Size (KiB)  ·  Change (KiB)  │
 ·····················|··············|·················
 |  Address           ·       0.084  ·                │
 ·····················|··············|·················
 |  Counters          ·       0.084  ·                │
 ·····················|··············|·················
 |  Strings           ·       0.084  ·                │
 ·····················|··············|·················
 |  MerkleProof       ·       0.084  ·                │
 ·····················|··············|·················
 |  Math              ·       0.084  ·                │
 ·····················|··············|·················
 |  Greeter           ·       0.329  ·                │
 ·····················|··············|·················
 |  MerkleAirdropNFT  ·       2.039  ·                │
 ·····················|··············|·················
 |  ERC721            ·       4.415  ·                │
 ·····················|··············|·················
 |  Cats              ·       5.054  ·                │
 ·····················|··············|·················
 |  Whalez            ·       5.054  ·                │
 ·--------------------|--------------|----------------·
```

## Slither Security Analysis

```console
/nft-airdrop
$ slither .
'npx hardhat compile --force' running
Generating typings for: 17 artifacts in dir: typechain-types for target: ethers-v5
Successfully generated 40 typings!
Compiled 17 Solidity files successfully

(node:21992) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)


Math.mulDiv(uint256,uint256,uint256) (node_modules/@openzeppelin/contracts/utils/math/Math.sol#55-135) performs a multiplication on the result of a division:
        - denominator = denominator / twos (node_modules/@openzeppelin/contracts/utils/math/Math.sol#102)
        - inverse = (3 * denominator) ^ 2 (node_modules/@openzeppelin/contracts/utils/math/Math.sol#117)
Math.mulDiv(uint256,uint256,uint256) (node_modules/@openzeppelin/contracts/utils/math/Math.sol#55-135) performs a multiplication on the result of a division:
        - denominator = denominator / twos (node_modules/@openzeppelin/contracts/utils/math/Math.sol#102)
        - inverse *= 2 - denominator * inverse (node_modules/@openzeppelin/contracts/utils/math/Math.sol#121)
Math.mulDiv(uint256,uint256,uint256) (node_modules/@openzeppelin/contracts/utils/math/Math.sol#55-135) performs a multiplication on the result of a division:
        - denominator = denominator / twos (node_modules/@openzeppelin/contracts/utils/math/Math.sol#102)
        - inverse *= 2 - denominator * inverse (node_modules/@openzeppelin/contracts/utils/math/Math.sol#122)
Math.mulDiv(uint256,uint256,uint256) (node_modules/@openzeppelin/contracts/utils/math/Math.sol#55-135) performs a multiplication on the result of a division:
        - denominator = denominator / twos (node_modules/@openzeppelin/contracts/utils/math/Math.sol#102)
        - inverse *= 2 - denominator * inverse (node_modules/@openzeppelin/contracts/utils/math/Math.sol#123)
Math.mulDiv(uint256,uint256,uint256) (node_modules/@openzeppelin/contracts/utils/math/Math.sol#55-135) performs a multiplication on the result of a division:
        - denominator = denominator / twos (node_modules/@openzeppelin/contracts/utils/math/Math.sol#102)
        - inverse *= 2 - denominator * inverse (node_modules/@openzeppelin/contracts/utils/math/Math.sol#124)
Math.mulDiv(uint256,uint256,uint256) (node_modules/@openzeppelin/contracts/utils/math/Math.sol#55-135) performs a multiplication on the result of a division:
        - denominator = denominator / twos (node_modules/@openzeppelin/contracts/utils/math/Math.sol#102)
        - inverse *= 2 - denominator * inverse (node_modules/@openzeppelin/contracts/utils/math/Math.sol#125)
Math.mulDiv(uint256,uint256,uint256) (node_modules/@openzeppelin/contracts/utils/math/Math.sol#55-135) performs a multiplication on the result of a division:
        - denominator = denominator / twos (node_modules/@openzeppelin/contracts/utils/math/Math.sol#102)
        - inverse *= 2 - denominator * inverse (node_modules/@openzeppelin/contracts/utils/math/Math.sol#126)
Math.mulDiv(uint256,uint256,uint256) (node_modules/@openzeppelin/contracts/utils/math/Math.sol#55-135) performs a multiplication on the result of a division:
        - prod0 = prod0 / twos (node_modules/@openzeppelin/contracts/utils/math/Math.sol#105)
        - result = prod0 * inverse (node_modules/@openzeppelin/contracts/utils/math/Math.sol#132)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#divide-before-multiply

ERC721._checkOnERC721Received(address,address,uint256,bytes) (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#429-451) ignores return value by IERC721Receiver(to).onERC721Received(_msgSender(),from,tokenId,data) (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#436-447)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#unused-return

Variable 'ERC721._checkOnERC721Received(address,address,uint256,bytes).retval (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#436)' in ERC721._checkOnERC721Received(address,address,uint256,bytes) (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#429-451) potentially used before declaration: retval == IERC721Receiver.onERC721Received.selector (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#437)
Variable 'ERC721._checkOnERC721Received(address,address,uint256,bytes).reason (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#438)' in ERC721._checkOnERC721Received(address,address,uint256,bytes) (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#429-451) potentially used before declaration: reason.length == 0 (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#439)
Variable 'ERC721._checkOnERC721Received(address,address,uint256,bytes).reason (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#438)' in ERC721._checkOnERC721Received(address,address,uint256,bytes) (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#429-451) potentially used before declaration: revert(uint256,uint256)(32 + reason,mload(uint256)(reason)) (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#444)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#pre-declaration-usage-of-local-variables      

Reentrancy in MerkleAirdropNFT.claim(uint256,bytes32[]) (contracts/MerkleAirdropNFT.sol#64-90):
        External calls:
        - _nft.safeTransferFrom(_sender,msg.sender,tokenId) (contracts/MerkleAirdropNFT.sol#86)
        Event emitted after the call(s):
        - Claimed(msg.sender,tokenId) (contracts/MerkleAirdropNFT.sol#89)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3

ERC721._checkOnERC721Received(address,address,uint256,bytes) (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#429-451) uses assembly
        - INLINE ASM (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#443-445)
Address._revert(bytes,string) (node_modules/@openzeppelin/contracts/utils/Address.sol#231-243) uses assembly
        - INLINE ASM (node_modules/@openzeppelin/contracts/utils/Address.sol#236-239)
Strings.toString(uint256) (node_modules/@openzeppelin/contracts/utils/Strings.sol#18-38) uses assembly
        - INLINE ASM (node_modules/@openzeppelin/contracts/utils/Strings.sol#24-26)
        - INLINE ASM (node_modules/@openzeppelin/contracts/utils/Strings.sol#30-32)
MerkleProof._efficientHash(bytes32,bytes32) (node_modules/@openzeppelin/contracts/utils/cryptography/MerkleProof.sol#215-222) uses assembly
        - INLINE ASM (node_modules/@openzeppelin/contracts/utils/cryptography/MerkleProof.sol#217-221)
Math.mulDiv(uint256,uint256,uint256) (node_modules/@openzeppelin/contracts/utils/math/Math.sol#55-135) uses assembly   
        - INLINE ASM (node_modules/@openzeppelin/contracts/utils/math/Math.sol#66-70)
        - INLINE ASM (node_modules/@openzeppelin/contracts/utils/math/Math.sol#86-93)
        - INLINE ASM (node_modules/@openzeppelin/contracts/utils/math/Math.sol#100-109)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage

Different versions of Solidity are used:
        - Version used: ['0.8.17', '^0.8.0', '^0.8.1']
        - ^0.8.0 (node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol#4)
        - ^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#4)
        - ^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol#4)
        - ^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol#4)
        - ^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol#4)
        - ^0.8.1 (node_modules/@openzeppelin/contracts/utils/Address.sol#4)
        - ^0.8.0 (node_modules/@openzeppelin/contracts/utils/Context.sol#4)
        - ^0.8.0 (node_modules/@openzeppelin/contracts/utils/Counters.sol#4)
        - ^0.8.0 (node_modules/@openzeppelin/contracts/utils/Strings.sol#4)
        - ^0.8.0 (node_modules/@openzeppelin/contracts/utils/cryptography/MerkleProof.sol#4)
        - ^0.8.0 (node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#4)
        - ^0.8.0 (node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#4)
        - ^0.8.0 (node_modules/@openzeppelin/contracts/utils/math/Math.sol#4)
        - 0.8.17 (contracts/Cats.sol#2)
        - 0.8.17 (contracts/Greeter.sol#2)
        - 0.8.17 (contracts/MerkleAirdropNFT.sol#2)
        - 0.8.17 (contracts/Whalez.sol#2)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#different-pragma-directives-are-used

Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/security/ReentrancyGuard.sol#4) allows old versions
Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol#4) allows old versions
Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol#4) allows old versions
Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol#4) allows old versions     
Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol#4) allows old versions
Pragma version^0.8.1 (node_modules/@openzeppelin/contracts/utils/Address.sol#4) allows old versions
Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/utils/Context.sol#4) allows old versions
Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/utils/Counters.sol#4) allows old versions
Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/utils/Strings.sol#4) allows old versions
Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/utils/cryptography/MerkleProof.sol#4) allows old versions   
Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol#4) allows old versions       
Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol#4) allows old versions      
Pragma version^0.8.0 (node_modules/@openzeppelin/contracts/utils/math/Math.sol#4) allows old versions
Pragma version0.8.17 (contracts/Cats.sol#2) necessitates a version too recent to be trusted. Consider deploying with 0.6.12/0.7.6/0.8.16
Pragma version0.8.17 (contracts/Greeter.sol#2) necessitates a version too recent to be trusted. Consider deploying with 0.6.12/0.7.6/0.8.16
Pragma version0.8.17 (contracts/MerkleAirdropNFT.sol#2) necessitates a version too recent to be trusted. Consider deploying with 0.6.12/0.7.6/0.8.16
Pragma version0.8.17 (contracts/Whalez.sol#2) necessitates a version too recent to be trusted. Consider deploying with 0.6.12/0.7.6/0.8.16
solc-0.8.17 is not recommended for deployment
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-versions-of-solidity

Low level call in Address.sendValue(address,uint256) (node_modules/@openzeppelin/contracts/utils/Address.sol#60-65):   
        - (success) = recipient.call{value: amount}() (node_modules/@openzeppelin/contracts/utils/Address.sol#63)      
Low level call in Address.functionCallWithValue(address,bytes,uint256,string) (node_modules/@openzeppelin/contracts/utils/Address.sol#128-137):
        - (success,returndata) = target.call{value: value}(data) (node_modules/@openzeppelin/contracts/utils/Address.sol#135)
Low level call in Address.functionStaticCall(address,bytes,string) (node_modules/@openzeppelin/contracts/utils/Address.sol#155-162):
        - (success,returndata) = target.staticcall(data) (node_modules/@openzeppelin/contracts/utils/Address.sol#160)  
Low level call in Address.functionDelegateCall(address,bytes,string) (node_modules/@openzeppelin/contracts/utils/Address.sol#180-187):
        - (success,returndata) = target.delegatecall(data) (node_modules/@openzeppelin/contracts/utils/Address.sol#185)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
. analyzed (17 contracts with 81 detectors), 41 result(s) found
```

## Deployments

```console
/nft-airdrop
$ npx hardhat run scripts/deploy-airdrop-nft.ts --network truffle
(node:12388) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

----------Deploying MerkleAirdropNFT----------

(node:22764) ExperimentalWarning: stream/web is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
Deployer:  0x7748329C48FE9F5Dc50f5858E174Dbc7A037117D

----------Deployed MerkleAirdropNFT----------

MerkleAirdropNFT deployed at:  0xc689202d0dd7A259A33985cF7dD1A7928e7B7562
```