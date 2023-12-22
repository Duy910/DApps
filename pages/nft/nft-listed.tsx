import { Box, Button, Typography, Grid } from "@mui/material";
import * as React from "react";
import Context from "../../global/context";
import * as actions from "../../global/action";
import {
  getNFTAddress,
  getNFT_FEATUREAddress,
} from "@/contracts/data/getAddress";
import { getNFTAbi, getNFT_FEATUREAbi } from "@/contracts/data/getAbis";
import { ethers } from "ethers";
import { NFTListProps } from "@/models/index";
import Image from "next/image";

export default function NFTListed({ list }: NFTListProps) {
  const [initState, dispatch] = React.useContext<any>(Context);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const [listedNFT, setListedNFT] = React.useState<any>(list);

  const signer = provider.getSigner();

  var contractNFT = new ethers.Contract(getNFTAddress(), getNFTAbi(), signer);
  var contractNftFeature = new ethers.Contract(
    getNFT_FEATUREAddress(),
    getNFT_FEATUREAbi(),
    signer
  );

  const handleUnListNFT = async () => {
    const unList = await contractNftFeature.unlistNft(listedNFT.tokenId);
    const listed = await unList.wait();
    dispatch(actions.setUnList(unList.hash));
    
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
            src={`/nft/${Number(listedNFT.tokenId) % 6}.png`}
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
            <Typography>MAYC NFT: #{Number(listedNFT.tokenId)}</Typography>
            <Typography sx={{ my: "1rem", color: "secondary.main" }}>
              PRICE: {Number(listedNFT.price)} DUY
            </Typography>
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
              <Button onClick={handleUnListNFT}>UNLIST</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
