import { ethers } from "hardhat";
import { storeContract } from "./utils/store-contract";

async function main() {
  console.log("\n----------Deploying Whalez NFT----------\n");

  const [deployer] = await ethers.getSigners();
  console.log("Deployer: ", deployer.address);

  const Whalez = await ethers.getContractFactory("Whalez");
  const whalez = await Whalez.deploy();
  await whalez.deployed();

  console.log("\n----------Deployed MerkleAirdropNFT----------\n");
  console.log("Whalez NFT deployed at: ", whalez.address);

  storeContract(
    whalez.address,
    JSON.parse(String(whalez.interface.format("json"))),
    "Whalez"
  );
}

main();
