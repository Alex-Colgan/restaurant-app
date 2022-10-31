import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from './pages/menu';
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
