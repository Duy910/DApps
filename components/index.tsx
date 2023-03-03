import { LayoutProps } from "@/models/index";
import { Box } from "@mui/material";
import * as React from "react";
import Footer from "./layout/footer";
import Header from "./layout/header";

export function Main(props: LayoutProps) {
  return (
    <>
      <Header />
      <Box component="main">{props.children}</Box>
      <Footer />
    </>
  );
}
