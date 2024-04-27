import React from 'react';
import './footer.css';
import {Button} from "@nextui-org/react";
import { FaInstagram, FaLinkedin , FaXTwitter  } from "react-icons/fa6";
export const Footer = () => {
 
  return (
    <>
      <div className='h-[350px] w-[1000px] bg-[#141318]'>
        <div className='w-[100%] h-[100%] bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] opacity-40 bg-blend-luminosity'>
           <img  className= 'opacity-15 w-[100%] h-[100%]  ' src='/bg1.png'></img>
        </div>
      
      </div>
      <div className='h-[350px] w-[1000px] absolute inset-0 flex items-center'>
        <div className='flex flex-col w-[35%] h-[90%] p-8 justify-between'>
          <div>
            <img  className= 'w-[30%] my-2' src='/logo.png'></img>
            <p className='text-[16px] text-[#F2F4F7] font-medium'>Empowering professionals with analytical tool expertise for data-driven success.</p>
          </div>
          <div className='flex flex-row w-[40%] justify-between'>
            <FaInstagram className='fill-[#FFFFFF]' size={24} />
            <FaLinkedin className='fill-[#FFFFFF]' size={24} />
            <FaXTwitter className='fill-[#FFFFFF]' size={24} />
          </div>
          <div><p className='text-[16px] text-[#F2F4F7]'>@2024 Poschh Tech</p></div>
        

        </div>
        <div className='flex flex-row w-[50%] h-[90%] py-8 justify-around '>
          <div className='w-[20%] h-[100%] flex flex-col items-start'>
            <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]'>About Us</Button>
            <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]'>Engineers</Button>
            <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]'>Pricing</Button>
            <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]'>Contact Us</Button>
            
          </div>
          
          <div className='w-[20%] h-[100%] flex flex-col items-start'>
            <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]'>Blog</Button>
            <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]'>Career</Button>
          </div>
          <div className='w-[20%] h-[100%] flex flex-col items-start'>
            <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]'>Privacy Policy</Button>
            <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]'>Terms and Conditions</Button>
          </div>
          
        </div>

      </div>
    </>
  );
};