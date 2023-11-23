import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import { category_heading, product_list } from "../style/page_styles/category";
import BackButton from "../components/BackButton";

const Category = () => {
  const { category } = useParams();
  const { data } = useSelector((state) => state.rootSlice);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    filterCategory();
    // eslint-disable-next-line
  }, [category]);

  const filterCategory = () => {
    let products = [];
    switch (category) {
      case "SSDs":
        products = data.filter((category) => category.title.toLowerCase().includes("ssd"));
        break;
      case "HDDs":
        products = data.filter((category) => category.title.toLowerCase().includes("hard drive"));
        break;
      case "Monitors":
        products = data.filter((category) => category.title.toLowerCase().includes("inch"));
        break;
      default:
        break;
    }

    setFilteredProducts(products);
  };

  return (
    <Box>
      <BackButton />
      <Typography variant="h4" sx={category_heading}>
        {category}
      </Typography>

      <Box sx={product_list}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                desc={product.description}
                price={product.price}
                rate={product.rating.rate}
              />
            );
          })
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Box>
  );
};

export default Category;
