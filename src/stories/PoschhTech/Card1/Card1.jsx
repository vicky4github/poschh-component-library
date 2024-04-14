import React from "react";
import './card1.css';
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";

export const PCard = ({ header, isTag, tagName = '', pricing, priceTime, info, list, buttonText, isSelected }) => {

  return (
    <Card id='card' className="w-[340px] h-[460px] bg-[#141C22] p-4 rounded-xl">
      <CardHeader className="justify-start">
        <div className="w-[100%] flex flex-col">
          <div className="w-[100%] flex flex-row justify-between items-center">
            <div className="font-medium text-[28px] text-[#C7BFFF]"><p>{header}</p></div>
            {isTag ? (
              <div className="bg-[#C7BFFF] text-[12px] p-2 h-[18px] text-[#141C22] font-semibold w-[20%] items-center justify-center flex rounded-full min-w-fit">
                <p>{tagName}</p>
              </div>
            ) : null}
          </div>
          <div className="flex flex-row items-baseline ">
            <p className="font-bold text-[36px] text-[#C7BFFF]">${pricing} </p>
            <p className="font-medium text-[14px] text-[#E5E1E9] ml-4"> /For {priceTime}</p>
          </div>
          <p className="text-[16px] text-[#E5E1E9]">{info}</p>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-2 font-medium text-[#E5E1E9]">
        <ul className="list-disc ml-4 overflow-hidden">
          {list.map((item, index) => (<li key={index} className="my-2">{item}</li>))}
        </ul>
      </CardBody>
      <CardFooter className="mt-12">
        <Button className={`w-[100%] font-semibold ${isSelected ? 'bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6]' : 'bg-[#141C22] border-[1px]'} rounded-full text-[#E5E1E9] border-[#E5E1E9]`}>{buttonText}</Button>
      </CardFooter>
    </Card>
  );
}

//bg-gradient-to-r from- via-[#63A5D6] to-[#63A5D6]