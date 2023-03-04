import {
  Box,
  Container,
  Grid,
  Icon,
  Paper,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import * as React from "react";
import logo from "@/public/main-logo.png";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <Box bgcolor="info.main">
      <Container>
        <Grid container minHeight={200}>
          <Grid display={{ xs: "none", md: "block" }} md={4}>
            <Stack>
              <Link href="/">
                <Image alt="" src={logo} width={140} height={60} />
              </Link>
            </Stack>
          </Grid>

          <Grid xs={12} md={4}>
            <Stack direction="column">
              <Typography variant="h6" paddingY={2} color="secondary.main">
                CONTACT WITH ME
              </Typography>
              <Box>
                <Link href="https://www.facebook.com/profile.php?id=100023276285853">
                  <Icon component={FacebookIcon}></Icon>
                </Link>
                <Link href="https://twitter.com/DuyDuiZe">
                  <Icon component={TwitterIcon}></Icon>
                </Link>
                <Link href="https://t.me/DuyDuiZe">
                  <Icon component={TelegramIcon}></Icon>
                </Link>
              </Box>
              <Box></Box>
            </Stack>
          </Grid>

          <Grid display={{ xs: "none", md: "block" }} md={4}>
            <Stack>
              <Link href="/">
                <Image alt="" src={logo} width={140} height={60} />
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
