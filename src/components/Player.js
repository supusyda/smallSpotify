import React, { useContext } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../context";
export default function Player() {
  let { songPlay, DataSongs, handleOnchange } = useContext(Songs);
  const handleClickNext = () => {
    let currentIndexSong = DataSongs.indexOf(songPlay);
    let nextSongID;
    if (currentIndexSong === DataSongs.length-1) {
      console.log(nextSongID);
      nextSongID = 0;
    } else {
      console.log(nextSongID);

      nextSongID = currentIndexSong + 1;
    }
    handleOnchange(nextSongID);
  };
  const handleClickPrev = () => {
    let currentIndexSong = DataSongs.indexOf(songPlay);
    console.log("currentIndexSong", currentIndexSong);

    let prevSongID;
    if (currentIndexSong === 0) {
      prevSongID = DataSongs.length-1;
      console.log("prevSongID", prevSongID);
    } else {
      console.log(prevSongID);

      prevSongID = currentIndexSong - 1;
    }
    handleOnchange(prevSongID);
  };
  return (
    <div>
      <AudioPlayer
        className="player"
        src={songPlay.url}
        customProgressBarSection={[
          RHAP_UI.CURRENT_TIME,
          <div>/</div>,
          RHAP_UI.DURATION,
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.VOLUME,
        ]}
        showSkipControls={true}
        customVolumeControls={[]}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
      />
    </div>
  );
}
