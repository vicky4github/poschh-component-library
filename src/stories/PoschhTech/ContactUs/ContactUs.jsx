import React from 'react';
import './contactus.css';
import {Button} from "@nextui-org/react";
export const ContactUs = () => {
 
  return (
    <>
      <div className='h-[400px] w-[1000px] bg-[#262433]'>
      <img  className= 'opacity-25 w-[100px] h-[140px] absolute bottom-0 left-0' src='/ball1.png'></img>
      <img  className='opacity-25  w-[100px] h-[120px] absolute top-0 right-0' src='/ball2.png'></img>
      </div>
      <div className='h-[400px] w-[1000px] absolute inset-0 flex items-center justify-center'>
        <div className='w-[60%] h-[80%] grid items-center'>
          <div>
            <p className='text-[#F2F4F7] text-[48px] font-semibold text-center leading-loose'>Still Unsure? Let's Connect!</p>
            <p className='text-[#F2F4F7] text-[16px] text-center w-[90%] mx-auto'>Our friendly customer support team is here to help! They can answer any questions you have about our packages and recommend the best fit for your needs.</p>
          </div>
          <Button className='w-[40%] m-auto font-semibold bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] rounded-full text-[#E5E1E9]'>Contact Sales</Button>
        </div>

      </div>
    </>
  );
};