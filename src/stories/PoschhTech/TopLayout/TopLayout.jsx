import React from 'react';
import './toplayout.css';
import { Button } from "@nextui-org/react";
import Star from '../../../assets/emj.svg';
import Cylinder from '../../../assets/cylinder.svg';
import Torus from '../../../assets/halfTorus.svg';


/**
 * type UI component for user interactions
 */
export const Layout1 = () => {
  return (
    <div
      className='relative flex flex-col justify-start min-h-fit w-screen bg-cover bg-center bg-[#141318]'
      style={{ backgroundImage: "url('/layout.png')" }}
    >
      <div className='flex lg:flex-row flex-col items-center w-[90%] min-h-fit m-auto py-12 relative'>
        <div className='lg:w-[40%] lg:order-2 w-[40%] mx-auto flex items-center relative'>
          <img className='w-[75%] mx-auto scale-anima' src={Star} alt="Star" />
          <img className='absolute top-[-50%] left-[-10%] w-[40%] scale-anima' src={Torus} alt="Torus" />
        </div>
        <div className='flex flex-col lg:w-[50%] lg:order-1 w-[90%] p-4 lg:text-[18px] text-[14px] justify-center text-[#E5E1E9]'>
          <p className='w-[90%] mx-auto lg:text-[56px] text-[36px] font-bold'>Powerful Analytics Solution</p>
          <p className='line-clamp-2 my-4 w-[90%] mx-auto'>
          Turn data into insights. We empower your professionals with the expertise to leverage powerful analytical tools.
          </p>
          <ul className='w-[80%] mx-auto'>
            <li className='list-disc my-2'>Increase efficiency and productivity across all departments.</li>
            <li className='list-disc my-2'>Optimize processes and workflows for maximum impact.</li>
          </ul>
          <Button className='bg-[#C7BFFF] p-6 w-[35%] mx-8 my-6 rounded-3xl text-[#2F285F]'>
            <p className='lg:text-[16px] text-[13px]'>Unlock Your Insights</p>
          </Button>
        </div>
      </div>
      <img className='absolute bottom-5 right-0 w-[10%] scale-anima' src={Cylinder} alt="Cylinder" />
    </div>
  );
};
