import {
  ModalListProps,
  ModalMintProps,
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
export default function ModalList({ onClose, open }: ModalListProps) {
  const [initState, dispatch] = React.useContext<any>(Context);
  const [onCloseModal, setOnCloseModal] = React.useState<any>(open);
  const [price, setPrice] = React.useState<any>();

  // const [onClose, setOnClose] = React.useState<boolean>(true);
  const handleConfirmPrice = async () => {
    dispatch(actions.setPrice(price));
    dispatch(actions.setProcessing(true));

    console.log("before");

    await setTimeout(() => {
      dispatch(actions.setHavePrice(true));
      console.log("after");
    }, 3000);
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
            {initState.havePrice ? (
              <Typography component="span" sx={{ color: "#66ff66" }}>
                Successfully setting price !!
              </Typography>
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
                <span className="priceList">Price:</span>
              </Box>
              <Box sx={{}}>
                <input
                  className="inputList"
                  placeholder="Enter price..."
                  type="number"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                ></input>
              </Box>
            </Box>
            <Box sx={{ mx: "auto" }}>
              <Button className="buttonList" onClick={handleConfirmPrice}>
                Confirm
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
}
