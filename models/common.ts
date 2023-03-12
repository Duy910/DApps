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

export const numberFormat = (number: number | undefined) =>
  new Intl.NumberFormat().format(Number(number));
export const shortAddress = (address?: string): string => {
  return `${address?.substring(0, 4)}...${address?.substring(
    address.length - 3
  )}`;
};
