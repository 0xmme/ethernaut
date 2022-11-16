import { network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { devChains, networkConfig } from "../helper-hardhat-config";

const deployCoinFlipNostradamus: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  // env variables
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("------- Nostradamus deployment started --------");

  const args: any[] = [];

  const coinFlipNostradamus = await deploy("CoinFlipNostradamus", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  });

  if (!devChains.includes(network.name)) {
    log("------- verifying started --------");
    //verify

    await hre.run("verify:verify", {
      address: coinFlipNostradamus.address,
      contract: "contracts/CoinFlipNostradamus.sol:CoinFlipNostradamus", //Filename.sol:ClassName
      constructorArguments: args,
    });
  }
};

export default deployCoinFlipNostradamus;

deployCoinFlipNostradamus.tags = ["all", "nostradamus"];
