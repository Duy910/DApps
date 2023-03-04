import { Main } from "@/components/index";
import { Box, Paper, Typography, Grid, Container } from "@mui/material";

import * as React from "react";

export interface NFTProps {}

export default function NFT(props: NFTProps) {
  return (
    <Paper>
      <Typography>NFT</Typography>
    </Paper>
  );
}

NFT.Layout = Main;
