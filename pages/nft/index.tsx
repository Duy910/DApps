import { Main } from "@/components/index";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Grid,
  Container,
  Button,
} from "@mui/material";
import * as React from "react";
import ico from "@/public/ico.avif";
import Image from "next/image";
import NFTCard from "./nft-pack";
import MintNFT from "./mint-nft";
import ModalMint from "./modal-mint";
import NFTFilter from "./nft-filters";

export default function NFT() {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper>
      <Container>
        <Box>
          <ModalMint open={open} onClose={handleClose}></ModalMint>
          <MintNFT></MintNFT>
          {/* <NFTCard></NFTCard> */}
          <NFTFilter></NFTFilter>
        </Box>
      </Container>
    </Paper>
  );
}

NFT.Layout = Main;
