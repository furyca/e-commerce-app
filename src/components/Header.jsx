import { FavoriteBorder, Menu } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { Link } from "react-router-dom";

const Header = () => {


  return (
    <Grid
      container
      component={'header'}
      py={{xs: 1, sm: 2}}
      px={{xs: 1, sm: 4, md: 8, lg: 16}}
      mb={2}
      justifyContent="space-between"
      sx={{ bgcolor: "rgba(12, 12, 12, 0.8)", color: 'white', backdropFilter: "blur(10px)", position: 'sticky', top: 0, zIndex: 1 }}
    >
      <Grid item>
        <IconButton sx={{ color: "inherit" }}>
          <Menu />
        </IconButton>
        <Link to={"/"}>
          <Typography
            display={"inline-flex"}
            sx={{ verticalAlign: "middle", cursor: 'pointer'}}
            ml={{xs: 1, sm: 3}}
            variant="h6"
            fontWeight={900}
            color={'primary'}
          >
            Store
          </Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link to={"/favourites"}>
          <IconButton sx={{ color: "white" }}>
            <FavoriteBorder />
          </IconButton>
        </Link>
        <Link to={"/cart"}>
          <IconButton sx={{ color: "white", ml:{xs: 1, sm: 5} }}>
            <ShoppingCartCheckoutOutlinedIcon />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
