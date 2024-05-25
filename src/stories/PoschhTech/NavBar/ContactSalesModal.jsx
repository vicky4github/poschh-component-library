import React, { useState } from 'react';
import { ModalHeader, Input, ModalBody, ModalFooter, Button } from '@nextui-org/react';

export const ContactSalesModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [errors, setErrors] = useState({ email: false, contact: false });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContact = (contact) => {
    const contactRegex = /^\d{10}$/; // Assuming a 10-digit phone number for simplicity
    return contactRegex.test(contact);
  };

  const handleSubmit = () => {
    const isEmailValid = validateEmail(email);
    const isContactValid = validateContact(contact);
    
    if (!isEmailValid || !isContactValid) {
      setErrors({ email: !isEmailValid, contact: !isContactValid });
    } else {
      // Handle form submission logic
      onClose();
    }
  };

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">
        <h5 className='text-white ml-[12px]'>Please Fill Your Details</h5>
        <p style={{ fontSize: '10px', color: 'white', marginLeft: '12px' }}>
          Our sales team will be in touch with you shortly
        </p>
      </ModalHeader>
      <ModalBody>
        <Input
          type="text"
          label="Name"
          labelPlacement="outside"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          label="Email"
          labelPlacement="outside"
          color={errors.email ? 'danger' : 'default'}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors({ ...errors, email: false });
          }}
        />
        <Input
          type="text"
          label="Contact"
          labelPlacement="outside"
          color={errors.contact ? 'danger' : 'default'}
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
            setErrors({ ...errors, contact: false });
          }}
        />
      </ModalBody>
      <ModalFooter>
        <Button className='bg-[#f4f4f5]' onPress={handleSubmit}>
          Submit
        </Button>
      </ModalFooter>
    </>
  );
};
