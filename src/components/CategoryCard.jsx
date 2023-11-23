import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { category_card, category_img, category_name } from "../style/component_styles/categoryCard";

const CategoryCard = ({ categoryName, categoryImg }) => {
  return (
    <Box sx={category_card}>
      <Link to={`/category/${categoryName}`}>
        <Box component={"img"} sx={category_img} src={categoryImg} />
      </Link>
      <Typography variant="h5" sx={category_name}>
        {categoryName}
      </Typography>
    </Box>
  );
};

export default CategoryCard;
