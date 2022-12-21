import { ethers } from "hardhat";

async function main() {
  console.log("\n----------Minting Whalez NFT----------\n");

  const [...users] = await ethers.getSigners();
  const owner = users[0];

  let network = (await ethers.provider.getNetwork()).name;
  network = network == "unknown" ? "localhost" : network;

  const Whalez = require(`../build/${network}/Whalez.json`);
  const whalez = await ethers.getContractAt("Whalez", Whalez.address);

  let tx;
  for (let i = 1; i <= 5; i++) {
    try {
      tx = await whalez.mint(owner.address).catch((err: any) => {
        throw err;
      });
      tx = await tx.wait();
      console.log(`tokenId ${i} minted successfully`);
    } catch (error) {
      console.log(error);
    }
  }
}

main();
