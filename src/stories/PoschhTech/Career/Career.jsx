import React from 'react';
import './career.css';
import { Button } from '@nextui-org/react';
import { IoIosArrowBack } from "react-icons/io";
import {Card, CardBody, Image, Slider} from "@nextui-org/react";


export const Career = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-[#141318] text-[#E5E1E9] w-screen h-screen items-start mx-auto">
    
     <Button onClick={()=>{window.location.href='/'}} className="md:z-10 flex items-center justify-center m-12 font-semibold bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] rounded-md text-[#E5E1E9]">
      <IoIosArrowBack style={{width:'15px' , height:'15px', color:'#E5E1E9', stroke:'#E5E1E9' }} />
      <span className="text-[#E5E1E9]">Home</span>
    </Button>
    <div className="md:z-0 flex flex-col w-[100%] md:absolute md:top-10 items-center mx-auto">
    <h4 className="text-center leading-loose text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6]">Posch Tech, INC.</h4>

      <h4 className="text-center text-3xl">CAREERS</h4>
     
    </div>
   
    <div className="mx-8 md:mx-auto text-justify mt-12  flex items-center justify-center text-[32px] font-light ">
    <Card  className="border-2 border-white bg-transparent  text-white px-4 max-w-[700px] h-[200px]"  shadow="sm">
      <CardBody className=' flex justify-center items-center'>
        <div className="">
         
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold ">There are currently no open positions</h3>
                {/* <img className='w-48 mt-4 mx-auto' src='./dismiss.png'></img> */}
              </div>
          
        </div>
      </CardBody>
    </Card>
    </div>
  </div>
  );
};
