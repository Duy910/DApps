import getChainIdFromEnv, { AddressType, SMART_ADDRESS } from "./dataCommon";
const getAddress = (address: AddressType) => {
  const CHAIN_ID = getChainIdFromEnv() as keyof AddressType;
  return address[CHAIN_ID];
};

export const getCrowdSaleAddress = () => getAddress(SMART_ADDRESS.CROWD_SALE);
export const getUsdtAddress = () => getAddress(SMART_ADDRESS.USDT);
export const getNFTAddress = () => getAddress(SMART_ADDRESS.NFT);
export const getNFT_FEATUREAddress = () =>
  getAddress(SMART_ADDRESS.NFT_FEATURE);
