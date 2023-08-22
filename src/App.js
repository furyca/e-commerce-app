import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Favourites from "./components/Favourites";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: '#613794',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '#root': {
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
        'a': {
          textDecoration: 'none'
        }
      }
    }
  }

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product_details/:id" element={<ProductDetails />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
