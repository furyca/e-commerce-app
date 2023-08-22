import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useContext, useEffect } from "react";
import {Context} from "../Context.js";
import axios from "axios";

const ProductList = () => {
  const context = useContext(Context)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/category/electronics").then((res) => context.setData(res.data))
    .then(localStorage.setItem("data", JSON.stringify(context.data)))
  
  }, [context])
  
  return (
    <Grid
      component={'main'}
      container
      spacing={{ xs: 0, sm: 5 }}
      sx={{ justifyContent: "center", width: "90%", m: "auto" }}
    >
      {context.data.map((product) => {
        return (
          <Grid item key={product.id}>
            <ProductCard
              id={product.id}
              image={product.image}
              title={product.title}
              desc={product.description}
              price={product.price}
              rate={product.rating.rate}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductList;
