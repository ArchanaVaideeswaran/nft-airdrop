import { ethers } from "hardhat";
const { accounts } = require("../airdrop.json");

let proofs: any;

async function main() {
    const [...users] = await ethers.getSigners();
    const user0 = users[0];

    let network = (await ethers.provider.getNetwork()).name;
    network = network == "unknown" ? "localhost" : network;

    proofs = require(`../proofs-${network}.json`);

    const AirdropNFT = require(`../build/${network}/MerkleAirdropNFT.json`);
    const airdropNft = await ethers.getContractAt(
        "MerkleAirdropNFT",
        AirdropNFT.address
    );

    let tx;
    let proof;
    let tokenId;
    if (network == "goerli") {
        proof = getProof(user0.address);
        tokenId = getTokenId(user0.address);
        tokenId = ethers.BigNumber.from(tokenId);
        console.log({ address: user0.address, proof });
        if (proof.length != 0) {
            try {
                tx = await airdropNft
                    .connect(user0)
                    .claim(tokenId, proof)
                    .catch((err: any) => {
                        throw err;
                    });

                tx = await tx.wait();
                console.log(`${user0.address} claimed tokenId ${tokenId} successfully`);
            } catch (err) {
                console.log(err);
            }
        }
    } else if (network == "localhost") {
        for (let i = 1; i <= 5; i++) {
            let tx;
            let user = users[i];
            tokenId = i;
            proof = proofs.proofs[i - 1].proof;
            if (proof.length != 0) {
                try {
                    tx = await airdropNft
                        .connect(user)
                        .claim(tokenId, proof)
                        .catch((err: any) => {
                            throw err;
                        });

                    tx = await tx.wait();
                    console.log(`${user.address} claimed tokenId ${tokenId} successfully`);
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
}

function getProof(address: string) {
    proofs = proofs.proofs;
    for (let i = 0; i < proofs.length; i++) {
        let res = proofs[i];
        if (res.address == address) return res.proof;
    }
    return [];
}

function getTokenId(address: string) {
    for (let i = 0; i < accounts.length; i++) {
        let res = accounts[i];
        if (res.address == address) return res.tokenId;
    }
    return;
}

main();
