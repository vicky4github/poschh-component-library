import React,{useState} from 'react';
import { Link, Button } from '@nextui-org/react';
import './navbar.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { Modal } from "react-responsive-modal";

export const NavigationBar = () => {
  const [open,setOpen]=useState(false);
  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);
  
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
         <Button id='salesButton' onClick={openForm}>Contact Sales</Button>
        </Link>
        <Modal open={open} onClose={close}>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
       
      </div>
    </nav>
  );

};
