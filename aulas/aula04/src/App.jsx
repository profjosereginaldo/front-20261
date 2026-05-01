import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Erro404 from "./pages/Erro404";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default App;
