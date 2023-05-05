import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../index.css";
import { useParams } from "react-router-dom";
import { contestPlayers } from "../BlockchainServices";
const CurrentContest = () => {
  const [players, setPlayers] = useState([]);
  const { contest_name } = useParams();
  const viewVal = async () => {
    const Players = await contestPlayers({ contest_name });
    console.log(Players);
    setPlayers(Players);
  };

  useState(() => {
    viewVal();
  }, [contest_name]);

  return (
    <div className="App h-full">
      <Navbar />
      <div className="flex flex-col">
        <div className="flex flex-row gap-3 justify-around mt-[10px] mx-[30px] rounded-3xl pb-6 bg-[#06002E]">
          <div className="flex justify-center items-center">
            <h1>team1</h1>
          </div>
          <div className="text-white">
            <h1 className="font-bold text-[20px]">Indian Premier League T20</h1>
            <center className="m-3 gap-4 p-2 ">
              <h2 className="font-semibold mx-auto pb-3">Vs</h2>
              <h4 className="font-light">Starts at Sun 03:30 PM</h4>
            </center>

            <center className="m-4">
              {" "}
              <h1>Ground: Wankhede, Mumbai</h1>
            </center>
          </div>
          <div className="flex justify-center items-center">
            <h2>team2</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {" "}
        <div className="w-3/4 h-2 bg-[#B48325] rounded-3xl"></div>
      </div>
      <div className="bg-[#aba9a98b] flex flex-col mx-[150px] rounded-2xl">
        <div className="m-3 ml-5 ">
          <h1 className="text-white font-[28px]  font-extrabold">
            Contest by Thiru
          </h1>
        </div>
        <div className="flex text-[#372626] font-bold justify-around m-2 p-4">
          <div className="flex flex-col"></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <center className="p-4 pt-6">
        <input
          type="text"
          className="w-2/5 h-[28px] rounded-3xl placeholder:text-center cursor-pointer"
          placeholder="Copy Invite code : 📁 "
        />
      </center>
      <center className="pb-4">
        <input
          type="text"
          className="w-2/5 h-[28px] rounded-3xl placeholder:text-center cursor-pointer"
          placeholder="More Options 🔗 "
        />
      </center>
      <div className=" fixed bottom-0 left-[42%]    ">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default CurrentContest;
