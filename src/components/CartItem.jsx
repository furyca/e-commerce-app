import { Box, IconButton, Typography } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch } from "react-redux";
import { decreaseCartItem, increaseCartItem } from "../redux/rootSlice";
import { cart_item } from "../style/component_styles/cartItem";
import { Link } from "react-router-dom";

const CartItem = ({ title, price, amount, id }) => {
  const dispatch = useDispatch();

  const decreaseAmount = () => dispatch(decreaseCartItem({ amount, id }));

  const increaseAmount = () => dispatch(increaseCartItem({ amount, id }))
  
  return (
    <Box component={"tr"} sx={cart_item}>
      <Typography component={"td"}><Link to={`/product_details/${id}`}>{title}</Link></Typography>
      <Typography component={"td"}>{price.toFixed(2)} $</Typography>
      <Typography component={"td"}>x{amount}</Typography>
      <Typography component={"td"}>{(price * amount).toFixed(2)} $</Typography>
      <Box component={"td"}>
        <IconButton onClick={decreaseAmount}>
          <RemoveCircleOutlineIcon color="error" />
        </IconButton>
        <IconButton onClick={increaseAmount}>
          <ControlPointIcon color="success" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
