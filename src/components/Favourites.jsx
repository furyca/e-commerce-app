import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { Context } from "../Context.js";

const Favourites = () => {
  const context = useContext(Context);

  return (
    <Grid
      component={"main"}
      container
      spacing={{ xs: 0, sm: 5 }}
      sx={{ justifyContent: "center", width: "90%", m: "auto" }}
    >
      {context.favourites.map((product) => {
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

export default Favourites;
