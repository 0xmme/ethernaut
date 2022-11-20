import { network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { devChains, networkConfig } from "../helper-hardhat-config";

const deployForceAttack: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  // env variables
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const args: any[] = [];

  const forceAttack = await deploy("ForceAttack", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  });

  if (!devChains.includes(network.name)) {
    log("------- verifying started --------");
    //verify

    await hre.run("verify:verify", {
      address: forceAttack.address,
      contract: "contracts/ForceAttack.sol:ForceAttack", //Filename.sol:ClassName
      constructorArguments: args,
    });
  }
};

export default deployForceAttack;

deployForceAttack.tags = ["all", "force"];
