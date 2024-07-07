import React, { useRef } from "react";

function Input(props) {
  const inputBox = useRef();
  return (
    <div className="p-3 flex justify-around">
      <input
        type="text"
        placeholder="Enter data here"
        className="w-[87%] border border-slate-800 p-2 rounded-md focus:outline-none"
        ref={inputBox}
      />
      <div
        className="bg-orange-500 w-12 h-12 cursor-pointer rounded-full text-white text-5xl flex justify-center items-center pb-[10px] mr-2"
        onClick={() => {
          props.handler(inputBox.current.value);
          inputBox.current.value = "";
        }}
      >
        +
      </div>
    </div>
  );
}

export default Input;
