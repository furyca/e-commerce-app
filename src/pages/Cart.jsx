import { Box, Button, Typography } from "@mui/material";
import CartItem from "../components/CartItem.jsx";
import { useSelector } from "react-redux";
import MainBody from "../components/MainBody.jsx";
import { heading } from "../style/common.js";
import { purchase_wrapper, table, table_head, table_wrapper } from "../style/page_styles/cart.js";

const Cart = () => {
  const { cart } = useSelector((state) => state.rootSlice);

  const handlePurchase = () => {
    console.log("Purchase successful");
  };

  return (
    <>
      <Typography variant="h4" sx={heading}>
        Cart
      </Typography>
      {cart.length > 0 && (
        <MainBody>
          <Box sx={table_wrapper}>
            <Box component={"table"} sx={table}>
              <Box component={"thead"}>
                <Box component={"tr"} sx={table_head}>
                  <Box component={"th"} sx={{ width: { xs: "30%", md: "35%" } }}>
                    Product
                  </Box>
                  <Box component={"th"} sx={{ width: { xs: "0%", md: "15%" } }}>
                    Price
                  </Box>
                  <Box component={"th"} sx={{ width: { xs: "10%", md: "15%" } }}>
                    Amount
                  </Box>
                  <Box component={"th"} sx={{ width: { xs: "30%", md: "15%" } }}>
                    Total
                  </Box>
                  <Box component={"th"} sx={{ width: { xs: "30%", md: "20%" } }}>
                    Actions
                  </Box>
                </Box>
              </Box>
              <Box component={"tbody"}>
                {cart.map((product) => {
                  return (
                    <CartItem
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      amount={product.amount}
                    />
                  );
                })}
              </Box>

              <Box component={"tfoot"}>
                <Box component={"tr"} fontWeight={600}>
                  <Typography fontWeight={"inherit"} component={"td"}>
                    TOTAL
                  </Typography>
                  <Typography fontWeight={"inherit"} component={"td"}>
                    {cart.reduce((accumulator, item) => accumulator + item.price, 0).toFixed(2)} $
                  </Typography>
                  <Typography fontWeight={"inherit"} component={"td"}>
                    x{cart.reduce((accumulator, item) => accumulator + item.amount, 0)}
                  </Typography>
                  <Typography fontWeight={"inherit"} component={"td"}>
                    {cart.reduce((accumulator, item) => accumulator + item.price * item.amount, 0).toFixed(2)} $
                  </Typography>
                  <Box component={"td"} sx={purchase_wrapper}>
                    <Button variant="contained" color="success" onClick={handlePurchase}>
                      Purchase
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </MainBody>
      )}
    </>
  );
};

export default Cart;
