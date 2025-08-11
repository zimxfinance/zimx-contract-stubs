import { ethers } from "hardhat";

async function main() {
  const ZIMX = await ethers.getContractFactory("ZIMXStub");
  const zimx = await ZIMX.deploy();
  await zimx.deployed();
  console.log(`ZIMXStub deployed to ${zimx.address}`);

  const ZiGX = await ethers.getContractFactory("ZiGXStub");
  const zigx = await ZiGX.deploy();
  await zigx.deployed();
  console.log(`ZiGXStub deployed to ${zigx.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
