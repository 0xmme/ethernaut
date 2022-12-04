/* eslint-disable node/no-unpublished-import */
import { BigNumber } from "ethers";
import { ethers } from "hardhat";

export interface networkConfigItem {
  blockConfirmations?: number;
  callbackGasLimit?: number;
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
  localhost: {
    blockConfirmations: 1,
    callbackGasLimit: 500000,
  },
  hardhat: {
    blockConfirmations: 1,
    callbackGasLimit: 500000,
  },
  goerli: {
    blockConfirmations: 6,
    callbackGasLimit: 500000,
  },
  sepolia: {
    blockConfirmations: 6,
    callbackGasLimit: 500000,
  },
};

export const devChains = ["hardhat", "localhost"];
export const DECIMALS = 8;
export const INITIAL_ANSWER = 200000000000;
