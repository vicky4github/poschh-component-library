import React from "react";
import './pricepage.css';
import { PCard } from "../Card1/Card1";

export const PricePage = () => {

  return (
    <div className="w-screen h-auto pb-8 bg-[#141318] flex flex-col items-center">
      <div className="w-[100%] flex flex-col justify-center items-center mt-8 md:my-8">
        <div className=""><p className="font-semibold md:text-[56px] text-center text-[24px] text-[#F2F4F7] ">Crafted Just for You: Your Customized Plan!</p></div>
        <div className="md:w-[60%] w-[70%] mx-auto mt-4 font-light text-center "><p className="text-[12px] md:[18px] md:leading-[40px] text-[#F2F4F7]" >
          Unlock Data Potential with Customized Analytics Solutions Designed Exclusively for You.
          Pay for only the features you need and not the features you might need 
        </p></div>
      </div>
      <div className="flex md:flex-row flex-col w-[90%] md:mt-16 mt-8 items-center justify-center">
      <PCard
          buttonText="Get Started"
          buttonLink='/getStarted?cardIndex=1'
          header="Business Starter Pack"
          info="Best for Small Teams or Individuals"
          list={[
            "Shared Kafka Cluster", 
            "Seamless Grafana Logging Integration", 
            "Integration Choice Time Series Database (Shared)",
             "Custom Analytics Dashboard", 
             "Migration span with integration team (Minimum - 5 months)",
              "One Support Engineer Until Integration"

          ]}
          priceTime="Month + Taxes(As applicable)"
          pricing="3439"
          tagName=""
        />
        <PCard
            buttonText="Get Started"
            buttonLink='/getStarted?cardIndex=0'
            header="Business Standard Pack"
            info="Best for Mid-Size Teams"
            isSelected
            isTag
            list={[
              "StandAlone Business Kafka Cluster",
              "Seamless Grafana-Prometheus Logging Integration",
              "Integration Choice Time Series Database (Stand Alone)", 
              "Custom Analytics Dashboard (Custom Charts Support)",
              "Migration span with integration team (Minimum - 3 months)",
              "Dual Support Engineers Until Integration"
            ]}
            priceTime="Month + Taxes(As applicable)"
            pricing="4743"
            tagName="Popular"
          />
        <PCard
          buttonText="Get Started"
          buttonLink='/getStarted?cardIndex=2'
          header="Business Enterprise Exclusive Pack"
          info="Best for Enterprise"
          list={[
            "Kafka-Spark for Peak Performance and Scalability",
            "Effortless logging Integration: Graphana + Prometheus + Kibana",
            "Integration Choice Time Series Database (Stand Alone)", 
            "Tailored Analytics Dashboards for Enterprise Teams", 
            "Migration span with integration team (minimum - 2 months)", 
            "4 Dedicated Support Engineers Until Integration", 
            "Spark Streaming + ML for Enhanced Data Pipelines"
          ]}
          priceTime="Month + Taxes(As applicable)"
          pricing="6129"
          tagName=""
        />
 
      </div>
   </div>
  );
}