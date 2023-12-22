import {
  ModalListProps,
  ModalMintProps,
  ModalTransferProps,
  shortAddress,
  shortTxHash,
} from "@/models/index";
import Context from "../../global/context";
import * as actions from "../../global/action";
import {
  Box,
  Button,
  Modal,
  Typography,
  Paper,
  Link as MuiLink,
  TextField,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import {
  getNFTAddress,
  getNFT_FEATUREAddress,
} from "@/contracts/data/getAddress";
import { getNFTAbi, getNFT_FEATUREAbi } from "@/contracts/data/getAbis";
import { ethers } from "ethers";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "info.main",
  border: "1px solid #fff",
  borderRadius: "20px",
  p: 4,
};
export default function ModalTransfer({
  onClose,
  open,
  list,
}: ModalTransferProps) {
  const [initState, dispatch] = React.useContext<any>(Context);

  const [addressTo, setAddressTo] = React.useState<string>("");
  const [hash, setHash] = React.useState<string>();
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  var contractNFT = new ethers.Contract(getNFTAddress(), getNFTAbi(), signer);

  const handleConfirmTransfer = async () => {
    dispatch(actions.setProcessing(true));

    const transfer = await contractNFT.transferFrom(
      initState.wallet,
      addressTo,
      list
    );
    const receipt = await transfer.wait();
    dispatch(actions.setDoneTransfer(transfer.hash));
    setHash(initState.doneTransfer);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {initState.processing ? (
          <Box sx={{ textAlign: "center" }}>
            {initState.doneTransfer ? (
              <Box>
                <Typography
                  textAlign="center"
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Your Transaction
                </Typography>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "1rem",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  href={`https://testnet.bscscan.com/tx/${initState.doneTransfer}`}
                  passHref
                  target="_blank"
                >
                  {shortTxHash(initState.doneTransfer)}
                </Link>
              </Box>
            ) : (
              <CircularProgress />
            )}
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "2rem",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <Box sx={{}}>
                <span className="priceList">Transfer to:</span>
              </Box>
              <Box sx={{}}>
                <input
                  className="inputList"
                  placeholder="Enter address..."
                  type="string"
                  value={addressTo}
                  onChange={(e) => {
                    setAddressTo(e.target.value);
                  }}
                ></input>
              </Box>
            </Box>
            <Box sx={{ mx: "auto" }}>
              <Button className="buttonList" onClick={handleConfirmTransfer}>
                Transfer
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
}
