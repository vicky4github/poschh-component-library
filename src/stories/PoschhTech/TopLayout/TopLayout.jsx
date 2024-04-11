import React from 'react';
import './toplayout.css';
import {Button} from "@nextui-org/react";
import { NavigationBar } from '../NavBar/NavBar';
/**
 * type UI component for user interactions
 */
export const Layout1 = () => {
 
  return (
    <div className='flex flex-col justify-start lg:w-[1000px] h-auto md:w-[600px] sm:[400px]  border-2 border-black'>
       <NavigationBar />
       <div className='bg-[#212121] flex flex-row w-[90%] h-[500px] m-auto'>
        <div className='flex flex-col w-[60%] p-4 justify-center text-[#E5E1E9]'>
          <p className='w-[90%] mx-auto text-[50px] font-medium'>Unmatched scale and security</p>
          <p className='line-clamp-2 w-[90%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
          <ul className='w-[80%] mx-auto my-4'>
            <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur</li>
            <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur</li>
          </ul>
          <Button className='bg-[#C7BFFF] p-6 w-[30%] mx-8 rounded-3xl  text-[#2F285F]'>Unlock Your Insights</Button>
        </div>
        <div className='w-[40%] flex items-center'>
          <img src='/chain.png'></img>
        </div>
       </div>
        

    </div> 
  );
};