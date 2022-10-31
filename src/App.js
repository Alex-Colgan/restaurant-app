import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from './pages/menu';
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <h2>Hi.</h2>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="menu">Menu</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>

        </ul>
      </nav>
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
