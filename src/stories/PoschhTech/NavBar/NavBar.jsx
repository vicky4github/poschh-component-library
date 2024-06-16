import React, { useState } from 'react';
import { Link, Button } from '@nextui-org/react';
import './navbar.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { Modal, ModalContent, useDisclosure, NavbarMenuToggle, Navbar } from "@nextui-org/react";
import { ContactSalesModal } from './ContactSalesModal';
import { FaBars } from "react-icons/fa";

export const NavigationBar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => setIsMenuOpen(true);
  const handleMenuChange = () => setIsMenuOpen(false);

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
        <Button id='aiButton' className='my-2' onClick={handleMenuChange}><img src='./ai.png' className='w-4 h-4'></img>AI Chat <p className='border-2 text-[12px] px-2 rounded-xl border-green-500 text-green-500'>Beta</p></Button>
        </Link>
        <Link>
          <Button id='salesButton' onClick={onOpen}>Contact Sales</Button>
        </Link>
      </div>
      
      <Modal placement='top' className='w-[100%] h-[100%] bg-black flex items-center' isOpen={isMenuOpen} onOpenChange={handleMenuChange}>
        <ModalContent>
        {(onClose) => (
          <div className='flex flex-col bg-inherit' onClose={onClose} >
             <Link href="/#">
                <Button id='aiButton' className='my-2' onClick={handleMenuChange}>AI Chat <p className='border-2 border-green-500 text-green-500'>Beta</p></Button>
              </Link>
              <Link>
                <Button id='salesButton' className='my-2' onClick={() => { onOpen(); handleMenuChange(); }}>Contact Sales</Button>
              </Link>
          </div>
         
        )}
        </ModalContent>
      </Modal>
      <Modal placement='center' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className='bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6]'>
          {(onClose) => (
            <ContactSalesModal onClose={onClose} onOpen={onOpen} />
          )}
        </ModalContent>
      </Modal>
    </nav>
  );
};
