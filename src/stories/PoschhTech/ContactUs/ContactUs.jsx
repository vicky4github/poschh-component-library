import React from 'react';
import './contactus.css';
import { Button,Modal,ModalBody,useDisclosure,ModalContent } from "@nextui-org/react";
import { ContactSalesModal } from '../NavBar/ContactSalesModal';

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
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <div className='relative h-[400px] w-[100%] bg-[#100c13] overflow-hidden'>
        <img
          className='floating-animation1 opacity-25 md:w-[100px] w-[50px] object-cover absolute mt-[200px] left-0 bottom-0'
          src='/ball1.png'
          alt='Ball 1'
        />
        <img
          className='floating-animation2 opacity-25 md:w-[120px] md:h-[140px] w-[60px] h-[70px] object-cover absolute right-0 mt-0'
          src='/ball2.png'
          alt='Ball 2'
        />
      </div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='md:w-[80%] w-[100%] h-[80%] grid items-center'>
          <div>
            <p className='text-[#F2F4F7] md:text-[48px] text-[32px] font-semibold text-center md:leading-loose'>
            Still Unsure? Let's Chart Your Course Together 
            </p>
            <p className='text-[#F2F4F7] md:text-[15px] text-[12px] font-light text-center  md:w-[60%] w-[90%] mx-auto'>
            We are proud of our customer support crew, where each interaction is a journey in itself. Experience the joy of seamless assistance, personalized recommendations, and a level of care that sets us apart in a vast ocean of choices.
            </p>
          </div>
          <Button onPress={onOpen} className='w-[40%] m-auto font-semibold bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] rounded-full text-[#E5E1E9]'>
            Contact Sales
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className=' bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6]'>
          {(onClose) => (
            <>
            
        <ContactSalesModal onClose={onClose} onOpen={onOpen}/>
            </>
          )}
        </ModalContent>
      </Modal>
        </div>
      </div>
    </>
  );
};
