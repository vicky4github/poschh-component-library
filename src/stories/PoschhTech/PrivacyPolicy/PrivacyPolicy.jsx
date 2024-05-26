import React from 'react';
import './privacypolicy.css';
import { Button } from '@nextui-org/react';
import { IoIosArrowBack } from "react-icons/io";


export const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col  bg-[#141318] text-[#E5E1E9]  w-screen items-start mx-auto p-4">
    
     <Button onClick={()=>{window.location.href='/'}} className="z-10 flex items-center justify-center m-12 font-semibold bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] rounded-md text-[#E5E1E9]">
      <IoIosArrowBack style={{width:'15px' , height:'15px', color:'#E5E1E9', stroke:'#E5E1E9' }} />
      <span className="text-[#E5E1E9]">Home</span>
    </Button>
    <div className="z-0 flex flex-col w-[100%] absolute top-10 items-center mx-auto">
    <h4 className="text-center leading-loose text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6]">Posch Tech, INC.</h4>

      <h4 className="text-center text-3xl">PRIVACY POLICY</h4>
     
    </div>
   
    <div className="w-full mx-auto max-w-6xl text-justify mt-12 text-[14px] font-light ">
      <div>
        <p className="text-base font-normal leading-loose">Last Updated: May 26, 2024</p>
        <section className="my-8 font-semibold leading-loose">
          <div>
            At Posch Tech, Inc, we understand that your privacy is an important part of the trust you place in us. This Policy explains how we collect, use, disclose, and otherwise process Personal Information about you collected in connection with our Services, including our websites and mobile applications that post or link to this Policy. When we use the terms “Posch Tech”, “we”, “us”, or “our” in this Policy, we are referring to Posch Tech, Inc. and its subsidiaries and affiliated companies. The term “Services” in this Policy is defined to include our website(s), all mobile or web-based software platforms, including the Posch Tech application and the related services we offer to our customers, unless we provide a different privacy policy to individuals at the time we collect their Personal Information. Please note this Policy does not apply to our processing of employee or contractor Personal Information.
          </div>
        </section>
      </div>
      <section className="my-8 font-semibold leading-loose">
        <strong className="text-lg font-semibold underline underline-offset-2 leading-loose">PERSONAL INFORMATION COLLECTED</strong>
        <div>
          When we use the term “Personal Information” in this Policy, we mean any information relating to an identified or identifiable natural person who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person. It does not include aggregated or anonymized information that is maintained in a form that is not capable of being associated with or reasonably linked to you. Our use and sharing of aggregated or anonymized information is not covered by this Policy. We collect Personal Information about you in various ways, including directly from you when you provide it to us, automatically when you interact with our Services, and from other sources and third parties:
        </div>
      </section>
      <section className="my-8 font-semibold leading-loose">
        <strong className="text-lg">Personal Information You Provide</strong>
        <div>
          We collect Personal Information you provide through our Services or give to us in any other way, including over the phone, electronically or on paper. In connection with these activities, we collect the following:
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact information, such as name, email address, postal address, and telephone number;</li>
            <li>Demographic information, such as age or region;</li>
            <li>Employment-related information, such as employer, broker, shipper, receiver, truck and driver identifiers and work title;</li>
            <li>Account information, such as user ID, password and load preferences;</li>
            <li>Transaction information, such as payment information, financial account information, credit information, order details, and order preferences;</li>
            <li>Load-Related information, such as load identifiers, price, pick-up and drop-off information;</li>
            <li>Geolocation information, such as your current location and destination preferences;</li>
            <li>Broker and Shipper generated content, such as preferences relating to calls, messages and load negotiation;</li>
            <li>Inquiry information, such as the content of your email, text, or chat with us and, where applicable, your voice from calls with our Services.</li>
          </ul>
        </div>
      </section>
      <section className="my-8 font-semibold leading-loose">
        <strong className="text-lg">Personal Information Automatically Collected</strong>
        <div>
          We, our service providers, and our business partners may automatically log information about you, your computer or mobile device, and your activity over time on our Services and other online services, including:
          <ul className="list-disc pl-5 space-y-1">
            <li>Device data, such as your computer or mobile device operating system type and version number, manufacturer and model, browser type, screen resolution, device identifier (such as IP address and UUID), language setting, and general location information such as city, state or geographic area.</li>
            <li>Usage data, such as the website you visited before browsing to our Services, the pages or features of our Services you browse and the time you spend on those pages or features, the frequency with which you use our Services, the links you click on or use and other actions you take on the Services, and email or push notification engagement information such as whether you open, click on or forward a message.</li>
          </ul>
        </div>
      </section>
      <section className="my-8 font-semibold leading-loose">
        <strong className="text-lg">Personal Information from Other Sources</strong>
        <div>
          We may receive your Personal Information from third-party sources. For example, we receive information from our business partners such as shippers and brokers; from companies that provide information to support verification, credit and payment services, or fraud detection services; from public databases; and from social media platforms. We may add this information to the information we have already collected from you via our Services.
        </div>
      </section>
      <section className="my-8 font-semibold leading-loose">
        <strong className="text-lg">Cookies and Similar Technologies</strong>
        <div>
          We may allow service providers and other third parties to use cookies, web beacons, pixels, and other similar technologies to collect information about your browsing activities over time and across different websites following your use of our Services. Our Services currently do not respond to "Do Not Track" signals.
        </div>
      </section>
      <section className="my-8 font-semibold leading-loose">
        <strong className="text-lg">Use of Personal Information</strong>
        <div>
          We use your Personal Information for various purposes, including to provide and improve our Services, to communicate with you, to protect against fraud and abuse, to comply with our legal obligations, and for other purposes with your consent.
        </div>
      </section>
      <section className="my-8 font-semibold leading-loose">
        <strong className="text-lg">Sharing of Personal Information</strong>
        <div>
          We may share your Personal Information with our service providers, business partners, affiliates, and as required by law. We do not sell your Personal Information to third parties.
        </div>
      </section>
      <section className="my-8 font-semibold leading-loose">
        <strong className="text-lg">Data Security</strong>
        <div>
          We use reasonable organizational, technical, and administrative measures to protect Personal Information within our organization. Unfortunately, no data transmission or storage system can be guaranteed to be 100% secure.
        </div>
      </section>
      <section className="my-8 font-semibold leading-loose">
        <strong className="text-lg">Your Choices</strong>
        <div>
          You have certain choices regarding your Personal Information, including the right to access, correct, or delete your Personal Information, and the right to opt-out of certain data processing activities.
        </div>
      </section>
      <section className="my-8 font-semibold leading-loose">
        <strong className="text-lg">Changes to this Privacy Policy</strong>
        <div>
          We may update this Policy from time to time to reflect changes in our practices or applicable laws. We will post any updates to our website.
        </div>
      </section>
      <section className="my-8 font-semibold leading-loose">
        <strong className="text-lg">Contact Us</strong>
        <div>
          If you have any questions about this Policy or our privacy practices, please contact us at <a>support@poschh.com</a>.
        </div>
      </section>
    </div>
  </div>
  );
};
