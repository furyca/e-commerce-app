import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../redux/rootSlice";
import FavIcon from "./FavIcon";
import { card, card_actions, card_media, price_style, star } from "../style/component_styles/productCard";

const ProductCard = ({ id, image, title, price, rate }) => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.rootSlice);
  let isFavourite = favourites.find((product) => product.id === id) ? true : false;

  const toggleFav = () => {
    dispatch(toggleFavourite({ id }));
  };

  return (
    <Card sx={card}>
      <Link to={`/product_details/${id}`}>
        <CardMedia sx={card_media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom noWrap variant="h6">
            {title}
          </Typography>
          <Typography variant="body">
            <StarOutlinedIcon sx={star} /> {rate}
          </Typography>
          <Typography variant="body" sx={price_style}>
            $ {price}
          </Typography>
        </CardContent>
      </Link>
      <CardActions sx={card_actions}>
        <FavIcon isfav={isFavourite} toggleFav={toggleFav} />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
