import React from 'react';
import { NavigationBar } from './stories/PoschhTech/NavBar/NavBar';
import { Layout1 } from './stories/PoschhTech/TopLayout/TopLayout';
import { PricePage } from './stories/PoschhTech/PricePage/PricePage';
import { Footer } from './stories/PoschhTech/Footer/Footer';
const PoschLanding=()=>{
return(<>
   <div className='w-screen h-screen'>
        <NavigationBar  />
        <Layout1 />
        {/* <PricePage/> */}
        <Footer/>
    </div>

</>)

}

export default PoschLanding