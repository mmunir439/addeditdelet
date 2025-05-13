"use client";
import { useState } from "react";

export default function Home() {
  const [inputtaken, setInputtaken] = useState("");
  const [storeinput, setstoreinput] = useState([]);
  const [inputcheckbox, setinputcheckbox] = useState([]);

  const takesinput = () => {
    setstoreinput([...storeinput, inputtaken]);
    setinputcheckbox([...inputcheckbox, false]); // Start each checkbox unchecked
    setInputtaken("");
  };

  const toggleCheckbox = (index1) => {
    setinputcheckbox((prev) =>
      prev.map((val, ind) => (ind === index1 ? !val : val))
    );
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
            Add items
          </button>
        </div>
      </div>

      <ul className="ml-[36%] mt-[2%] list-none">
        {storeinput.map((value1, index1) => (
          <li className="text-white" key={index1}>
            <input
              type="checkbox"
              checked={inputcheckbox[index1] || false} // Ensures a boolean value
              onChange={() => toggleCheckbox(index1)}
            />
            {value1}
            <button className="bg-green-500 text-white p-2 mt-2 ml-2">
              Add items
            </button>
            <button className="bg-red-500 text-white p-2 mt-2 ml-2">
              Delete items
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
