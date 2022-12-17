import React, { useContext, useState } from "react";
import { Songs } from "../context";

export default function ListSong() {
  const { DataSongs, handleOnchange, songPlay } = useContext(Songs);
  console.log(DataSongs);
  let [curruntSong, setCurruntSong] = useState(0);
  const handlePlaysone = (id) => {
    handleOnchange(id);
    setCurruntSong(id);
  };
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full text-white ">
        <thead className="sticky top-0 bg-slate-400">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left w-[60%]">Title</th>
            <th>Author</th>
            <th>
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-800 ">
          {DataSongs.map((item, index) => {
            return (
              <tr
                className={`h-12 hover:text-cyan-600 hover:bg-slate-600 ${
                  songPlay.id === item.id && "bg-slate-700"
                }`}
                key={index}
                onClick={(e) => {
                  handlePlaysone(item.id);
                }}
              >
                <td>{index}</td>
                <td className="text-left">{item.name}</td>
                <td>{item.author}</td>
                <td>
                  <a href={item.url}></a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
