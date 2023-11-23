export const card = {
  maxWidth: { xs: 280, sm: 380 },
  maxHeight: 400,
  my: 2,
  boxShadow:
    "inset 0 -40px 40px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(255, 255, 255, .1), 6px 6px 16px rgba(0, 0, 0, 0.3)",
  transition: "all .1s",
  "&:hover": {
    transform: "translate(0, -3%)",
  },
};

export const card_media = { height: 200, cursor: "pointer" };

export const star = { verticalAlign: "text-top", color: "#fdd835", fontSize: "1rem" };

export const price_style = { display: "block", mt: 1 };

export const card_actions = { justifyContent: "flex-end" };
