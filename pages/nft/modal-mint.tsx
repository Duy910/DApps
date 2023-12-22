import { ModalMintProps, shortAddress, shortTxHash } from "@/models/index";
import {
  Box,
  Button,
  Modal,
  Typography,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
const style = {
  position: "absolute" as "absolute",
  top: "15%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "info.main",
  border: "1px solid #fff",
  borderRadius: "20px",
  p: 4,
};
export default function ModalMint({ onClose, open }: ModalMintProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          textAlign="center"
          id="modal-modal-title"
          variant="h6"
          component="h2"
          color="#66ff66"
        >
          Successfully Mint !!
        </Typography>
      </Box>
    </Modal>
  );
}
