import { Box, Button } from "@mui/material";
import * as React from "react";
import Context from "../../global/context";
import { ethers } from "ethers";
import { getNFTAbi } from "@/contracts/data/getAbis";
import { getNFTAddress } from "@/contracts/data/getAddress";
import abiNFT from "../../contracts/abis/nft.json";
import Web3 from "web3";
import { getAddress } from "ethers/lib/utils";
export interface IMintNFTProps {}

export default function MintNFT(props: IMintNFTProps) {
  const [initState, dispatch] = React.useContext<any>(Context);
  const [account, setAccount] = React.useState<string>("");

  const handleMintNFT = async () => {
    console.log(initState.wallet);
    try {
      if (!window.ethereum || !initState.wallet) {
        throw new Error("Metamask not detected!");
      }
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const account = await provider.send("eth_requestAccounts", []);
      const signer = await initState.provider.getSigner();
      console.log("signer", signer);
      const contract = await new ethers.Contract(
        getNFTAddress(),
        getNFTAbi(),
        signer
      );

      const mint = await contract.mint();

      console.log(" success!", mint);
    } catch (error: any) {
      console.error("Error :", error.message || error);
    }
    // await contract.methods
    //   .mint()
    //   .send({ from: account[0] })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingY: "2rem",
      }}
    >
      {/* <Button onClick={connectWallet} sx={{}}>
        connect wallet
      </Button> */}
      <Button disabled={!initState.wallet} onClick={handleMintNFT} sx={{}}>
        Mint NFT
      </Button>
    </Box>
  );
}
