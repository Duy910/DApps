import { WalletInfoProps, shortAddress, numberFormat } from "@/models/index";
import * as React from "react";
import { Box, Button, Typography, Icon } from "@mui/material";
import iconBnb from "@/public/bnb-icon.png";
import Image from "next/image";

export default function WalletInfo({ address, bnb }: WalletInfoProps) {
  return (
    <Button>
      <Typography>{shortAddress(address)}</Typography>
      <Image src={iconBnb} width={20} alt="" style={{ margin: "0 10px" }} />
      <Typography>{numberFormat(bnb)}</Typography>
    </Button>
  );
}
