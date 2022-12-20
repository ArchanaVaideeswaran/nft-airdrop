import hre from "hardhat";
const Whalez = require("../build/goerli/Whalez.json");

const main = async () => {
    await hre.run("verify:verify", {
        address: Whalez.address,
        contract: "contracts/Whalez.sol:Whalez",
    });
};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
