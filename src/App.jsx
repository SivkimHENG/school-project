import Home from "./page/home-page.jsx";
import { Route, Routes } from "react-router-dom";
import Recipe from "./page/recipe-page.jsx";
import About  from "./page/about-page.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </>
  );
}

export default App;
