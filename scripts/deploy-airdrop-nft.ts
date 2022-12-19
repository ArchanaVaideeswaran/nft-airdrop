import { ethers } from "hardhat";
import { storeContract } from "./utils/store-contract";

async function main() {
    console.log("\n----------Deploying MerkleAirdropNFT----------\n");

    const [deployer] = await ethers.getSigners();
    console.log("Deployer: ", deployer.address);

    const Airdrop = await ethers.getContractFactory("MerkleAirdropNFT");
    const airdrop = await Airdrop.deploy();
    await airdrop.deployed();

    console.log("\n----------Deployed MerkleAirdropNFT----------\n");
    console.log("MerkleAirdropNFT deployed at: ", airdrop.address);

    storeContract(
        airdrop.address,
        JSON.parse(String(airdrop.interface.format("json"))),
        "MerkleAirdropNFT"
    );
}

main();
