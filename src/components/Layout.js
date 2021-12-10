import React from "react";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
