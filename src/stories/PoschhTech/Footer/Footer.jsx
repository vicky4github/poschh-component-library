import React from 'react';
import './footer.css';
import {Button} from "@nextui-org/react";
import { FaInstagram, FaLinkedin , FaXTwitter  } from "react-icons/fa6";
export const Footer = () => {
 
  return (
    <>
      <div id='footer' className='h-[400px] w-[100%] bg-[#141318] relative '>
       <FooterX/>
      </div>
    </>
  );
};

const FooterX=()=>{
  return(<> <div className='w-[100%] h-[100%] absolute bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] opacity-40 bg-blend-luminosity'>
  <img  className= 'opacity-15 w-[100%] h-[100%]' src='/bg1.png'></img>
</div>

<div className='h-[450px] w-[100%] absolute  inset-0 flex items-center '>
<div className='flex flex-col w-[35%] h-[80%] justify-between p-8 mr-12'>
 <div>
   <img  className= 'w-[12%] my-2' src='/logo.png'></img>
   <p className='text-[16px] text-[#F2F4F7] font-medium'>Empowering professionals with analytical tool expertise for data-driven success.</p>
 </div>
 <div className='flex flex-row w-[25%] justify-between'>
   <FaInstagram className='fill-[#FFFFFF]' size={24} />
   <FaLinkedin className='fill-[#FFFFFF]' size={24} />
   <FaXTwitter className='fill-[#FFFFFF]' size={24} />
 </div>
 <div><p className='text-[16px] text-[#F2F4F7]'>@2024 Poschh Tech</p></div>


</div>
<div className='flex flex-row w-[50%] h-[100%] justify-around '>
 <div className='w-[20%] h-[80%] flex flex-col items-start mt-12'>
   <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]' disableRipple>About Us</Button>
   <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]' disableRipple>Engineers</Button>
   <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]' disableRipple>Pricing</Button>
   <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]' disableRipple>Contact Us</Button>
   
 </div>
 
 <div className='w-[20%] h-[80%] flex flex-col items-start mt-12'>
   <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]' disableRipple>Blog</Button>
   <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]' disableRipple>Career</Button>
 </div>
 <div className='w-[20%] h-[80%] flex flex-col items-start mt-12'>
   <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]' disableRipple>Privacy Policy</Button>
   <Button className='h-[15%] bg-transparent text-[#F2F4F7] text-[16px]' disableRipple>Terms and Conditions</Button>
 </div>
 
</div>

</div></>)
}