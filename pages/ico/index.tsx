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
import ButtonConnect from "./button-connect";
import WalletInfo from "./wallet-info";
import { ethers } from "ethers";
import { WalletInfoProps } from "@/models/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ICO() {
  const [wallet, setWallet] = React.useState<WalletInfoProps>();
  const [wev3Provider, setWeb3Provider] =
    React.useState<ethers.providers.Web3Provider>();
  const handleConnectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        undefined
      );
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const myAddress = await signer.getAddress();
      const myBalance = await signer.getBalance();
      const bnbBalance = Number(ethers.utils.formatEther(myBalance));
      setWallet({ address: myAddress, bnb: bnbBalance });
      setWeb3Provider(provider);
    }
  };
  // const showSuccess = () => {
  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });
  // };
  // if (wallet?.address) {
  //   showSuccess();
  // } else {
  //   toast.error("Success Notification !", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });
  // }

  return (
    <Paper>
      <Container>
        <Box
          pt={4}
          sx={{ display: "flex", justifyContent: "flex-end", mr: "16px" }}
        >
          <Box onClick={handleConnectWallet}>
            {!wallet && <ButtonConnect />}
            {wallet && (
              <WalletInfo address={wallet?.address} bnb={wallet?.bnb} />
            )}
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }} py={10}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  height: "500px",
                  border: "1px solid #F7DC6F ",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={ico}
                  alt=""
                  style={{
                    borderRadius: "10px",
                    backgroundSize: "cover",
                    objectFit: "cover",
                    width: "100%",
                    height: "70%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
}

ICO.Layout = Main;
