import { ethers } from "hardhat";

async function main() {

  // Getting local ethereum wallet address
  // const [deployer] = await ethers.getSigners();
  // console.log(deployer.address);

  // Contract Deployment
  const token = await ethers.deployContract("SimpleERC20",["Test","TST",100000]);
  console.log("Token address:", await token.getAddress());
  
  // Upgradeable Contract Deployment
  // const tokenUpgradeable = await ethers.deployContract("BlackHeart",[]);
  // await tokenUpgradeable.waitForDeployment();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
