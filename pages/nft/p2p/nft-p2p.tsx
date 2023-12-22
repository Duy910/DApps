import { NFTp2pProps } from "@/models/index";
import * as React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import Image from "next/image";
import Context from "../../../global/context";
import * as actions from "../../../global/action";
import ico from "@/public/ico.avif";

import { ethers } from "ethers";
import {
  getNFTAddress,
  getNFT_FEATUREAddress,
} from "@/contracts/data/getAddress";
import { getNFTAbi, getNFT_FEATUREAbi } from "@/contracts/data/getAbis";

export default function NFT_P2P() {
  const [initState, dispatch] = React.useContext<any>(Context);
  const [list, setList] = React.useState<any>([]);

  const getProvider = async () => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);

    const signer = await provider.getSigner();

    const contractNFT = new ethers.Contract(
      getNFTAddress(),
      getNFTAbi(),
      signer
    );
    const contractNftFeature = await new ethers.Contract(
      getNFT_FEATUREAddress(),
      getNFT_FEATUREAbi(),
      signer
    );
  };

  React.useEffect(() => {
    if (!initState.wallet) {
    } else {
      const getNFT = async () => {
        if (initState.provider && window.ethereum) {
          const provider = await new ethers.providers.Web3Provider(
            window.ethereum
          );

          const signer = await provider.getSigner();

          const contractNFT = new ethers.Contract(
            getNFTAddress(),
            getNFTAbi(),
            signer
          );
          const contractNftFeature = await new ethers.Contract(
            getNFT_FEATUREAddress(),
            getNFT_FEATUREAbi(),
            signer
          );
          const account = await provider.send("eth_requestAccounts", []);

          const getNFTList = contractNftFeature
            .getListNftPublic(account[0])
            .then((result: any) => {
              console.log("result", result);
              setList(result);
            })
            .catch((error: any) => {
              console.log("error", error);
            });
        }
      };
      getNFT();
    }
  }, [
    initState.mint,
    initState.wallet,
    initState.list,
    initState.doneTransfer,
    initState.unList,
    initState.buyNFT,
  ]);
  const handleBuyNFT = async (tokenId: any, price: any) => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum);

    const signer = await provider.getSigner();

    const contractNFT = new ethers.Contract(
      getNFTAddress(),
      getNFTAbi(),
      signer
    );
    const contractNftFeature = await new ethers.Contract(
      getNFT_FEATUREAddress(),
      getNFT_FEATUREAbi(),
      signer
    );
    const buyNFT = await contractNftFeature.buyNft(tokenId, price);
    const wait = await buyNFT.wait();
    dispatch(actions.setBuyNFT(buyNFT.hash));
  };
  return (
    <Box>
      {initState.wallet ? (
        <Grid container gap={4}>
          {list.map((item: any, index: any) => {
            return (
              <Grid key={index} xs={12} sm={6} md={4} lg={3} p={2}>
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
                      src={`/nft/${Number(item.tokenId) % 6}.png`}
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
                      <Typography>MAYC NFT: #{Number(item.tokenId)}</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ my: "1rem", color: "secondary.main" }}>
                        PRICE: {Number(item.price)}
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
                        <Button
                          onClick={() => handleBuyNFT(item.tokenId, item.price)}
                        >
                          BUY NFT
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Typography sx={{ pt: "4rem", textAlign: "center" }} component="p">
          Please connect wallet to Buy NFT !!
        </Typography>
      )}
    </Box>
  );
}
