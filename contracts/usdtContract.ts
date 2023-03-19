import { ethers } from "ethers";
import { baseInterface, Erc20 } from "./interfaces";
import { getUsdtAbi } from "./data/getAbis";
import { getUsdtAddress } from "./data/getAddress";

export default class UsdtContract extends Erc20 {
  constructor(provider: ethers.providers.Web3Provider) {
    super(provider, getUsdtAddress(), getUsdtAbi());
  }
}
