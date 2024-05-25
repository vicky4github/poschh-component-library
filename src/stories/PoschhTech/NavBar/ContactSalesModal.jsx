import React from 'react';
import { ModalHeader,Input,ModalBody,ModalFooter,Button } from '@nextui-org/react';
export const ContactSalesModal=({onClose})=>{

    return(<>      <ModalHeader className="flex flex-col gap-1">
    <h5 className='text-white ml-[12px]'>Please Fill Your Details</h5>
    <p style={{fontSize:'10px',color:'white',marginLeft:'12px'}}>Our sales team will be in touch with you shortly</p>
    </ModalHeader>
    <ModalBody>
   
    <Input
    key={"outside"}
    type="text"
    label="Name"
    labelPlacement={"outside"}
   
    // description={placement}
  />
    <Input
    key={"outside"}
    type="email"
    label="Email"
    labelPlacement={"outside"}
   
    // description={placement}
  />
   <Input
    key={"outside"}
    type="phone"
    label="Contact"
    labelPlacement={"outside"}
    // description={placement}
  />
    </ModalBody>
    <ModalFooter>
    {/* <p style={{fontSize:'10px',color:'white',textAlign:'center'}} className=' w-[100%]'>@poschh pvt ltd.</p> */}
    <Button className='bg-[#f4f4f5]' onPress={onClose}>
        Submit
      </Button>
    </ModalFooter>
   {/* <div className='w-[100%] flex justify-center py-2'>
   
   </div> */}
    </>)
}
