import React, { useContext } from "react";
import { Songs } from "../context";
export default function DetailsSong() {
  let { songPlay } = useContext(Songs);
  return (
    <div className="col-span-1 p-3 text-left">
      {" "}
      <h2 className=" text-lime-300 font-bold">Now playing</h2>
      <h2 className=" text-lime-200 text-2xl">{songPlay.name}</h2>
      <div className="w-[240px] m-auto ">
        <img
          className="w-full mt-10"
          src={songPlay.links.images[0].url}
          alt="nani"
        ></img>
      </div>
      <div className=" flex justify-evenly items-center  mt-10">
        <img
          className="w-[70px] rounded-full"
          src={songPlay.links.images[1].url}
          alt="nani"
        ></img>
        <span className="text-xl text-white">{songPlay.author}</span>
      </div>
    </div>
  );
}
