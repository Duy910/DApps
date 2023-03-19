import * as React from "react";
import { Box } from "@mui/material";
import bitcoin from "@/public/bitcoin.png";
import binance from "@/public/binance.png";
import cardano from "@/public/cardano.png";
import solana from "@/public/solana.png";
import ethereum from "@/public/ethereum.png";
import Image from "next/image";

export default function Promo() {
  return (
    <Box sx={{ paddingY: "200px" }}>
      <Box
        height={120}
        bgcolor="info.main"
        sx={{
          cursor: "pointer",
          border: "2px solid #ccc",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            ":hover": {
              opacity: "0.7",
            },
          }}
        >
          <Image src={bitcoin} alt="" />
        </Box>
        <Image src={binance} alt="" />
        <Image src={cardano} alt="" />
        <Image src={solana} alt="" />
        <Image src={ethereum} alt="" />
      </Box>
    </Box>
  );
}
