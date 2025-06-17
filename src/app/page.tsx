"use client";
import { useState } from "react";

export default function Home() {
  const [inputtaken, setInputtaken] = useState("");
  const [storeinput, setstoreinput] = useState([]);
  const [inputcheckbox, setinputcheckbox] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setdeleteIndex] = useState(null);
  // add items
  const takesinput = () => {
    if (editIndex !== null) {
      setstoreinput((preeee) =>
        preeee.map((fff, indexxxx) =>
          indexxxx === editIndex ? inputtaken : fff
        )
      );
      setEditIndex(null);
    } else {
      setstoreinput([...storeinput, inputtaken]);
      setinputcheckbox([...inputcheckbox, false]); // Start each checkbox unchecked
    }
    setInputtaken("");
  };
  // checks input toggle box
  const toggleCheckbox = (index1) => {
    setinputcheckbox((toggllll) =>
      toggllll.map((val, ind) => (ind === index1 ? !val : val))
    );
  };
  // reset deletsteindex
  const changeddeletindex = (index1) => {
    setdeleteIndex(index1);
  };
  // perform deletion items here
  const deleteitems = (index1) => {
    setstoreinput((prev) => prev.filter((val2, ind2) => ind2 !== deleteIndex));
    setinputcheckbox((prev) =>
      prev.filter((val3, ind3) => ind3 !== deleteIndex)
    );
    setdeleteIndex(null);
  };
  // cancel deletion
  const canceldeletion = () => {
    setdeleteIndex(null);
  };
  // Edit function
  const Editfunc = (index1) => {
    setInputtaken(storeinput[index1]);
    setEditIndex(index1);
  };
  return (
    <>
      <div className="ml-[35%] mt-[3%] flex gap-[10px]">
        <div>
          <h1 className="ml-2 text-lg">Todo App</h1>
          <input
            value={inputtaken}
            onChange={(e) => setInputtaken(e.target.value)}
            className="bg-white text-black p-3 w-[300px] border border-red-500"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div className="mt-[3%]">
          <button onClick={takesinput} className="p-3 bg-blue-400 text-black">
            {editIndex !== null ? "Save items" : "Add items"}
          </button>
        </div>
      </div>

      <ul className="ml-[36%] mt-[2%] list-none">
        {storeinput.map((value1, index1) => (
          <li
            className={`text-black ${
              inputcheckbox[index1] ? "line-through" : ""
            }`}
            key={index1}
          >
            <input
              type="checkbox"
              checked={inputcheckbox[index1]} // Ensures a boolean value
              onChange={() => toggleCheckbox(index1)}
            />
            {value1}
            <button
              onClick={() => Editfunc(index1)}
              className="bg-green-500 text-white p-2 mt-2 ml-2"
            >
              Edit items
            </button>
            <button
              className="bg-red-500 text-white p-2 mt-2 ml-2"
              onClick={() => changeddeletindex(index1)}
            >
              Delete items
            </button>
          </li>
        ))}
      </ul>
      {deleteIndex !== null && (
        <div className="ml-[37%] mt-[3%]  ">
          <h1>Are you sure you want to delete this item</h1>
          <br />
          <div>
            <button onClick={deleteitems} className="bg-red-500 text-white p-2">
              Yes, Delete
            </button>
            <button
              onClick={canceldeletion}
              className="bg-yellow-500 text-white p-2 ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
