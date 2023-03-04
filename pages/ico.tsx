import { Main } from "@/components/index";
import { Box, Paper, Typography, Stack, Grid, Container } from "@mui/material";
import * as React from "react";
import ico from "@/public/ico.avif";
import Image from "next/image";

export interface ICOProps {}

export default function ICO(props: ICOProps) {
  return (
    <Paper>
      <Container>
        <Box sx={{ flexGrow: 1 }} py={10}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  height: "400px",
                  border: "1px solid #F7DC6F ",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <Image src={ico} alt="" style={{ borderRadius: "10px" }} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
}

ICO.Layout = Main;
