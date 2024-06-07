import React, { useState } from 'react';
import { ModalHeader, Input, ModalBody, ModalFooter, Button, Textarea } from '@nextui-org/react';
import toast from 'react-hot-toast';

const notifySuccess = (message) => toast.success(message, {
 
  style: {
    padding: '8px',
    color: 'white',
    background:"rgba(16, 172, 132, 0.6)"
  },
  iconTheme: {
    primary: 'white',
    secondary: '#10ac84',
  },
});

const notifyFailure = (message) => toast.error(message, {
  style: {
    padding: '8px',
    color: 'white',
    background:"rgba(238, 82, 83, 0.6)"
  },
  iconTheme: {
    primary: 'white',
    secondary: '#ee5253',
  },
});

export const ContactSalesModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ email: false, contact: false, message: false });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContact = (contact) => {
    const contactRegex = /^\d{10}$/; // Assuming a 10-digit phone number for simplicity
    return contactRegex.test(contact);
  };

 
  const handleSubmit = async () => {
    const isEmailValid = validateEmail(email);
    const isContactValid = validateContact(contact);
    const isMessageValid = message.trim().length > 0;

    if (!isEmailValid || !isContactValid || !isMessageValid) {
      setErrors({ email: !isEmailValid, contact: !isContactValid, message: !isMessageValid });
      return;
    }

    const query = `
      mutation {
        createEnquiry(
          name: "${name}",
          email: "${email}",
          source: "poschh-analytics",
          message: "${message}",
          contact: "${contact}"
        ) {
          success
          message
        }
      }
    `;

    const response = await fetch('https://graphql.poschh.com/graphql', {
      method: 'POST',
      headers: {
        'Accept-Language': 'en-US,en;q=0.9,hi;q=0.8',
        'Connection':'keep-alive',
        'Cookie': '__gsas=ID=9852975a9eac6419:T=1716744128:RT=1716744128:S=ALNI_MZHVZKdaRHbCxnd0qQ-6TkzbOBfbg; ajs_anonymous_id=79b19145-03ff-46ce-b19a-473c20f88a35',
        'Origin': 'https://graphql.poschh.com',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
        'accept': 'application/graphql-response+json, application/json, multipart/mixed',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: query,
        extensions: {}
      })
    });

    const result = await response.json();

    if (result.data.createEnquiry.success) {
      // Handle successful submission
      notifySuccess(result.data.createEnquiry.message)
      onClose();
    } else {
      console.error(result.data.createEnquiry.message);
      notifyFailure("We'll get back to you shortly ! It seems our services are down")
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
        <Textarea
          label="Message"
          labelPlacement="outside"
          color={errors.message ? 'danger' : 'default'}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setErrors({ ...errors, message: false });
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
