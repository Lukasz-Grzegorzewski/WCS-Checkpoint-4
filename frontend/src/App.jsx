import { Routes, Route } from "react-router-dom";
import Navbar from "@components/navbar/Navbar";
import ArtistAlbumTracks from "@pages/ArtistAlbumTracks";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import ArtistAlbums from "./pages/ArtistAlbums";
import Albums from "./pages/Albums";
import Trucks from "./pages/Tracks";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:idArtist" element={<ArtistAlbums />} />
        <Route
          path="/artists/:idArtist/albums/:idAlbums"
          element={<ArtistAlbumTracks />}
        />
        <Route path="/albums" element={<Albums />} />
        <Route path="/tracks" element={<Trucks />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
