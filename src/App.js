import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import Cadastro from "./Pages/Cadastro";
import NotFoundPage from "./Pages/NotFoundPage";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
<<<<<<< HEAD
import PlaylistDetail from "./components/PlayList/PlayListDetails";
import PlaylistList from "./components/PlayList/PlaylistList";
=======

import PlayListDetails from "./components/PlayList/PlayListDetails";
import {PlayListList} from "./components/PlayList/PlayListList";
>>>>>>> 23fa89b5ae34c010435ecba76fffe68cbe20b9e4


function App() {
  
  return (
    <>
    
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="faq" element={<Faq />} />
        <Route path="cadastro" element={<Cadastro/>} />
        <Route path="NotFoundPage" element={<NotFoundPage/>} />
        <Route path="/play" element={<PlayListList/>} />
        <Route path="/playlists/:id" element={<PlayListDetails/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;