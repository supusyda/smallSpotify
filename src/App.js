import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import DetailsSong from "./components/detailsSong";
import ListSong from "./components/listSong";
import { Songs } from "./context";
import DataSongs from "./data/songs.json";
import Player from "./components/Player";
import { useState } from "react";
function App() {
  let [songPlay, setSongPlay] = useState(DataSongs[0]);
  const handleOnchange = (songID) => {
    setSongPlay(DataSongs[songID]);
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, songPlay, handleOnchange }}>
        <Navbar></Navbar>
        <div className="grid grid-cols-3 bg-slate-500 h-screen-nav-player">
          <DetailsSong></DetailsSong>
          <ListSong></ListSong>
        </div>
        <Player></Player>
      </Songs.Provider>
    </div>
  );
}

export default App;
