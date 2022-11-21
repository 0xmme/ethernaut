import { ethers, network } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { devChains, networkConfig } from "../helper-hardhat-config";

const deployElevatorMove: DeployFunction = async (
  hre: HardhatRuntimeEnvironment
) => {
  // env variables
  const { getNamedAccounts, deployments } = hre;
  const { deploy, log, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const attackAddress = "0x16BFE9A2478B8E5808567B3D1bEC246c244B2231"; // sepolia
  //const contractToAttack = "Elevator";
  //const victim = await ethers.getContractAt(contractToAttack, attackAddress);

  /** deploy script (step 1) */
  const args: any[] = [attackAddress];
  const Attacker = await deploy("ElevatorMove", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  });

  /** from here on attack script (step 2) */

  //const Attacker = await get("ElevatorMove");
  //const attackContract = await ethers.getContractAt(
  //  "ElevatorMove",
  //  Attacker.address
  //);

  //const tx = await attackContract.move("50");

  ///** optional: verify  */
  if (!devChains.includes(network.name)) {
    log("------- verifying started --------");
    await hre.run("verify:verify", {
      address: Attacker.address,
      contract: "contracts/ElevatorMove.sol:ElevatorMove", //Filename.sol:ClassName
      constructorArguments: args,
    });
  }
};

export default deployElevatorMove;

deployElevatorMove.tags = ["all", "elevator"];
