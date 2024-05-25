import React from 'react';
import { Link, Button } from '@nextui-org/react';
import './navbar.css';
import { Dropdown } from '../Dropdown/Dropdown';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";


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
        <ModalContent className='text-black'>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
       
      </div>
    </nav>
  );

};
