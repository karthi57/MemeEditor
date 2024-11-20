import React from "react";
import { useState, createRef } from "react";
// "useSerachParam" because we are passing Query Parameter i.e.=> "/edit?url=" in Home.jsx
import { useSearchParams, useNavigate } from "react-router-dom";
import { exportComponentAsJPEG } from "react-component-export-image";
import Text from "../components/Text";
function Edit() {
  const [params] = useSearchParams();
  //console.log(params.get("url"));

  //For Adding Multiple Editable Text
  const [textCount, setTextCount] = useState(0);

  const memeRef = createRef();

  const navigate = useNavigate();
  return (
    <>
      <h1>Meme generator</h1>
      <div ref={memeRef} className="border-4 w-1/2">
        <img src={params.get("url")} width={"500px"} alt="meme-image" />
        {Array(textCount)
        .fill(0)
        .map(() => (
          <Text />
        ))}
      </div>
      <button
        className="border-2 rounded m-4 p-2 border-stone-700"
        onClick={() => setTextCount(textCount + 1)}
      >
        Add Text
      </button>
      <button
        className="border-2 rounded m-4 p-2 border-green-500"
        onClick={() => exportComponentAsJPEG(memeRef)}
      >
        Save Image
      </button>

      <button className="border-2 rounded m-4 p-2 border-blue-500" onClick={()=>navigate('/')}>
        Home
      </button>
     
      
    </>
  );
}

export default Edit;
