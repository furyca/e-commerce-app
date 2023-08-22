import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{
        bgcolor: "rgba(12, 12, 12, .8)",
        color: "whitesmoke",
        mt: 5,
        p: 3,
      }}
    >
      <Typography textAlign={"center"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit
        expedita consequuntur tempore praesentium.
      </Typography>
    </Box>
  );
};

export default Footer;
