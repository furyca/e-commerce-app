export const details_container = {
  justifyContent: "center",
  width: "90%",
  m: "auto",
  borderRadius: 2,
  gap: { xs: 0, md: "3rem" },
};
export const pd_image = {
  maxHeight: { xs: 240, md: 480 },
  maxWidth: { xs: 300, md: 480 },
  borderRadius: "1rem",
};

export const details_wrapper = {
  px: { xs: 0, sm: 4 },
  pb: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const info_container = { display: "flex", flexDirection: "column", gap: 2 };

export const pd_title = { mt: { xs: "2rem", md: 0 }, fontWeight: 600 };

export const pd_star = { verticalAlign: "text-top", color: "#fdd835", mr: 1, fontSize: "1rem" };

export const pd_price = { display: "block", fontSize: "1.25rem" };
export const pd_amount = { mt: "2rem", mb: "1rem", fontWeight: 700 };
export const amount_action_button = { height: 55, width: 55, mx: 1 };
export const amount_input = {
  width: { xs: 130, sm: "auto" },
  "input[type='number']::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "input[type=number]": {
    MozAppearance: "textfield",
    appearance: "textfield",
    margin: 0,
  },
};

export const pd_actions = { display: "flex", justifyContent: "space-between", mt: 3 };

export const pd_fav_icon_wrapper = { ml: 2 };
