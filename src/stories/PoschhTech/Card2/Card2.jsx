import React from "react";
import './card2.css';

export const BCard = ({width, height, header, body}) => {
  return (
    <div className={`w-[${width}px] h-[${height}px] bg-gradient-to-r from-[#141C22] to-[#161824] p-4 rounded-2xl`}>
        <div className="flex flex-col">
          <p className="text-[28px] text-white">{header}</p>   
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-[12px] text-white">{body}</p>   
        </div>
        
    </div>
  );
}

//bg-gradient-to-r from- via-[#63A5D6] to-[#63A5D6]