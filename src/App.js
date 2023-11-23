import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Favourites from "./pages/Favourites";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/rootSlice";
import { darkTheme, lightTheme } from "./style/theme";

function App() {
  const { data, mode } = useSelector((state) => state.rootSlice);
  const dispatch = useDispatch();
  const theme = mode === "dark" ? darkTheme : lightTheme;


  useEffect(() => {
    dispatch(fetchData());

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product_details/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
