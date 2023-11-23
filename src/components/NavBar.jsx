import { FavoriteBorder } from "@mui/icons-material";
import { Grid, IconButton, Switch, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../redux/rootSlice";
import { navbar, navbar_button, store_button, switch_moon, switch_sun } from "../style/component_styles/navbar";

const NavBar = () => {
  const { mode } = useSelector((state) => state.rootSlice);
  const dispatch = useDispatch();

  const changeTheme = () => dispatch(switchTheme());

  return (
    <Grid container component={"nav"} sx={navbar}>
      <Grid item sx={store_button}>
        <Link to={"/"}>
          <Typography variant="h6" fontWeight={900}>
            Store
          </Typography>
        </Link>
      </Grid>
      <Grid item>
        <Link to={"/favourites"}>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </Link>
        <Link to={"/cart"}>
          <IconButton sx={navbar_button}>
            <ShoppingCartCheckoutOutlinedIcon />
          </IconButton>
        </Link>
        <Switch
          checked={mode === "dark"}
          icon={<FontAwesomeIcon icon={faMoon} style={switch_moon} />}
          checkedIcon={<FontAwesomeIcon icon={faSun} style={switch_sun} />}
          onChange={changeTheme}
          sx={navbar_button}
        />
      </Grid>
    </Grid>
  );
};

export default NavBar;
