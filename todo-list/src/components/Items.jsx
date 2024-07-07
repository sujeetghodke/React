import React, { useState } from "react";

const Items = (props) => {
  const [done, setDone] = useState(false);
  return (
    <div
      onClick={() => setDone(!done)}
      className={`select-none w-full border-b p-3 flex justify-between`}
    >
      <div
        onClick={() => setDone(!done)}
        className={`${done === true ? `line-through` : ``} `}
      >
        <span className="cursor-pointer text-[14px] text-slate-400 pr-3">
          {props.time}
        </span>
        <span className="text-[18px]">{props.item}</span>
      </div>
      <div
        onClick={() => {
          props.removeHandler(props.id);
        }}
        className="bg-orange-500 w-10 h-10 cursor-pointer rounded-full text-white text-5xl flex justify-center items-center pb-[10px] mr-2"
      >
        -
      </div>
    </div>
  );
};

export default Items;
