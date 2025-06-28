import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimatedCharacterCards from "./pages/Cards/Animated-Character-Cards";
import Carousel from "./pages/Carousel/Carousel";
import ExpandableCards from "./pages/Cards/Expandable-Cards";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<div>Home Page</div>} />
        <Route path="/cards">
          <Route
            path="animated-character-cards"
            element={<AnimatedCharacterCards />}
          />
          <Route path="expandable-cards" element={<ExpandableCards />} />
        </Route>
        <Route path="/carousel">
          <Route path="carousel" element={<Carousel />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
