
const hre = require("hardhat");

async function main() {

  const QuadraticPosts = await hre.ethers.getContractFactory("QuadraticPosts");
  const quadraticPosts = await QuadraticPosts.deploy();

  await quadraticPosts.deployed();

  console.log("Quadratic Posts deployed to:", quadraticPosts.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
