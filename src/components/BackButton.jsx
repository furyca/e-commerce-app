import { Box, Button } from "@mui/material";
import { back_button, back_button_wrapper } from "../style/common";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Box sx={back_button_wrapper}>
      <Button sx={back_button} onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </Box>
  );
};

export default BackButton;
