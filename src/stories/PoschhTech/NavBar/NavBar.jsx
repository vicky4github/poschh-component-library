import React, { useState } from 'react';
import { Link, Button, useDisclosure, Modal, ModalContent } from '@nextui-org/react';
import './navbar.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { FaBars, FaTimes } from "react-icons/fa";
import { ContactSalesModal } from '../NavBar/ContactSalesModal';

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className='navbar h-[80px] mx-auto top-0 px-12 xs:px-4 py-4 flex items-center justify-between bg-[#141318] relative'>
      <div className='md:h-[40px] h-[30px]'>
        <Link href="/">
          <img src="/logo.png" className='md:h-[50px] h-[30px] object-contain' alt="Logo" />
        </Link>
      </div>

      <div className='hidden md:flex items-center space-x-4'>
        <Dropdown />
        <Link href="https://ai.poschh.com/">
          <Button id='aiButton' className='my-2'>
            <img src='./ai.png' className='w-4 h-4' alt="AI Icon"/> AI Chat
            <p className='border-2 text-[12px] px-2 rounded-xl border-green-500 text-green-500'>Beta</p>
          </Button>
        </Link>
        <Link>
          <Button onPress={onOpen} id='salesButton'>Contact Sales</Button>
        </Link>
        <Modal  className='xs:w-[80%] mx-auto' placement='center' isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className=' bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6]'>
            {(onClose) => (
              <>
                <ContactSalesModal onClose={onClose} onOpen={onOpen}/>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>

      <div className='md:hidden flex items-center relative'>
        <div className='text-2xl cursor-pointer z-20' onClick={handleMenuToggle}>
          {isMenuOpen ? <FaTimes className='cross' /> : <FaBars />}
        </div>
      </div>

      {isMenuOpen && (
        <div className='top-0 left-0 right-0 bottom-0 fixed z-10 bg-[#141318] w-full flex flex-col items-start justify-start p-8'>
          <Link className='text-white mt-8' href="https://ai.poschh.com/">
            AI Chat <p className='border-2 border-green-500 rounded-xl scale-75 ml-1 px-1 text-green-500'>Beta</p>
          </Link>
          <Link onPress={onOpen} className='text-white mt-4'>
            Contact Sales
          </Link>
          <Link className='text-white mt-4' href="http://store.poschh.com/">
           Poschh Store
          </Link>
          <Link className='text-white mt-4' href="/analytics">
            Analytics
          </Link>
          <Link className='text-white mt-4' href="/security">
            Security
          </Link>
          <Link className='text-white mt-4' href="http://13.235.21.219:8501/">
          Tools (Spectate US Top 10)
          </Link>
          <Link className='text-white mt-4' href="http://13.235.21.219:8502/">
          Tools (Data Visualizatioin)
          </Link>
        </div>
      )}
    </nav>
  );
};
