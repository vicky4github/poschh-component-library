import React from "react";
import './card2.css';

export const BCard = ({width, height, header, body}) => {
  return (
    <div style={{width:width+'px', height:height+'px'}} className={`bg-gradient-to-r scale-acard from-[#060507] to-[#161824] p-4 hover:shadow-[0px_0px_30px_-15px_rgba(0,0,0,0.3)] hover:shadow-[#C7BFFF] rounded-2xl`}>
        <div className="flex flex-col">
          <p className="text-[28px] text-white">{header}</p>   
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-[15px] text-white">{body}</p>   
        </div>
        
    </div>
  );
}

//bg-gradient-to-r from- via-[#63A5D6] to-[#63A5D6]