import { ethers } from "ethers";
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

const initState = {
  wallet: "",
  provider: {},
  mint: "",
  list: "",
  price: "",
  processing: false,
  havePrice: false,
  doneTransfer: "",
  unList: "",
  buyNFT: "",
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
        list: action.payload,
      };
    case SET_PRICE:
      return {
        ...state,
        price: action.payload,
      };

    case SET_PROCESSING:
      return {
        ...state,
        processing: action.payload,
      };

    case SET_HAVE_PRICE:
      return {
        ...state,
        havePrice: action.payload,
      };

    case SET_TRANSFER:
      return {
        ...state,
        doneTransfer: action.payload,
      };
    case SET_UN_LIST:
      return {
        ...state,
        unList: action.payload,
      };
    case SET_BUY_NFT:
      return {
        ...state,
        buyNFT: action.payload,
      };
    default:
      throw "error";
  }
};

export { initState };
export default reducer;
