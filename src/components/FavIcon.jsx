import { fav_icon } from "../style/common";
import { IconButton } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FavIcon = ({isfav, toggleFav}) => {
  return (
    <IconButton size="large" onClick={toggleFav}>
      {isfav ? <FavoriteIcon sx={fav_icon} /> : <FavoriteBorder />}
    </IconButton>
  );
};

export default FavIcon;
