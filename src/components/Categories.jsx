import { Box, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";
import hdd from "../assets/hdd.png";
import ssd from "../assets/ssd.png";
import monitor from "../assets/monitor.png";
import { categories_container } from "../style/component_styles/categories";

const Categories = () => {
  return (
    <>
      <Typography variant="h4" fontWeight={600} mt={6}>
        CATEGORIES
      </Typography>
      <Box sx={categories_container}>
        <CategoryCard categoryName="SSDs" categoryImg={ssd} />
        <CategoryCard categoryName="HDDs" categoryImg={hdd} />
        <CategoryCard categoryName="Monitors" categoryImg={monitor} />
      </Box>
    </>
  );
};

export default Categories;
