import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, setProduct, toggleFavourite } from "../redux/rootSlice";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import BackButton from "../components/BackButton";
import FavIcon from "../components/FavIcon";
import { amount_action_button, amount_input, details_container, details_wrapper, info_container, pd_actions, pd_amount, pd_image, pd_price, pd_star, pd_title } from "../style/page_styles/product_details";

const ProductDetails = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const { product, cart, data, favourites } = useSelector((state) => state.rootSlice);
  let isInCart = cart.find((product) => product.id.toString() === id) ? true : false;
  let isFavourite = favourites.find((product) => product.id.toString() === id) ? true : false;

  useEffect(() => {
    const dataSource = data.length > 0 ? data : JSON.parse(localStorage.getItem("data"));

    const item = dataSource.length > 0 ? dataSource.find((product) => product.id.toString() === id) : undefined;

    !item && <Navigate to="/" replace={true} />;

    dispatch(setProduct({ item }));
    // eslint-disable-next-line
  }, [id]);

  const removeCart = () => {
    dispatch(removeFromCart({ id }));
  };

  const addCart = () => {
    if (amount < 1) return;
    dispatch(addToCart({ amount, id }));
  };

  const toggleFav = () => {
    dispatch(toggleFavourite({ id }));
  };

  const handleAmountChange = (e) => {
    if (e.target.value < 0) return 0;
    setAmount(e.target.value);
  };

  const increaseAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const decreaseAmount = () => {
    if (amount < 1) return 0;
    setAmount((prevAmount) => prevAmount - 1);
  };

  return (
    <>
      <BackButton />
      {product && (
        <Grid container sx={details_container}>
          <Grid item xs={12} lg={5} component="img" sx={pd_image} alt={product.title} src={product.image}></Grid>
          <Grid item xs={12} lg={6} sx={details_wrapper}>
            <Box sx={info_container}>
              <Typography variant="h6" sx={pd_title}>
                {product.title}
              </Typography>
              <Typography variant="body" color="text.secondary">
                <StarOutlinedIcon sx={pd_star} />
                {product.rating.rate}
              </Typography>
              <Typography sx={pd_price} variant="body">
                $ {product.price}
              </Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Box>
                <Typography variant="subtitle2" sx={pd_amount}>
                  Amount:
                </Typography>
                <IconButton sx={amount_action_button} onClick={decreaseAmount}>
                  <RemoveCircleOutlineIcon color="error" />
                </IconButton>
                <TextField
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                  sx={amount_input}
                />
                <IconButton sx={amount_action_button} onClick={increaseAmount}>
                  <ControlPointIcon color="success" />
                </IconButton>
              </Box>
              <Typography>Total Cost: $ {(amount * product.price).toFixed(2)}</Typography>
            </Box>
            <Box sx={pd_actions}>
              {isInCart ? (
                <Button
                  onClick={removeCart}
                  fullWidth
                  variant="contained"
                  color="warning"
                  startIcon={<RemoveShoppingCartIcon />}
                >
                  Remove From The Cart
                </Button>
              ) : (
                <Button onClick={addCart} fullWidth variant="contained" startIcon={<AddShoppingCartIcon />}>
                  Add to Cart
                </Button>
              )}
              <FavIcon isfav={isFavourite} toggleFav={toggleFav} />
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProductDetails;
