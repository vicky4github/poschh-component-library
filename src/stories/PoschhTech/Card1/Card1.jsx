import React from "react";
import './card1.css';
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";

export const PCard = ({ header, isTag, tagName = '', pricing, priceTime, info, list, buttonText, isSelected, buttonLink }) => {

  return (
    <div id='card' className="rounded-xl  mx-auto md:w-[30%] w-[90%] gradient-border hover:shadow-[0px_0px_60px_-20px_rgba(0,0,0,0.3)] hover:shadow-[#C7BFFF] my-8 cursor-pointer" >
      <Card  className="w-[100%] h-[550px]  bg-gradient-to-r from-[#161824] to-[#060507] p-4 inner-content">
      <CardHeader className="justify-start">
        <div className="w-[100%] flex flex-col">
          <div className="w-[100%] flex flex-row justify-between items-center">
            <div className="font-bold text-[18px] text-[#C7BFFF]"><p>{header}</p></div>
            {isTag ? ( 
              isSelected?(
                <div>
                    <img className='xs:w-12' src='./tag.svg'></img>
                </div>)
                :
                <div className="bg-[#C7BFFF] text-[12px] p-2 h-[18px] text-[#060507] font-semibold w-[20%] items-center justify-center flex rounded-full min-w-fit">
              <p>{tagName}</p>
            </div>

              ) : null}
          </div>
          <div className="flex flex-row items-baseline ">
          {isSelected?(
                <div>
                    <img  className='md:mt-4 mt-6 xs:h-[32px]' src='./price.svg'></img>
                </div>)
                :
            <p className="font-bold md:text-[46px] text-[36px] text-[#C7BFFF]">${pricing} </p>}
            <p className="font-medium md:text-[12px] text-[10px] text-[#E5E1E9] ml-2"> /{priceTime}</p>
          </div>
          <p className="text-[16px] font-light   mt-4 text-[#E5E1E9]">{info}</p>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-2 font-medium text-[#E5E1E9]">
        <ul className="list-image-[url('./check.png')] md:w-[85%] w-[95%] mx-auto flex flex-col justify-center">
          {list.map((item, index) => (<li key={index} className=" my-[4px] items-center font-light text-[10px] md:text-[12px]">{item}</li>))}
        </ul>
      </CardBody>
      <CardFooter className="mt-12">
        <Button onClick={() => { window.location.href = buttonLink }} className={`w-[100%] font-semibold ${isSelected ? 'bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6]' : 'bg-[#060507] border-[1px] border-[#E5E1E9]'} rounded-full text-[#E5E1E9] `}>{buttonText}</Button>
      </CardFooter>
    </Card>
    </div>
  );
}

//bg-gradient-to-r from- via-[#63A5D6] to-[#63A5D6]