import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState(null);

  const values = { data, setData, favourites, setFavourites, cart, setCart, product, setProduct };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};