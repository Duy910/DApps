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
import NFT_P2P from "./nft-p2p";


export default function NFT() {
  
  return (
    <Paper>
      <Container>
        <Box>
         
            <NFT_P2P></NFT_P2P>
          
        </Box>
      </Container>
    </Paper>
  );
}

NFT.Layout = Main;
