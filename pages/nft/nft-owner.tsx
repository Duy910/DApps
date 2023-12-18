import {
  InvestCardProps,
  NFTListProps,
  numberFormatAmount,
} from "@/models/index";
import { Packages } from "@/utils/index";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import Context from "../../global/context";
import { BigNumber, ethers } from "ethers";
import {
  getNFTAddress,
  getNFT_FEATUREAddress,
} from "@/contracts/data/getAddress";
import { getNFTAbi, getNFT_FEATUREAbi } from "@/contracts/data/getAbis";
import { getAddress } from "ethers/lib/utils";
import { transactionBuilder } from "web3/lib/commonjs/eth.exports";

import * as actions from "../../global/action";

export default function NFTOwner({ list, key }: NFTListProps) {
  const [initState, dispatch] = React.useContext<any>(Context);
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  var contractNFT = new ethers.Contract(getNFTAddress(), getNFTAbi(), signer);
  var contractNftFeature = new ethers.Contract(
    getNFT_FEATUREAddress(),
    getNFT_FEATUREAbi(),
    signer
  );

  const handleListNFT = async () => {
    const amount = 10000;
    const Approve = await contractNFT.approve(getNFT_FEATUREAddress(), list);

    // console.log("Transaction sent:", Approve);
    const receipt = await Approve.wait();
    // console.log("receipt", receipt);
    const listNFT = await contractNftFeature.listNft(list, 1);
    const listed = await listNFT.wait();
    dispatch(actions.setMint(listNFT.hash));
  };

  const handleTransferNFT = async () => {
    await contractNFT
      .transferFrom(
        initState.wallet,
        "0x7Be112A5B4245E568A45148a1226844b1ec1e6Fd",
        list
      )
      .then((result: string) => {
        console.log(result);
      })
      .catch((err: string) => {
        console.log(err);
      });
  };

  const handleAuction = async () => {};
  return (
    <Grid xs={12} sm={6} md={4} lg={3} p={2}>
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
            sizes="1000"
            src={`/nft/${Number(list) % 6}.png`}
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
            justifyContent: "center",
            height: "40%",
          }}
        >
          <Box>
            <Typography>MAYC NFT: #{Number(list)}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              my: "1rem",
              gap: "0.5rem",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <Button onClick={handleListNFT}>List NFT</Button>
            </Box>
            <Box>
              <Button onClick={handleAuction}>Auction</Button>
            </Box>
          </Box>
          <Box sx={{ my: "1rem" }}>
            <Box sx={{}}>
              <Button onClick={handleTransferNFT}>Transfer</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
