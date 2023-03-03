import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Main } from "@/components/index";

import { Box, Paper, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Paper>
      <Box ml={10}>
        <Typography variant="h1" pt={20}>
          content home
        </Typography>
      </Box>
    </Paper>
  );
}
Home.Layout = Main;
