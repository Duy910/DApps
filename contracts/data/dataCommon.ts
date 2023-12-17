export type AddressType = {
  97: string;
  56: string;
};

export enum CHAIN_ID {
  TESTNET = 97,
  MAINNET = 56,
}

export default function getChainIdFromEnv(): number {
  const env = process.env.NEXT_PUBLIC_CHAIN_ID;
  if (!env) {
    return 97;
  }
  return parseInt(env);
}

export const getRPC = () => {
  if (getChainIdFromEnv() === CHAIN_ID.MAINNET)
    return process.env.NEXT_PUBLIC_RPC_MAINNET;
  return process.env.NEXT_PUBLIC_RPC_TESTNET;
};
export const SMART_ADDRESS = {
  CROWD_SALE: {
    97: "0xEEeEdD092FEFE214536b7969a5b9aBD66e783db1",
    56: "",
  },

  USDT: {
    97: "0xCddde9860610035871b01Af6F5dd0D27DEa5390d",
    56: "",
  },

  NFT: {
    97: "0xedc687E48457c4C69Fe960583440B4aDF2096a06",
    56: "",
  },
};
