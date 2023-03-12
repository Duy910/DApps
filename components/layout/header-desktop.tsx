import {
  Box,
  Button,
  Container,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { path1, path2 } from "@/utils/index";
import * as React from "react";
import Image from "next/image";
import logo from "@/public/main-logo.png";

import { useRouter } from "next/router";

export interface HeaderDesktopProps {}

export default function HeaderDesktop(props: HeaderDesktopProps) {
  const route = useRouter();
  return (
    <Box
      display={{ xs: "none", md: "block" }}
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
            {path1.map((item) => (
              <Link legacyBehavior key={item.path} href={item.path}>
                <MuiLink
                  color={
                    route.pathname === item.path ? "secondary.main" : "primary"
                  }
                  px={2}
                >
                  {item.name}
                </MuiLink>
              </Link>
            ))}
          </Box>
          <Box>
            {path2.map((item) => (
              <Link legacyBehavior key={item.name} href={item.path}>
                <MuiLink px={2}>
                  <Button>{item.name}</Button>
                </MuiLink>
              </Link>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
