import { Grid } from "@mui/material";
import React from "react";
import { main } from "../style/common";

const MainBody = ({children}) => {
  return (
    <Grid component={"main"} container sx={main}>
      {children}
    </Grid>
  );
};

export default MainBody;
