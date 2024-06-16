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
      <div className='flex md:flex-row flex-col items-center w-[90%] min-h-fit m-auto py-12 relative'>
        <div className='md:w-[40%] md:order-2 w-[70%] mx-auto flex items-center relative'>
          <img className='w-[75%] mx-auto scale-anima3' src={Star} alt="Star" />
          <img className='absolute top-[-50%] left-[-10%] w-[40%] scale-anima1 ' src={Torus} alt="Torus" />
        </div>
        <div className='flex flex-col md:w-[50%] md:order-1 w-[90%] p-4 md:text-[18px] text-[12px] justify-center text-[#E5E1E9]'>
          <p className='w-[90%] mx-auto md:text-[56px] text-[36px] font-semibold md:font-bold'>AI Powered Analytics Solution</p>
          <p className='md:line-clamp-2 my-4 w-[90%] mx-auto'>
          Turn data into insights. We empower your professionals with the expertise to leverage powerful analytical tools.
          </p>
          <p className='px-11 py-2'>Unlock deeper insights and drive smarter decisions for any business use case</p>
          <ul className='w-[80%] md:list-image-[url("./check_circle.svg")] list-disc mx-auto'>
            <li className='my-2'><b>Increase efficiency</b> and productivity across all departments.</li>
            <li className='my-2'><b>Optimize processes</b> and workflows for maximum impact.</li>
            <li className='my-2'><b>+ Business AI Chatbot</b> - chatbot that addresses your business specifically</li>
          </ul>
          {/* <Button className='bg-[#C7BFFF] p-6 w-[35%] mx-8 my-6 rounded-3xl text-[#2F285F]'>
            <p className='md:text-[16px] text-[13px]'>Unlock Your Insights</p>
          </Button> */}
        </div>
      </div>
      <img className='absolute bottom-5 right-0 md:w-[10%] w-[20%] scale-anima2' src={Cylinder} alt="Cylinder" />
    </div>
  );
};
