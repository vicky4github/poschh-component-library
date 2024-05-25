import React from 'react';
import { Link, Button,Input } from '@nextui-org/react';
import './navbar.css';
import { Dropdown } from '../Dropdown/Dropdown';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { ContactSalesModal } from './ContactSalesModal';

export const NavigationBar = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <nav className='navbar h-[80px] mx-auto top-0 px-12 py-4 '>
      <div className='logo'>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Logo" />
          </a>
        </Link>
      </div>
      <div className='buttons'>
        <Dropdown />
        <Link href="/page1">
         <Button id='reqButton' >Request a quote</Button>
        </Link>
        <Link>
         <Button id='salesButton' onPress={onOpen}>Contact Sales</Button>
        </Link>
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
    </nav>
  );

};
