import React from "react";
import theme from "../theme";
import { ThemeProvider } from "emotion-theming";

const Themer = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Themer;
