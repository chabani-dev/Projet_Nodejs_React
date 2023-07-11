import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./composant/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <img src={logo} className="App-logo" alt="logo" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
      <footer />
    </BrowserRouter>
  );
}

export default App;
