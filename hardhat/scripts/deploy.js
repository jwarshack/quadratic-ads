
const hre = require("hardhat");

async function main() {

  const QuadraticAds = await hre.ethers.getContractFactory("QuadraticAds");
  const quadraticAds = await QuadraticAds.deploy();

  await quadraticAds.deployed();

  console.log("Quadratic Ads deployed to:", quadraticAds.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
