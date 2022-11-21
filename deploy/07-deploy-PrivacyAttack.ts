import { ethers, network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { devChains, networkConfig } from "../helper-hardhat-config";

const deployPrivacyAttack: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  // env variables
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const attackAddress = "0xd5274cB4c0cA9284396E950951604d03058cDecA"; // sepolia

  /** deploy script (step 1) */
  const args: any[] = [attackAddress];
  const privacyAttack = await deploy("PrivacyAttack", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  });

  /** from here on attack script (step 2) */

  ///** optional: verify  */
  if (!devChains.includes(network.name)) {
    log("------- verifying started --------");
    await hre.run("verify:verify", {
      address: privacyAttack.address,
      contract: "contracts/PrivacyAttack.sol:PrivacyAttack", //Filename.sol:ClassName
      constructorArguments: args,
    });
  }
};

export default deployPrivacyAttack;

deployPrivacyAttack.tags = ["all", "privacy"];
