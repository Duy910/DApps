import { InvestCardProps, numberFormatAmount } from "@/models/index";
import { Packages } from "@/utils/index";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import * as React from "react";

export default function InvestCard({
  pak,
  isBuying,
  rate,
  onBuy,
  walletInfo,
}: InvestCardProps) {
  return (
    <Grid key={pak.key} xs={12} sm={6} lg={3} p={2}>
      <Box
        sx={{
          marginLeft: "32px",
          height: "500px",
          border: "1px solid #F7DC6F ",
          borderRadius: "10px",
          overflow: "hidden",
          ":hover": {
            cursor: "pointer",
            boxShadow: " 0px 0px 10px 1px #F7DC6F",
          },
        }}
      >
        <Box
          style={{
            width: "100%",
            height: "60%",
            position: "relative",
          }}
        >
          <Image
            alt=""
            src={`/${pak.img}`}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "0  0 18px 18px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "40%",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ fontSize: "1.3rem", color: "secondary.main" }}>
            {pak.name}
          </Box>

          <Box sx={{ flexDirection: "row", display: "flex" }}>
            <Box
              fontWeight={100}
              mr={1}
              fontStyle="italic"
              color="primary.main"
            >
              Price with BNB:
            </Box>
            <Box color="secondary.main">
              {numberFormatAmount(pak.amount / rate)} {pak.token}
            </Box>
          </Box>

          <Box color="primary.main">{numberFormatAmount(pak.amount)} DUY</Box>

          <Box>
            <Button
              sx={{
                width: "10rem",
                border: "2px solid",
                ":hover": {
                  border: "2px solid secondary.main",
                  backgroundColor: "secondary.main",
                  color: "#000",
                },
              }}
              disabled={!walletInfo || isBuying}
              onClick={onBuy}
            >
              {isBuying ? "is BUYING" : " BUY NOW"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
