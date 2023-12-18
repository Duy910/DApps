import { ethers } from "ethers";
import { SET_PROVIDER, SET_WALLET, SET_MINT, SET_LIST } from "./constant";

const initState = {
  wallet: "",
  provider: {},
  mint: "",
  list: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_WALLET:
      return {
        ...state,
        wallet: action.payload,
      };
    case SET_PROVIDER:
      return {
        ...state,
        provider: action.payload,
      };
    case SET_MINT:
      return {
        ...state,
        mint: action.payload,
      };
    case SET_LIST:
      return {
        ...state,
        mint: action.payload,
      };
    default:
      throw "erorrrr";
  }
};

export { initState };
export default reducer;
