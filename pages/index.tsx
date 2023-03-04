import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Main } from "@/components/index";
import { Box, Paper, Typography } from "@mui/material";
import { Container, Grid, Stack, Button, Link as MuiLink } from "@mui/material";
import bg from "@/public/main-img.png";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Paper>
      <Container>
        <Grid container>
          <Grid xs={12} md={6}>
            <Stack justifyContent="flex-start">
              <Box>
                <Typography
                  variant="h2"
                  color="secondary.main"
                  fontWeight={900}
                  marginTop={10}
                >
                  Cryptocurrency Solutions And Investment
                </Typography>
                <Typography variant="h6" my={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam Duis aute irure dolor, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </Typography>
                <Link href="/ico" style={{ textDecoration: "none" }}>
                  <Button size="large">START BUYING</Button>
                </Link>
              </Box>
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Stack>
              <Image src={bg} alt="" style={{ width: "100%", height: "90%" }} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
Home.Layout = Main;
