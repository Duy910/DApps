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

export default function NFT() {
  return (
    <Paper>
      <Container>
        <Typography variant="h1">NFT</Typography>
      </Container>
    </Paper>
  );
}

NFT.Layout = Main;
