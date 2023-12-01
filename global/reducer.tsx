import { ethers } from "ethers";
import { SET_PROVIDER, SET_WALLET } from "./constant";

const initState = {
  wallet: "",
  provider: {},
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
    default:
      throw "erorrrr";
  }
};

export { initState };
export default reducer;
