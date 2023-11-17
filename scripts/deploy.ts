import { ethers,upgrades } from "hardhat";

async function main() {

  // Getting local ethereum wallet address
  // const [deployer] = await ethers.getSigners();
  // console.log(deployer.address);

  // Contract Deployment
  // const token = await ethers.deployContract("SimpleERC20",["Test","TST",100000]);
  // console.log("Token address:", await token.getAddress());
  
  // Upgradeable Contract Deployment
  // const BlackHeart : any = await ethers.getContractFactory("BlackHeart");
  // const tokenUpgradeable = await upgrades.deployProxy(BlackHeart, ["BlackHeart","BH",18,100000], {initializer: "initialize"});
  // console.log("Token address:", await tokenUpgradeable.getAddress());
  // await tokenUpgradeable.waitForDeployment()
  // console.log(tokenUpgradeable.deploymentTransaction());

  // Upgrade proxy
  const BlackHeart : any = await ethers.getContractFactory("BlackHeart");
  await upgrades.upgradeProxy("0xA49f54d7Db3d14Bbb799F213841319bBE97F5faF", BlackHeart);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
