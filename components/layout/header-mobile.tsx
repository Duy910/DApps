import {
  Box,
  Button,
  Container,
  Link as MuiLink,
  Stack,
  Typography,
  Icon,
} from "@mui/material";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/main-logo.png";
import ReorderIcon from "@mui/icons-material/Reorder";

export interface HeaderMobileProps {}

export default function HeaderMobile(props: HeaderMobileProps) {
  return (
    <Box
      display={{ xs: "block", md: "none" }}
      sx={{ backgroundColor: "info.main" }}
      height={60}
    >
      <Container>
        <Stack justifyContent="space-between">
          <Box>
            <Link href="/">
              <Image alt="" src={logo} width={140} height={60} />
            </Link>
          </Box>
          <Box>
            <Icon component={ReorderIcon}></Icon>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
