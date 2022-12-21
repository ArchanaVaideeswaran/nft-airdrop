import { ethers } from "hardhat";
import {
  generateLeaf,
  generateTree,
  Recipient,
} from "./utils/merkle-tree-generator";
import path from "path";
import * as fs from "fs";
const { accounts } = require("../airdrop.json");

async function main() {
  console.log("\n----------Initializing MerkleAirdropNFT----------\n");

  const [...users] = await ethers.getSigners();
  const sender = users[0];

  let network = (await ethers.provider.getNetwork()).name;
  network = network == "unknown" ? "localhost" : network;

  const Whalez = require(`../build/${network}/Whalez.json`);
  const whalez = await ethers.getContractAt("Whalez", Whalez.address);

  let recipients: Recipient[] = [];
  if (network == "goerli") {
    for (let i = 0; i < accounts.length; i++) {
      const { address, tokenId } = accounts[i];
      recipients.push({ address, value: tokenId });
    }
  } else if (network == "localhost") {
    for (let i = 1; i <= 5; i++) {
      const address = users[i].address;
      const tokenId = i.toString();
      recipients.push({ address, value: tokenId });
    }
  }
  const merkleTree = generateTree(recipients);
  const merkleRoot = merkleTree.getHexRoot();

  const AirdropNFT = require(`../build/${network}/MerkleAirdropNFT.json`);
  const airdropNft = await ethers.getContractAt(
    "MerkleAirdropNFT",
    AirdropNFT.address
  );

  try {
    let tx: any;
    tx = await whalez
      .setApprovalForAll(airdropNft.address, true)
      .catch((err: any) => {
        throw err;
      });
    await tx.wait();

    tx = await airdropNft
      .initialize(sender.address, whalez.address, merkleRoot)
      .catch((err: any) => {
        throw err;
      });
    await tx.wait();

    console.log("\n----------MerkleAirdropNFT Initialized----------\n");
    console.log({
      sender: sender.address,
      nft: whalez.address,
      merkleRoot: merkleRoot,
    });

    // store proofs in proofs.json
    let proofs: any[] = [];
    for (let i = 0; i < recipients.length; i++) {
      let leaf = generateLeaf(recipients[i].address, recipients[i].value);
      let proof = {
        address: recipients[i].address,
        proof: merkleTree.getHexProof(leaf),
      };
      proofs.push(proof);
    }
    const outputPath: string = path.join(
      __dirname,
      `../proofs-${network}.json`
    );

    fs.writeFileSync(
      outputPath,
      JSON.stringify({
        proofs,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

main();
