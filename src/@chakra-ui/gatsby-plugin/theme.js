import { extendTheme } from "@chakra-ui/react";

const theme = {
  styles: {
    global: {
      "html, body": {
        bg: "gray.50",
      },
    },
  },
  colors: {
    primary: "#3448CB",
  },
};

export default extendTheme(theme);
