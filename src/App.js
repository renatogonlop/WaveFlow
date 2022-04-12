import "./App.css";
import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import Cadastro from "./Pages/Cadastro";
import NotFoundPage from "./Pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import PlaylistDetail from "./components/PlayList/PlayListDetails";
import PlaylistList from "./components/PlayList/PlaylistList";


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
        <Route path="/play" element={<PlaylistList/>} />
        <Route path="/playlists/:id" element={<PlaylistDetail/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;