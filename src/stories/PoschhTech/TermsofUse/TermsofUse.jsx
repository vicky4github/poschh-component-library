import React from 'react';
import { Button, Link } from '@nextui-org/react';
import { IoIosArrowBack } from "react-icons/io";

export const TermsOfUse = () => {
    return (
        <div className="flex flex-col bg-[#141318] text-[#E5E1E9] w-screen items-start mx-auto">
                <Button onClick={()=>{window.location.href='/'}} className="md:z-10 flex items-center justify-center m-4 md:m-12 font-semibold bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] rounded-md text-[#E5E1E9]">
                    <IoIosArrowBack style={{width:'15px' , height:'15px', color:'#E5E1E9', stroke:'#E5E1E9' }} />
                    <span className="text-[#E5E1E9]">Home</span>
                </Button>
            
    <div className="md:z-0 flex flex-col w-[100%] md:absolute top-10 items-center mx-auto">
        <h4 className="text-center leading-loose text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6]">Posch Tech, INC.</h4>
        <h4 className="text-center text-3xl">CUSTOMER TERMS OF SERVICE</h4>
    </div>
   
    <div className="md:w-full w-[85%] mx-auto max-w-6xl md: text-justify mt-12 text-[14px] font-light ">
        <p className="text-base font-normal leading-loose">Last Updated: May 26, 2024</p>
        <p className="text-base font-normal leading-loose">Welcome to Posch Tech!</p>
        <ol class="list-decimal md:pl-8  pl-4 mt-4">
            <li class="md:mb-4 mb-2">Acceptance of Terms. By accessing or using our services, you agree to be bound by these Terms of Use, our Privacy Policy, and all applicable laws and regulations.</li>
            <li class="md:mb-4 mb-2">Use of Services. You agree to use our services for lawful purposes only and to comply with all applicable laws and regulations. You may not use our services to engage in any illegal or unauthorized activities.</li>
            <li class="md:mb-4 mb-2">User Content. Any content you submit to our services remains your property. By submitting content, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content worldwide.</li>
            <li class="md:mb-4 mb-2">Intellectual Property. All content included in or made available through our services, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Posch Tech or its content suppliers and is protected by copyright laws.</li>
            <li class="md:mb-4 mb-2">Disclaimer of Warranties. Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, secure, or error-free.</li>
            <li class="md:mb-4 mb-2">Limitation of Liability. To the fullest extent permitted by applicable law, Posch Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use our services; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from our services; (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services by any third party.</li>
            <li class="md:mb-4 mb-2">Governing Law. These Terms of Use shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</li>
            <li>Changes to Terms. We reserve the right to update or modify these Terms of Use at any time without prior notice. Your continued use of our services after any such changes constitutes your acceptance of the new Terms of Use.</li>
        </ol>
        <p class="my-4">Contact Us: <a>support@poschh.com</a></p>
    </div>
        </div>
    );
};

