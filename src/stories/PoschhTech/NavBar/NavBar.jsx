// import React from "react";
// import { FaBars } from "react-icons/fa6";
// import {Image} from "@nextui-org/react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import './navbar.css'
// export  function NavigationBar() {

//   return (
//     <>
//       <Navbar className="bg-[#313036] w-[90%] h-[90%] m-auto">
//         <NavbarBrand>
//           <Image src="/logo.png" className="h-[90%]"></Image>
//           {/* <img src='/logo.png' className=""></img> */}
//         </NavbarBrand>
//       </Navbar>
//     </>
//   );
// }
// components/Navbar.js

// import {Link} from "@nextui-org/react";
// import {Button} from "@nextui-org/react";
export  function NavigationBar() {
  return (
    <nav class='navbar'>
      <div class='logo'>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Logo" />
          </a>
        </Link>
      </div>
      <div class='buttons'>
        <Link href="/page1">
         <Button class='reqButton'>Request a quote</Button>
        </Link>
        <Link href="/page2">
         <Button class='salesButton'>Contact Sales</Button>
        </Link>
       
      </div>
    </nav>
  );

};
