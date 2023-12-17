import { Box, Button } from "@mui/material";
import { ethers } from "ethers";
import * as React from "react";
import WalletInfo from "./wallet-info";
import Context from "../../global/context";
import * as actions from "../../global/action";

export interface IWalletConnectProps {}

export default function WalletConnect(props: IWalletConnectProps) {
  const [wallet, setWallet] = React.useState<any>();
  const [balance, setBalance] = React.useState<number>();
  const [initState, dispatch] = React.useContext<any>(Context);
  console.log(initState);
  const handleConnectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const account = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const balanceBnb: ethers.BigNumber = await signer.getBalance();
    dispatch(actions.setWallet(account[0]));
    dispatch(actions.setProvider(provider));
    setWallet(true);
    setBalance(Number(balanceBnb) / 10 ** 18);
  };

  const handleDisConnectWallet = async () => {
    dispatch(actions.setWallet(""));
    setWallet("");
  };

  if (!wallet) {
    return (
      <Box>
        <Button onClick={handleConnectWallet}>Connect Wallet</Button>
      </Box>
    );
  } else {
    return (
      <Box sx={{ position: "relative" }} className="wallet">
        <WalletInfo address={initState.wallet} bnb={balance}></WalletInfo>
        <Box
          sx={{
            "::before": {
              content: '""',
              display: "block",
              backgroundColor: "transparent",
              position: "absolute",
              width: "100%",
              height: "1em",
            },
          }}
        ></Box>
        <Button
          onClick={handleDisConnectWallet}
          className="walletConnect"
          sx={{
            position: "absolute",
            top: "129%",
            right: 0,
            left: 0,
            mx: "auto",
            width: "80%",
            zIndex: 10,

            ":hover": {
              border: "2px solid ",
              backgroundColor: "#fff",
              color: "#000",
            },
          }}
        >
          Disconnect
        </Button>
      </Box>
    );
  }
}
