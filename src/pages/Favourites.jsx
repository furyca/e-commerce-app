import { Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard.jsx";
import { useSelector } from "react-redux";
import MainBody from "../components/MainBody.jsx";
import { heading } from "../style/common.js";

const Favourites = () => {
  const { favourites } = useSelector((state) => state.rootSlice);

  return (
    <>
      <Typography variant="h4" sx={heading}>
        Favourites
      </Typography>

      {favourites.length > 0 && <MainBody>
        {favourites.map((product) => {
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
      </MainBody>}
    </>
  );
};

export default Favourites;
