import { Box, Button, Typography } from "@mui/material";
import bg from "../assets/bg.png";
import {
  featured_button,
  featured_heading,
  featured_img,
  header_container,
  header_wrapper,
} from "../style/component_styles/header";

const Header = () => {
  return (
    <Box component={"header"} sx={header_container}>
      <Box sx={header_wrapper}>
        <Box>
          <Typography variant="h6">Featured Product</Typography>
          <Typography variant="h1" sx={featured_heading}>
            Silicon Power 256GB SSD
          </Typography>
          <Typography variant="body">
            3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster
            bootup and improved overall system performance.{" "}
          </Typography>
          <Button variant="contained" sx={featured_button}>
            SEE PRODUCT
          </Button>
        </Box>
        <Box component={"img"} src={bg} sx={featured_img}></Box>
      </Box>
    </Box>
  );
};

export default Header;
