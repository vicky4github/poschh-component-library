import React from 'react';
import { NavigationBar } from './stories/PoschhTech/NavBar/NavBar';
import { Layout1 } from './stories/PoschhTech/TopLayout/TopLayout';
import { PricePage } from './stories/PoschhTech/PricePage/PricePage';
import { Footer } from './stories/PoschhTech/Footer/Footer';
import { ContactUs } from './stories/PoschhTech/ContactUs/ContactUs';
import { Feature } from './stories/PoschhTech/FeaturePage/Feature';
import { Brands } from './stories/PoschhTech/Brands/Brands';

const PoschLanding=()=>{
return(<>
   <div className='w-screen h-screen overflow-x-hidden'>
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