import { SET_PROVIDER, SET_WALLET, SET_MINT, SET_LIST } from "./constant";

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
