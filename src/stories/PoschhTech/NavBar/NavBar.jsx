import React, { useState, useEffect } from 'react';
import { Link, Button } from '@nextui-org/react';
import './navbar.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { ContactSalesModal } from './ContactSalesModal';
import { FaBars } from "react-icons/fa";

export const NavigationBar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleMenuClose = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('click', handleMenuClose);
    } else {
      document.removeEventListener('click', handleMenuClose);
    }
    return () => document.removeEventListener('click', handleMenuClose);
  }, [menuOpen]);

  return (
    <nav className='navbar h-[80px] mx-auto top-0 px-12 xs:px-4 py-4 flex items-center justify-between bg-[#141318] relative'>
      <div className='md:h-[40px] h-[30px]'>
        <Link href="/">
          <img src="/logo.png" className='md:h-[50px] h-[30px] object-contain' alt="Logo" />
        </Link>
      </div>

      <div className='hidden md:flex items-center space-x-4'>
        <Dropdown />
        <Link href="/page1">
          <Button id='reqButton'>Request a quote</Button>
        </Link>
        <Link>
          <Button id='salesButton' onPress={onOpen}>Contact Sales</Button>
        </Link>
      </div>
      <div className='md:hidden'>
        <FaBars size={24} onClick={handleMenuToggle} />
      </div>
      {menuOpen && (
        <div className='absolute top-0 right-0 h-screen w-3/4 bg-[#141318] flex flex-col items-start p-8 md:hidden'>
          <Dropdown />
          <Link href="/page1">
            <Button id='reqButton' className='my-2' onClick={handleMenuClose}>Request a quote</Button>
          </Link>
          <Link>
            <Button id='salesButton' className='my-2' onClick={handleMenuClose} onPress={onOpen}>Contact Sales</Button>
          </Link>
        </div>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className='bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6]'>
          {(onClose) => (
            <ContactSalesModal onClose={onClose} onOpen={onOpen} />
          )}
        </ModalContent>
      </Modal>
    </nav>
  );
};
