import Home from "./page/home-page.jsx";
import { Route, Routes } from "react-router-dom";
import Recipe from "./page/recipe-page.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
      </Routes>
      </CartProvider>
    </>
  );
}

export default App;
