import { Box, Typography } from "@mui/material";
import { footer } from "../style/component_styles/footer";

const Footer = () => {
  return (
    <Box component={"footer"} sx={footer}>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit expedita consequuntur tempore praesentium.
      </Typography>
    </Box>
  );
};

export default Footer;