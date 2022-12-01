import { ethers, network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { devChains, networkConfig } from "../helper-hardhat-config";
import { GatekeeperOneAttack } from "../typechain-types/contracts/GatekeeperOneAttack";

const deployGatekeeperOneAttack: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  // env variables
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();

  //const argsGKOne: any[] = [];
  //const victim = await deploy("GatekeeperOne", {
  //  from: deployer,
  //  args: argsGKOne,
  //  log: true,
  //  waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  //});

  //const victimAddress = victim.address;

  const victimAddress = "0x8B5ec0fB1Baa565C1c1097631e01Ff45116de886"; // sepolia

  /** deploy script (step 1) */
  const args: any[] = [victimAddress];
  const attacker = await deploy("GatekeeperOneAttack", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  });

  /** from here on attack script (step 2) */

  // @ts-ignore
  //const attackTx = await attacker.attack();
  ///** optional: verify  */
  if (!devChains.includes(network.name)) {
    log("------- verifying started --------");
    await hre.run("verify:verify", {
      address: attacker.address,
      contract: "contracts/GatekeeperOneAttack.sol:GatekeeperOneAttack", //Filename.sol:ClassName
      constructorArguments: args,
    });
  }

  //if (!devChains.includes(network.name)) {
  //  log("------- verifying started --------");
  //  await hre.run("verify:verify", {
  //    address: victim.address,
  //    contract: "contracts/GatekeeperOne.sol:GatekeeperOne", //Filename.sol:ClassName
  //    constructorArguments: argsGKOne,
  //  });
  //}
};

export default deployGatekeeperOneAttack;

deployGatekeeperOneAttack.tags = ["all", "gatekeeperone"];
