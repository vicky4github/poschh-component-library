import React from 'react';
import { NavigationBar } from './stories/PoschhTech/NavBar/NavBar';
import { Layout1 } from './stories/PoschhTech/TopLayout/TopLayout';
import { PricePage } from './stories/PoschhTech/PricePage/PricePage';
import { Footer } from './stories/PoschhTech/Footer/Footer';
import { ContactUs } from './stories/PoschhTech/ContactUs/ContactUs';
import { Feature } from './stories/PoschhTech/FeaturePage/Feature';
import { Brands } from './stories/PoschhTech/Brands/Brands';
import { Button,Modal,useDisclosure,ModalContent } from "@nextui-org/react";
import ServicesUnderMaintenance from './stories/PoschhTech/Modals/ServicesUnderMaintenance';
import { useEffect } from 'react';
const PoschLanding=()=>{
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
   
useEffect(()=>{
    onOpen()
},[])

return(<>
   <div className='w-screen h-screen overflow-x-hidden'>
   <Modal placement='center' isOpen={isOpen}  onOpenChange={onOpenChange}>
            <ModalContent className=' bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6]'>
              {(onClose) => (
                <>
                <ServicesUnderMaintenance onClose={onClose}/>
                </>
              )}
            </ModalContent>
          </Modal>
        <NavigationBar  />
        <Layout1 />
        <PricePage/>
        <ContactUs />
        <Brands />
        <Feature />
        <Footer/>
    </div>

</>)

}

export default PoschLanding