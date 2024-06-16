import React from 'react';
import './footer.css';
import { Button,Modal,useDisclosure,ModalContent } from "@nextui-org/react";
import { ContactSalesModal } from '../NavBar/ContactSalesModal';
import { FaInstagram, FaLinkedin , FaXTwitter  } from "react-icons/fa6";
export const Footer = () => {
 
  return (
    <>
      <div id='footer' className='h-[500px] md:h-[400px] w-[100%] bg-[#141318] relative '>
       <FooterX/>
      </div>
    </>
  );
};

const FooterX=()=>{
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return(<> <div className='w-[100%] h-[100%] absolute bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] opacity-40 bg-blend-luminosity'>
  <img  className= 'opacity-15 w-[100%] h-[100%]' src='/bg1.png'></img>
</div>

<div className='h-[500px] md:h-[400px] w-[100%] absolute justify-around  inset-0 flex md:flex-row flex-col items-center '>
<div className='flex flex-col md:w-[35%] w-[100%] mx-auto h-[60%] md:h-[90%] justify-between p-8 mr-12'>
 <div>
   <img  className= 'w-[15%] my-2' src='/logo.png'></img>
   <p className='md:text-[12px] text-[10px] md:w-[80%] w-[100%] text-[#F2F4F7] leading-6 font-light'>At Poschh Analytics, we empower and help professionals become masters of their own data. Discover how to leverage data-driven strategies for unparalleled success, mastering the digital realm with innovation and expertise.</p>
 </div>
 <div className='flex flex-row w-[25%] justify-between'>
   <a href='https://www.instagram.com'><FaInstagram className='fill-[#FFFFFF]' size={24} /></a>
   <a href='https://www.linkedin.com'><FaLinkedin className='fill-[#FFFFFF]' size={24} /></a>
   <a href='https://x.com'><FaXTwitter className='fill-[#FFFFFF]' size={24} /></a>
 </div>
 <div><p className='text-[14px] text-[#F2F4F7]'>© 2024 Poschh Tech</p></div>


</div>
<div className='flex flex-row md:w-[50%] w-[90%] mx-auto h-[30%] md:h-[90%] justify-around '>
 <div className='md:w-[20%] h-[100%] flex flex-col items-start md:h-[80%]'>
   <Button className='md:h-[18%] h-[30%] bg-transparent text-[#F2F4F7] text-[12px] md:text-[14px]' disableRipple>About Us</Button>
   <Button className='md:h-[18%] h-[30%] bg-transparent text-[#F2F4F7] text-[12px] md:text-[14px]' disableRipple>Pricing</Button>
   <Button  onPress={onOpen} className='md:h-[18%] h-[30%] bg-transparent text-[#F2F4F7] text-[12px] md:text-[14px]' disableRipple>Contact Us</Button>
   <Modal placement='center' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className=' bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6]'>
          {(onClose) => (
            <>
            
        <ContactSalesModal onClose={onClose} onOpen={onOpen}/>
            </>
          )}
        </ModalContent>
      </Modal>
   
 </div>
 
 <div className='md:w-[20%] h-[100%] flex flex-col items-start md:h-[80%]'>
   <Button onClick={()=>{window.location.href='https://blog.poschh.com'}}  className='md:h-[18%] h-[30%] bg-transparent text-[#F2F4F7] text-[12px] md:text-[14px]' disableRipple>Blog</Button>
   <Button onClick={()=>{window.location.href='/careers'}}  className='md:h-[18%] h-[30%] bg-transparent text-[#F2F4F7] text-[12px] md:text-[14px]' disableRipple>Career</Button>
 </div>
 <div className='md:w-[20%] h-[100%] flex flex-col items-start md:h-[80%]'>
   <Button onClick={()=>{window.location.href='/privacy-policy'}} className='md:h-[18%] h-[30%] bg-transparent text-[#F2F4F7] text-[12px] md:text-[14px]' disableRipple>Privacy Policy</Button>
   <Button onClick={()=>{window.location.href='/terms-of-use'}} className='md:h-[18%] h-[30%] bg-transparent text-[#F2F4F7] text-[12px] md:text-[14px]' disableRipple>Terms and Conditions</Button>
 </div>
 
</div>

</div></>)
}