import React from "react";

export const Button = ({
  buRef,
  handleclick,
  title,
  customStyle,
  handleHover,
}) => {
  return (
    <div className={`absolute top-1/2 -translate-x-[100%] -left-2`}>
      <button
        ref={buRef}
        onClick={handleclick}
        className={`${
          customStyle ? customStyle : ""
        } btnInicio relative flex justify-center items-center blackerMedium z-20 bg-[#ffffff80] text-[--primary] border-2 border-[--primary] py-2 px-16 text-xl`}
      >
        <span className="z-10">{title}</span>
        {handleHover ? (
          <span className="absolute z-1 w-full h-full bg-black top-0 left-0"></span>
        ) : (
          <></>
        )}
      </button>
    </div>
  );
};
