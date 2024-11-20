import React from "react";
import { getMemesData } from "../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Edit from "./Edit";

function Home() {
  const [memes, setMemes] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    getMemesData().then((data) => setMemes(data.data.memes));
  }, []);
  console.log(memes);
  return (
   <>
    <header>
      <h1 className="m-4 p-4 uppercase font-bold text-center text-2xl">Meme  Editor</h1>
    </header>
    <div className="wrapper flex flex-wrap justify-center gap-8 m-2 p-2">
      {memes &&
        memes.map((meme, index) => (
          <div className="box border-2 rounded-md w-1/4 flex flex-col justify-center items-center">
            <img src={meme.url} className="meme-images" alt="" />
            <button
              className="btn m-4 p-2 bg-white rounded"
              onClick={() => navigate(`/edit?url=${meme.url}`)} //  "edit?url=" => Query parameter passing
            >
              {" "}
              Edit{" "}
            </button>
          </div>
        ))}
    </div>
    </>
  );
}

export default Home;
