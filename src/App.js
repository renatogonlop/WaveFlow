import "./App.css";
import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cadastro from "./Pages/Cadastro";
import Cards from "./components/Cards";


function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="faq" element={<Faq />} />
        <Route path="cadastro" element={<Cadastro/>} />
        <Route path="playlist/:id" element={<Cards/>} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;