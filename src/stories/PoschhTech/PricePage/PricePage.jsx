import React from "react";
import './pricepage.css';
import { PCard } from "../Card1/Card1";

export const PricePage = () => {

  return (
    <div className="w-screen h-auto pb-8 bg-[#272626] flex flex-col items-center">
      <div className="w-[100%] flex flex-col items-center justify-center items-center my-8">
        <div className=""><p className="font-semibold text-[56px] text-center md:text-[48px] text-[#F2F4F7] ">A plan that's tailor-made for you!</p></div>
        <div className="w-[70%] text-center "><p className="text-[18px] md:[16px] text-[#F2F4F7]" >Unleash the potential of data with our tailored analytical tools, crafted to suit your unique needs.</p></div>
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col w-[90%] mt-16 items-center justify-center">
      <PCard
          buttonText="Get Started"
          header="Basic"
          info="Best for Small Teams or Individuals"
          list={[
            'Write feature details here',
            'Write feature details here',
            'Write feature details here',
            'Write feature details here'
          ]}
          priceTime="8 Months"
          pricing="1849"
          tagName=""
        />
        <PCard
            buttonText="Get Started"
            header="Plus"
            info="Best for Small Teams or Individuals"
            isSelected
            isTag
            list={[
              'Write feature details here',
              'Write feature details here',
              'Write feature details here',
              'Write feature details here'
            ]}
            priceTime="8 Months"
            pricing="1849"
            tagName="Popular"
          />
        <PCard
          buttonText="Get Started"
          header="Basic"
          info="Best for Small Teams or Individuals"
          list={[
            'Write feature details here',
            'Write feature details here',
            'Write feature details here',
            'Write feature details here'
          ]}
          priceTime="8 Months"
          pricing="1849"
          tagName=""
        />
 
      </div>
   </div>
  );
}