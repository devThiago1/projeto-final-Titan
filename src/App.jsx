import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PokemonDetail } from "./pages/PokemonDetail";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
