import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { FavoriteBorder } from "@mui/icons-material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Context } from "../Context";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductDetails = () => {
  const { id } = useParams();
  const context = useContext(Context);
  let inCart = context.cart.find(product => product.id.toString() === id) ? true : false
  let isFavourite = context.favourites.find(product => product.id.toString() === id) ? true : false

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("data")).find(
      (product) => product.id.toString() === id
    );

    context.setProduct(item);
    // eslint-disable-next-line
  }, [id]);

  const removeCart = () => {
    return context.setCart(context.cart.filter((product) => product.id.toString() !== id));
  };

  const addCart = () => {
    const item = context.data.find((product) => product.id.toString() === id);

    return context.setCart((prev) => [...prev, item]);
  };

  const addFavourites = () => {
    const item = context.data.find(product => product.id.toString() === id)

    if (context.favourites.find(product => product.id.toString() === id)) {
      return context.setFavourites(context.favourites.filter(product => product.id.toString() !== id))
    }
    
    return context.setFavourites(prev => [...prev, item])
  }

  return (
    <Box component={"main"}>
      {context.product && (
        <Grid
          container
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.5)",
            justifyContent: "center",
            width: "90%",
            m: "auto",
            borderRadius: 2,
          }}
        >
          <Grid
            item
            xs={12}
            sm={5}
            component="img"
            sx={{
              height: 400,
              width: "100%",
              clipPath: "inset(25px 25px 25px 25px)",
            }}
            alt={context.product.title}
            src={context.product.image}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={7}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                {context.product.title}
              </Typography>
              <Typography variant="body" color="text.secondary">
                <StarOutlinedIcon
                  fontSize="1rem"
                  sx={{ verticalAlign: "text-top", color: "#fdd835", mr: 1 }}
                />
                {context.product.rating.rate}
              </Typography>
              <Typography display={"block"} variant="body" fontSize="1.25rem">
                <AttachMoneyIcon sx={{ verticalAlign: "text-top" }} />
                {context.product.price}
              </Typography>
              <Typography variant="body2">
                {context.product.description}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
              {
                inCart 
                ? <Button
                    onClick={removeCart}
                    fullWidth
                    variant="contained"
                    color="error"
                    startIcon={<AddShoppingCartIcon />}
                  >
                    Remove From The Cart
                  </Button>
                : <Button
                    onClick={addCart}
                    fullWidth
                    variant="contained"
                    startIcon={<AddShoppingCartIcon />}
                  >
                    Add to Cart
                  </Button>
              }
              <IconButton sx={{ ml: 2 }} onClick={addFavourites} >
                {isFavourite ? <FavoriteIcon sx={{color:"red"}}  /> : <FavoriteBorder />}
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProductDetails;
