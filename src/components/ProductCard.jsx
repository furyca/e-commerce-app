import { FavoriteBorder } from "@mui/icons-material";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useContext } from "react";
import { Context } from "../Context";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = ({id, image, title, price, rate}) => {
  const context = useContext(Context);
  let isFavourite = context.favourites.find(product => product.id === id) ? true : false

  const handleClick = () => {
    const item = context.data.find(product => product.id === id)

    if (context.favourites.find(product => product.id === id)) {
      return context.setFavourites(context.favourites.filter(product => product.id !== id))
    }
    
    return context.setFavourites(prev => [...prev, item])
  }

  return (
    <Card
      sx={{
        maxWidth: {xs: 300, sm: 380},
        maxHeight: 400,
        my: 2,
        
        boxShadow: 'inset 0 -40px 40px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(255, 255, 255, .1), 6px 6px 16px rgba(0, 0, 0, 0.3)',
        transition: "all .1s",
        "&:hover": { 
            transform: "translate(0, -3%)" 
        },
      }}
    >
      <Link to={`/product_details/${id}`}>
        <CardMedia
          sx={{ height: 200, cursor: "pointer" }}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom noWrap variant="h6" sx={{color: 'black'}}>
            {title}
          </Typography>
          <Typography variant="body" color="text.secondary">
            <StarOutlinedIcon fontSize="1rem" sx={{verticalAlign: 'text-top', color:'#fdd835'}} /> {rate}
          </Typography>
          <Typography display={'block'} variant="body" color="text.secondary">
            <AttachMoneyIcon fontSize="1rem" sx={{verticalAlign: 'text-top'}} />{price}
          </Typography>
        </CardContent>
      </Link>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton sx={{ color: "inherit" }} size="large" onClick={handleClick}>
          {isFavourite ? <FavoriteIcon sx={{color:"red"}}  /> : <FavoriteBorder />}
        </IconButton>
      </CardActions>
      
    </Card>
  );
};

export default ProductCard;
