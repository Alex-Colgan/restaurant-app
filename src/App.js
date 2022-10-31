import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Menu from './pages/menu';

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
        </ul>
      </nav>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
