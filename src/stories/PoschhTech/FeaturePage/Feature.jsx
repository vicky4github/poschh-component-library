import React from "react";
import './feature.css';
import { BCard } from "../Card2/Card2";
import { Button } from "@nextui-org/react";
export const Feature = () => {

  return (
    <div className="bg-[#282434] flex flex-col items-center">
      <div><p className="text-[#F2F4F7] text-[64px] font-semibold">Explore Our Key Features</p></div>
      <div><p className="text-[#F2F4F7] text-[18px] mt-4">Discover the Power Behind Our Platform: Unveiling Our Standout Features</p></div>
      
      <div className="flex flex-row h-[500px] w-[950px] justify-around mt-16">
        <div className="flex flex-col h-[100%] justify-between">
        <BCard
          body="Unify data management and empower data-driven decisions. Automate data collection, generate custom reports (reduce reporting time by 40%), and boost productivity by 20%. All while ensuring unparalleled security and scalability."
          header="Streamline Your Workflow"
          height={300}
          width={200}
        />
        <BCard
          body="Safeguard your data and empower growth. Industry-leading security and a 99.9% uptime guarantee ensure peace of mind. Our scalable platform adapts to your success, letting you focus on core business."
          header="Unparalleled Security and Scalability"
          height={300}
          width={200}
        />
        </div>
        <div className="flex flex-col h-[100%] justify-between">
        <BCard
          body="Uncover customer trends and preferences to boost satisfaction by 25%. Leverage this knowledge for laser-focused marketing campaigns, driving a 10% conversion increase."
          header="Gain Deep Customer Insights"
          height={300}
          width={200}
        />
        <BCard
          body="Track KPIs and respond to market changes 50% faster. Our clear data visualization tools translate complex data into actionable dashboards, empowering you to make informed decisions with confidence."
          header="Make Data-Driven Decisions"
          height={300}
          width={200}
        />
        </div>
        <div className="flex flex-col h-[100%] justify-between">
        <BCard
          body="Unify data management and empower data-driven decisions. Automate data collection, generate custom reports (reduce reporting time by 40%), and boost productivity by 20%. All while ensuring unparalleled security and scalability."
          header="Streamline Your Workflow"
          height={300}
          width={200}
        />
        <BCard
          body="Safeguard your data and empower growth. Industry-leading security and a 99.9% uptime guarantee ensure peace of mind. Our scalable platform adapts to your success, letting you focus on core business."
          header="Unparalleled Security and Scalability"
          height={300}
          width={200}
        />
        </div>
      </div>
      <div className="my-16 w-[100%] flex flex-col justify-center">
          <div><p className="text-[#F2F4F7] w-[90%] text-center">Schedule a free demo to see how our analytical tools can empower your success!</p></div>
          <div className="mt-4 w-[90%] flex justify-center"><Button className={` w-[30%] font-semibold bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] rounded-full text-[#E5E1E9] border-[#E5E1E9]`}>Contact Sales</Button></div>
        </div>
    </div>
  );
}

//bg-gradient-to-r from- via-[#63A5D6] to-[#63A5D6]