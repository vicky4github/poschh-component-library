import React from 'react';
import './toplayout.css';
import {Button} from "@nextui-org/react";
import { NavigationBar } from '../NavBar/NavBar';
/**
 * type UI component for user interactions
 */
export const Layout1 = () => {
 
  return (
    <div className='flex flex-col justify-start min-h-fit lg:w-[1000px]  md:w-[600px] sm:[400px]'>
       <NavigationBar />
       <div className='bg-[#212121] flex lg:flex-row flex-col  items-center w-[90%] min-h-fit m-auto py-12'>
       <div className='lg:w-[40%] lg:order-2 w-[60%]  mx-auto flex items-center'>
          <img className='w-[90%]' src='/chain.png'></img>
        </div>
        <div className='flex flex-col lg:w-[60%] lg:order-1 w-[90%] p-4 lg:text-[18px] text-[14px] justify-center text-[#E5E1E9]'>
          <p className='w-[90%] mx-auto lg:text-[50px] text-[36px] font-medium'>Unmatched scale and security</p>
          <p className='line-clamp-2 my-4 w-[90%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
          <ul className='w-[80%] mx-auto my-4'>
            <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur</li>
            <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur</li>
          </ul>
          <Button className='bg-[#C7BFFF] p-6 w-[30%] mx-8 rounded-3xl  text-[#2F285F]'><p className='lg:text-[18px] text-[13px]'>Unlock Your Insights</p></Button>
        </div>
        
       </div>
        

    </div> 
  );
};