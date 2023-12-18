import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NFTOwner from "./nft-owner";
import Context from "../../global/context";
import { ethers } from "ethers";
import {
  getNFTAddress,
  getNFT_FEATUREAddress,
} from "@/contracts/data/getAddress";
import { getNFTAbi, getNFT_FEATUREAbi } from "@/contracts/data/getAbis";
import NFTListed from "./nft-listed";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NFTFilter() {
  const [value, setValue] = React.useState(0);
  const [initState, dispatch] = React.useContext<any>(Context);
  const [listNFT, setListNFT] = React.useState<any>([]);
  const [listedNFT, setListedNFT] = React.useState<any>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (!initState.wallet) {
      setListNFT("");
    } else {
      const getNFT = async () => {
        if (initState.provider && window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);

          const signer = await provider.getSigner();
          const contract = await new ethers.Contract(
            getNFTAddress(),
            getNFTAbi(),
            signer
          );

          const getNFT = await contract
            .listTokenIds(initState.wallet)
            .then((result: any) => {
              console.log("result", result);
              setListNFT(result);
            })
            .catch((error: any) => {
              console.log("error", error);
            });
          const contract_NFTFeature = await new ethers.Contract(
            getNFT_FEATUREAddress(),
            getNFT_FEATUREAbi(),
            signer
          );

          const getNFTList = await contract_NFTFeature
            .getListedNft()
            .then((result: any) => {
              console.log("result", result);
              setListedNFT(result);
            })
            .catch((error: any) => {
              console.log("error", error);
            });
        }
      };
      getNFT();
    }
  }, [initState.mint, initState.wallet, initState.list]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "yellow" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={{ color: "yellow" }} label="your nfts" {...a11yProps(0)} />
          <Tab sx={{ color: "yellow" }} label="listed" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ mt: "2rem" }}>
          {initState.wallet == "" ? (
            <Typography>Connect your wallet to access your NFTs !</Typography>
          ) : listNFT == "" ? (
            <Typography>You don't have any NFT. </Typography>
          ) : (
            <Grid container spacing={4}>
              {listNFT?.map((item: any, index: any) => {
                return <NFTOwner key={index} list={item}></NFTOwner>;
              })}
            </Grid>
          )}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ mt: "2rem" }}>
          {initState.wallet == "" ? (
            <Typography>Connect your wallet to access the listing!</Typography>
          ) : listedNFT == "" ? (
            <Typography>We don't have any NFT for listing. </Typography>
          ) : (
            <Grid container spacing={4}>
              {listedNFT?.map((item: any, index: any) => {
                return <NFTListed key={index} list={item}></NFTListed>;
              })}
            </Grid>
          )}
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
