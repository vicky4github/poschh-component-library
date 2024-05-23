import React from 'react';
import './contactus.css';
import { Button } from "@nextui-org/react";

export const ContactUs = () => {
  return (
    <>
      <div id='contact' className='relative h-[400px] w-[100%] bg-[#141318] overflow-x-hidden p-0'>
        <ContactUsX />
      </div>
    </>
  );
};

const ContactUsX = () => {
  return (
    <>
      <div className='relative h-[400px] w-[100%] bg-[#0b0a0e] overflow-hidden'>
        <img
          className='floating-animation1 opacity-25 w-[100px] object-cover absolute mt-[200px] left-0 bottom-0'
          src='/ball1.png'
          alt='Ball 1'
        />
        <img
          className='floating-animation2 opacity-25 w-[120px] h-[140px] object-cover absolute right-0 mt-0'
          src='/ball2.png'
          alt='Ball 2'
        />
      </div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-[60%] h-[80%] grid items-center'>
          <div>
            <p className='text-[#F2F4F7] text-[48px] font-semibold text-center leading-loose'>
              Still Unsure? Let's Connect!
            </p>
            <p className='text-[#F2F4F7] text-[16px] text-center w-[90%] mx-auto'>
              Our friendly customer support team is here to help! They can answer any questions you have about our packages and recommend the best fit for your needs.
            </p>
          </div>
          <Button className='w-[40%] m-auto font-semibold bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] rounded-full text-[#E5E1E9]'>
            Contact Sales
          </Button>
        </div>
      </div>
    </>
  );
};
