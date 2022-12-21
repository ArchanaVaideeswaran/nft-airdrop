import hre from "hardhat";
const AirdropNFT = require("../build/goerli/MerkleAirdropNFT.json");

const main = async () => {
  await hre.run("verify:verify", {
    address: AirdropNFT.address,
    contract: "contracts/MerkleAirdropNFT.sol:MerkleAirdropNFT",
  });
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
