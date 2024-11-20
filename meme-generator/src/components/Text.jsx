import React from "react";
import { useState } from "react";
import Draggable from 'react-draggable';


function Text() {
  // toogle Edit Mode
  const [editMode, setEditMode] = useState();
  // To set Values
  const [val, setVal] = useState("Double Click to Edit");

  return (
    <Draggable >
      <div className="w-1/3 h-1/2">
      {editMode ? (
        <input
          type="text"
          value={val}
          onDoubleClick={(e) => setEditMode(false)}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <h1 onDoubleClick={() => setEditMode(true)}>{val}</h1>
      )}
      </div>
    </Draggable>
  );
}

export default Text;
