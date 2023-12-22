import {
  SET_PROVIDER,
  SET_WALLET,
  SET_MINT,
  SET_LIST,
  SET_PRICE,
  SET_PROCESSING,
  SET_HAVE_PRICE,
  SET_TRANSFER,
  SET_UN_LIST,
  SET_BUY_NFT,
} from "./constant";

export const setWallet = (payload: any) => ({
  type: SET_WALLET,
  payload,
});

export const setProvider = (payload: any) => ({
  type: SET_PROVIDER,
  payload,
});

export const setMint = (payload: any) => ({
  type: SET_MINT,
  payload,
});

export const setList = (payload: any) => ({
  type: SET_LIST,
  payload,
});

export const setPrice = (payload: any) => ({
  type: SET_PRICE,
  payload,
});

export const setProcessing = (payload: any) => ({
  type: SET_PROCESSING,
  payload,
});

export const setHavePrice = (payload: any) => ({
  type: SET_HAVE_PRICE,
  payload,
});

export const setDoneTransfer = (payload: any) => ({
  type: SET_TRANSFER,
  payload,
});
export const setUnList = (payload: any) => ({
  type: SET_UN_LIST,
  payload,
});
export const setBuyNFT = (payload: any) => ({
  type: SET_BUY_NFT,
  payload,
});
