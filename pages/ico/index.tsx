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
import ButtonConnect from "./button-connect";
import WalletInfo from "./wallet-info";
import { ethers } from "ethers";
import { PackageIcoProps, Rate, TOKEN, WalletInfoProps } from "@/models/index";
import InvestCard from "./invest-card";
import { Packages } from "@/utils/index";
import Image from "next/image";
import CrowdSaleContract from "@/contracts/crowdSaleContract";
import UsdtContract from "@/contracts/usdtContract";
import ModalTxHash from "./modal-txhash";

export default function ICO() {
  const [wallet, setWallet] = React.useState<WalletInfoProps>();
  const [rate, setRate] = React.useState<Rate>({ bnbRate: 0, usdtRate: 0 });
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const [pak, setPak] = React.useState<PackageIcoProps>();
  const [txHash, setTxHash] = React.useState<string>();
  const [openTxHash, setOpenTxHash] = React.useState(true);

  const [web3Provider, setWeb3Provider] =
    React.useState<ethers.providers.Web3Provider>();

  const getRate = React.useCallback(async () => {
    const crowdContract = new CrowdSaleContract();
    const bnbRate = await crowdContract.getBnbRate();
    const usdtRate = await crowdContract.getUsdtRate();
    setRate({ bnbRate, usdtRate });
  }, []);

  React.useEffect(() => {
    getRate();
  }, [getRate]);
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
  const handleBuyIco = async (item: PackageIcoProps) => {
    console.log(item);
    if (web3Provider) {
      setPak(item);
      setIsProcessing(true);
      let hash = "";
      const crowdContract = new CrowdSaleContract(web3Provider);
      if (item.token == TOKEN.USDT) {
        const usdtContract = new UsdtContract(web3Provider);
        await usdtContract.approve(
          crowdContract._contractAddress,
          item.amount / rate.usdtRate
        );
        hash = await crowdContract.buyTokenByUSDT(item.amount);
      } else {
        hash = await crowdContract.buyTokenByBNB(item.amount);
      }
      setTxHash(hash);

      try {
      } catch (er: any) {}
      setPak(undefined);
      setIsProcessing(false);
    }
  };

  const handleOpen = () => setOpenTxHash(true);
  const handleClose = () => setOpenTxHash(false);

  return (
    <Paper>
      <Container>
        <Box
          pt={4}
          sx={{ display: "flex", justifyContent: "flex-end", mr: "1rem" }}
        >
          {txHash ? (
            <Box mr={2}>
              <Button onClick={handleOpen}>Transaction</Button>
              <ModalTxHash
                onClose={handleClose}
                txHash={openTxHash}
                hash={txHash}
              />
            </Box>
          ) : (
            ""
          )}
          <Box onClick={handleConnectWallet}>
            {!wallet && <ButtonConnect />}
            {wallet && (
              <WalletInfo address={wallet?.address} bnb={wallet?.bnb} />
            )}
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }} py={10}>
          <Grid container spacing={4}>
            {Packages.map((item, index) => (
              <InvestCard
                pak={item}
                key={String(index)}
                isBuying={isProcessing && pak?.key === item.key}
                rate={item.token === TOKEN.BNB ? rate.bnbRate : rate.usdtRate}
                walletInfo={wallet}
                onBuy={() => {
                  handleBuyIco(item);
                }}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </Paper>
  );
}

ICO.Layout = Main;
