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
import NFTCard from "../nft-owner";


export default function NFT() {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper>
      <Container>
        <Box>
          
        </Box>
      </Container>
    </Paper>
  );
}

NFT.Layout = Main;
