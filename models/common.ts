import { BigNumber } from "ethers";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}
export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement;
};
export interface ButtonConnectProps {}

export interface WalletInfoProps {
  address?: string;
  bnb?: number;
}
export interface Rate {
  bnbRate: number;
  usdtRate: number;
}

export const numberFormat = (number: number | undefined) =>
  new Intl.NumberFormat().format(Number(number));
export const shortAddress = (address?: string): string => {
  return `${address?.substring(0, 4)}...${address?.substring(
    address.length - 3
  )}`;
};
export const shortTxHash = (address?: string): string => {
  return `${address?.substring(0, 20)}...${address?.substring(
    address.length - 10
  )}`;
};
export const numberFormatAmount = (number: number | string) =>
  new Intl.NumberFormat().format(Number(number));
export enum TOKEN {
  BNB = "BNB",
  USDT = "USDT",
}

export interface PackageIcoProps {
  key: string;
  name: string;
  amount: number;
  img: string;
  token: TOKEN;
}

export interface InvestCardProps {
  pak: PackageIcoProps;
  isBuying: boolean;
  rate: number;
  walletInfo?: WalletInfoProps;
  onBuy?: () => void;
}

export interface ModalTxHashProps {
  onClose: () => void;
  txHash: boolean;
  hash?: string;
}
