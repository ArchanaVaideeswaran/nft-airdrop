# Airdrop NFT using merkle proof

## About

MerkleAirdropNFT is a contract that allows recepients to claim NFT's via merkle airdrop if they prove that they are a part of the merkle tree.

Generate merkle tree using [merkle-tree-generator](./scripts/utils/merkle-tree-generator.ts), by passing in a list of recepients (refer [airdrop.json](./airdrop.json)).

### Contract structure

![MerkleAirdropNFT.sol Mindmap](./mindmap.jpg "MerkleAirdropNFT Mindmap")

## Testing on Goerli testnet

MerkleAirdrop.sol deployed at: [0xc689202d0dd7A259A33985cF7dD1A7928e7B7562](https://goerli.etherscan.io/address/0xc689202d0dd7A259A33985cF7dD1A7928e7B7562#code)

Whalez.sol deployed at: [0x4561a5610dE098055fD470Bf3aEaDBa1CeA9b5f7](https://goerli.etherscan.io/address/0x4561a5610dE098055fD470Bf3aEaDBa1CeA9b5f7#code)

MerkleAirdrop has been initialized with

```code
{
    sender: '0x7748329C48FE9F5Dc50f5858E174Dbc7A037117D',
    nft: '0x4561a5610dE098055fD470Bf3aEaDBa1CeA9b5f7',
    merkleRoot: '0x6c54cfd27bdcdf981adc92f19578a0c2f3e1d6d1d1085008d9c2c7fc52915356'
}
```

The following recepients have been added to merkle tree

```code
{
    "accounts": [
        {
            "address": "0x5B9e19a2d7a4Bc81B120D07EF844aB96E874f911",
            "tokenId": "3"
        },
        {
            "address": "0x03Dc0382895Dff762971FadcaB62236AaD79D518",
            "tokenId": "4"
        },
        {
            "address": "0x34EE5635641aa3D4B724E0a5EB51B69f0E26Ec8b",
            "tokenId": "1"
        },
        {
            "address": "0x1eba0B8BBC49921f28b79984B9D9921BfDBccA0c",
            "tokenId": "2"
        }
    ]
}
```

## Installation

Install the necessary dependencies mentioned in [package.json](./package.json)

```console
npm install
```

## Usage

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache

```console
npx hardhat clean
```

### Compile

Compile the contracts and generate typechain types

```console
npx hardhat compile
```

### Test

Run testcases for the smart contracts

```console
npx hardhat test
```

### Contract Size

Generate smart contract size

```console
npx hardhat size-contracts
```

### Coverage

Generate coverage reports for the smart contract

```console
npx hardhat coverage
```

### Deploy

-   Environment variables: Create a `.env` file with values as in [.env.example](./.env.example)

#### localhost

Run hardhat node in one terminal and run the deploy script in another terminal.

```console
npx hardhat node
```
```console
npx hardhat run scripts/deploy.ts --network <network>
```

#### Goerli Testnet

-   Install [Truffle](https://trufflesuite.com/docs/truffle/how-to/use-the-truffle-dashboard/) `npm install -g truffle`
-   Run `truffle dashboard` on one terminal
-   Truffle dashboard will open up on `http://localhost:24012/rpc`
-   Connect wallet and switch to Goerli test network
-   Run the deploy script in another terminal

```console
npx hardhat run scripts/deploy.ts --network truffle
```

### Flatten

```console
npx hardhat flatten ./contracts/Contract.sol > ./flattened/Contract.sol
```

Then, the file can be used to upload the code manually (click on 'Contract' tab >> verify and publish) or using script (with Block explorer API as per the network)

### Verify and Publish

Passing constructor params as command line arguments if any exists

```console
npx hardhat verify --network <network_name> <deployed_contract_address> <constructor params>
```

OR

Passing a file with constructor params to --constructor args flag

```console
npx hardhat verify --network <network_name> <deployed_contract_address> --constructor-args verify/contract.args.ts
```

For multiple arguments, follow this [guide](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html#multiple-api-keys-and-alternative-block-explorers).

## Reports

Checkout [Reports.md](./Reports.md)
