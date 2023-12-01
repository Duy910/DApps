import { SET_PROVIDER, SET_WALLET } from "./constant";

export const setWallet = (payload: any) => ({
  type: SET_WALLET,
  payload,
});

export const setProvider = (payload: any) => ({
  type: SET_PROVIDER,
  payload,
});
