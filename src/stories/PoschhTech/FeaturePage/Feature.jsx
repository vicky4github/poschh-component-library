import React from "react";
import './feature.css';
import { BCard } from "../Card2/Card2";
import { Button,Modal,useDisclosure,ModalContent } from "@nextui-org/react";
import { ContactSalesModal } from '../NavBar/ContactSalesModal';
export const Feature = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
   <div>
    <div id='featurecard' className="bg-[#141318] w-[100%] flex flex-col text-center items-center">
      <div><p className="text-[#F2F4F7] text-[30px] md:text-[48px] font-semibold">Explore Our Key Features</p></div>
      <div><p className="text-[#F2F4F7] w-[90%] mx-auto text-[12px] md:text-[16px] mt-4">Discover the Power Behind Our Platform: Unveiling Our Standout Features</p></div>
      
      <div className="hidden md:flex flex-row w-[65%] h-[650px] justify-between mt-4 md:mt-16">
        <div className="flex md:flex-col flex-row h-[100%] justify-around">
        <BCard
          body="Unify data management and empower data-driven decisions. Automate data collection, generate custom reports (reduce reporting time by 40%), and boost productivity by 20%. All while ensuring unparalleled security and scalability."
          header="Streamline Your Workflow"
          height={300}
          width={320}
        />
        <BCard
          body="Safeguard your data and empower growth. Industry-leading security and a 99.9% uptime guarantee ensure peace of mind. Our scalable platform adapts to your success, letting you focus on core business."
          header="Unparalleled Security and Scalability"
          height={300}
          width={320}
        />
        </div>
        <div className="flex  md:flex-col flex-row h-[100%] justify-around">
        <BCard
          body="Uncover customer trends and preferences to boost satisfaction by 25%. Leverage this knowledge for laser-focused marketing campaigns, driving a 10% conversion increase."
          header="Gain Deep Customer Insights"
          height={260}
          width={320}
        />
        <BCard
          body="Track KPIs and respond to market changes 50% faster. Our clear data visualization tools translate complex data into actionable dashboards, empowering you to make informed decisions with confidence."
          header="Make Data-Driven Decisions"
          height={340}
          width={320}
        />
        </div>
        <div className="flex  md:flex-col flex-row h-[100%] justify-around">
        <BCard
          body="Empower engineering teams with a collaborative analytics workspace.  This shared environment fosters seamless teamwork through data exploration, real-time communication with integrated chat, and version control to ensure data integrity."
          header="Collaborative Analytics Workspace"
          height={300}
          width={320}
        />
        <BCard
          body="Unify and customize your analytics experience. Design custom dashboards, integrate seamlessly with existing tools, and leverage open-source libraries for flexibility."
          header="Advanced Customization & Integration"
          height={300}
          width={320}
        />
        </div>
      </div>
      <ul className="md:hidden list-disc text-[#F2F4F7] font-light my-8  w-[80%]  mx-auto flex flex-col items-start ">
        <li className="my-1">Streamline Your Workflow</li>
        <li className="my-1">Unparalleled Security and Scalability</li>
        <li className="my-1">Gain Deep Customer Insights</li>
        <li className="my-1">Make Data-Driven Decisions</li>
        <li className="my-1">Collaborative Analytics Workspace</li>
        <li className="my-1">Advanced Customization & Integration</li>

      </ul>
      <div className="md:my-16 my-4 w-[90%] flex flex-col justify-center">
          <div><p className="text-[#F2F4F7] text-[12px] md:text-[18px] w-[100%] font-light text-center">Schedule a free demo to see how our analytical tools can empower your success!</p></div>
          <div className="my-6 w-[100%] flex justify-center">
            <Button  onPress={onOpen} className={` md:w-[20%] w-[40%] font-semibold bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] rounded-full text-[#E5E1E9] `}>Contact Sales</Button></div>
            <Modal className='xs:w-[80%] mx-auto' placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
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
   </div>
    
  );
}

//bg-gradient-to-r from- via-[#63A5D6] to-[#63A5D6]