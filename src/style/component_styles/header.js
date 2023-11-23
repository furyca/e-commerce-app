//Header

export const header_container = {
  minHeight: "600px",
  textAlign: { xs: "center", md: "unset" },
};

export const header_wrapper = {
  display: { xs: "block", xl: "flex" },
  justifyContent: "center",
  mx: "auto",
  mt: "4rem",
  gap: "4rem",
  width: "80%",
};

export const featured_img = {
  width: "600px",
  height: "400px",
  boxShadow: "0 0 20px #999999",
  borderRadius: "1rem",
  userSelect: "none",
  pointerEvents: "none",
  display: { xs: "none", md: "block" },
  my: { xs: "5rem", xl: "0" },
  mx: { xs: "auto", xl: "0" },
};

export const featured_heading = {
  fontWeight: "800",
  fontSize: { xs: "2rem", md: "3rem" },
  mt: "1rem",
  mb: "3rem",
  textTransform: "uppercase",
};

export const featured_button = {
  display: "block",
  mt: "3rem",
  mx: { xs: "auto", xl: "unset" },
  p: "1rem 2em",
  background: "orange",

  "&:hover": {
    background: "white",
    color: "orange",
  },
};
