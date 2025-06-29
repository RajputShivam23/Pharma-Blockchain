const hre = require("hardhat");

async function main() {
  const PharmaSupplyChain = await hre.ethers.getContractFactory("PharmaSupplyChain");
  const pharma = await PharmaSupplyChain.deploy();
  await pharma.deployed();

  console.log(`Smart contract deployed at: ${pharma.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


