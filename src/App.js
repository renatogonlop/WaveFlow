import "./App.css";
import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import Cadastro from "./Pages/Cadastro";
import Busca from "./Pages/Busca";
import Signin from "./Pages/UserSignin";
import NotFoundPage from "./Pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import PlayListDetails from "./components/PlayList/PlayListDetails";
import { PlayListList } from "./components/PlayList/PlayListList";


function App() {

  var url_atual = window.location.href;
  if (url_atual == 'http://localhost:3000/Signin') {
    return (
      <>
        <Routes>
          <Route path="signin" element={<Signin />} />
        </Routes>
        
      </>
    )

  } else {

    return (
      <>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="faq" element={<Faq />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="busca" element={<Busca />} />
          <Route path="NotFoundPage" element={<NotFoundPage />} />
          <Route path="/play" element={<PlayListList />} />
          <Route path="/playlists/:id" element={<PlayListDetails />} />
        </Routes>

        <Footer />
      </>
    );
  }

}




export default App;