import { ethers } from "hardhat";

import { CoinFlip } from "../typechain-types";

async function main() {
  const block = await ethers.provider.getBlock(
    await ethers.provider.getBlockNumber()
  );

  const instance = "0xd7ab381584eb8f96c493DaaD45782f940e9F3558";

  const coinFlip = await ethers.getContractAt("CoinFlip", instance);

  const nostradamusAddress = "0x2a75D63FB8f687F2C9Bd6f5336a4248937c108ce";
  const nostradamus = await ethers.getContractAt(
    "CoinFlipNostradamus",
    nostradamusAddress
  );

  const tx = await nostradamus.flipCorrect();
  await tx.wait(2);

  const wins = (await coinFlip.consecutiveWins()).toString();
  console.log("wins:", wins);

  //for (let i = 0; i < 5; i++) {
  //  const tx = await nostradamus.flipCorrect();
  //  await tx.wait(6);

  //  const wins = (await coinFlip.consecutiveWins()).toString();
  //  console.log("wins:", wins);
  //}
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
