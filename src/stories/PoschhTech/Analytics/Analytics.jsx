import React from 'react';
import './analytics.css';
import { Button } from '@nextui-org/react';
import { IoIosArrowBack } from "react-icons/io";
import analytics1 from "../../../assets/chart-1.jpg"
import analytics2 from "../../../assets/chart-2.webp"

export const AnalyticsPage= () => {
  return (

  <div className="flex flex-col  bg-[#141318] text-[#E5E1E9]  w-screen items-start mx-auto p-4">
    
     <Button onClick={()=>{window.location.href='/'}} className="md:z-10 flex items-center justify-center m-4 md:m-12 font-semibold bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] rounded-md text-[#E5E1E9]">
      <IoIosArrowBack style={{width:'15px' , height:'15px', color:'#E5E1E9', stroke:'#E5E1E9' }} />
      <span className="text-[#E5E1E9]">Home</span>
    </Button>
    <div className="md:z-0 flex flex-col w-[100%] md:absolute top-16  items-center mx-auto">
      <h4 className="text-center text-4xl font-semibold">Leveraging AI in Our Analytics Tool</h4>
    </div>
   
    <div className="md:w-full w-[85%] mx-auto max-w-6xl md:text-justify mt-12 text-[14px] font-light ">
    <p className="text-lg mb-12">
          Our analytics tool at Poschh is powered by Artificial Intelligence (AI) and cutting-edge technologies to provide advanced insights and drive data-based decision-making for our users.
      </p>
        <div className="flex justify-center mb-8 ">
          <img src={analytics1} alt="Analytics Image 1" className="w-[60%]  object-contain mr-4 rounded-md anal-img" />
          {/* <img src={analytics2} alt="Analytics Image 2" className="w-[50%] object-contain rounded-md" /> */}
        </div>
        <h2 className="text-2xl font-bold mb-2">Advanced Data Processing with Kafka-Spark</h2>
        <p className="text-lg mb-12">
          We utilize Kafka-Spark for peak performance and scalability. This combination allows us to process large volumes of data in real-time, ensuring that our users have access to up-to-date and actionable insights.
        </p>
        <h2 className="text-2xl font-bold mb-2">Effortless Logging Integration</h2>
        <p className="text-lg mb-12">
          Our tool seamlessly integrates with <b>Graphana, Prometheus, and Kibana </b>for logging. This integration provides our users with comprehensive monitoring and logging capabilities, ensuring the reliability and performance of our analytics tool.
        </p>
        <h2 className="text-2xl font-bold mb-2">Integration with Time Series Database</h2>
        <p className="text-lg mb-12">
          We offer integration with a choice of Time Series Database (Stand Alone), allowing our users to store and analyze time-series data efficiently. This integration enhances the scalability and performance of our analytics tool, making it ideal for handling large-scale data analytics tasks.
        </p>
        <h2 className="text-2xl font-bold mb-2">Key AI-Driven Features</h2>
        <ul className="list-disc ml-6 mb-12">
          <li className="mb-2">
            <b>Automated Reporting:</b> AI automates report generation, saving time and ensuring consistency across reports.
          </li>
          <li className="mb-2">
            <b>Smart Alerts:</b> AI-powered alerts notify users of significant changes or anomalies in their data, enabling proactive decision-making.
          </li>
          <li className="mb-2">
            <b>Predictive Analytics:</b> Our tool uses AI for predictive analytics, forecasting trends and identifying potential risks.
          </li>
          <li className="mb-2">
            <b>Personalized Insights:</b> AI tailors insights to individual users, providing customized recommendations and strategies.
          </li>
          <li className="mb-2">
            <b>Real-time Data Processing:</b> AI enables real-time processing of data streams, allowing users to make decisions based on the most current information.
          </li>
        </ul>
        <p className="text-lg mb-12">
          These features, powered by AI and supported by Kafka-Spark, Graphana + Prometheus + Kibana, and integration with Time Series Database, enable our users to make informed decisions quickly and confidently, leading to improved business outcomes.
        </p>
        <h2 className="text-2xl font-bold mb-2">Enhanced with OpenAI</h2>
        <p className="text-lg mb-12">By integrating OpenAI's powerful language models, our analytics tool can provide even deeper insights and more sophisticated data interactions. This integration enhances our ability to deliver natural language understanding and generation, making it easier for users to query data, generate reports, and receive insights in a conversational manner.
          These features, powered by AI and supported by Kafka-Spark, Grafana + Prometheus + Kibana, and integration with Time Series Databases, enable our users to make informed decisions quickly and confidently, leading to improved business outcomes.
        </p>

     
           
    </div>
  </div>
  );
};

export default AnalyticsPage;
