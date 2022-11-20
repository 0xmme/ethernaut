import { ethers, network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { devChains, networkConfig } from "../helper-hardhat-config";

const deployKingAttack: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  // env variables
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const args: any[] = ["0x5ae82b9F50797fcd10A5a713390b7A5E6C6CF07F"];

  const kingContract = await ethers.getContractAt(
    "King",
    "0x5ae82b9F50797fcd10A5a713390b7A5E6C6CF07F"
  );
  const currentPrize = await kingContract.prize();

  console.log(currentPrize.toString());
  //const kingAttack = await deploy("KingAttack", {
  //  from: deployer,
  //  args: args,
  //  log: true,
  //  value: currentPrize.add(5),
  //  waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  //});

  //if (!devChains.includes(network.name)) {
  //  log("------- verifying started --------");
  //  //verify

  //  await hre.run("verify:verify", {
  //    address: kingAttack.address,
  //    contract: "contracts/KingAttack.sol:KingAttack", //Filename.sol:ClassName
  //    constructorArguments: args,
  //  });
  //}
};

export default deployKingAttack;

deployKingAttack.tags = ["all", "king"];
