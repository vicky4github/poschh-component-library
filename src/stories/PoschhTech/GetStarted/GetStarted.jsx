import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { IoIosArrowBack } from "react-icons/io";
import './getstarted.css';
import { useState } from 'react';

const cards =[
  {
    title: 'Business Standard Pack',
    price: '$4743',
    infoPoints: [
      {
        title: 'StandAlone Business Kafka Cluster',
        description: 'Our Kafka cluster is designed for standalone business applications, ensuring high performance, reliability, and scalability. It provides robust data streaming capabilities, enabling real-time data processing and analytics. This solution is perfect for businesses looking to handle high-throughput, low-latency data feeds independently.',
        imageUrl: './kafka.png',
      },
      {
        title: 'Seamless Grafana-Prometheus Logging Integration',
        description: 'Easily integrate with Grafana and Prometheus for seamless logging and monitoring. Our integration provides real-time insights into system performance and health, with customizable dashboards and alerting mechanisms. This ensures you can track and respond to issues promptly, maintaining system stability and reliability.',
        imageUrl: './grafana.png',
      },
      {
        title: 'Integration Choice Time Series Database (Stand Alone)',
        description: 'Choose your preferred time series database for standalone integration, enhancing flexibility and performance. Our solution supports various popular time series databases, allowing you to select the one that best fits your needs. This ensures optimal data storage, retrieval, and analysis for time-based data.',
        imageUrl: './db.jpg',
      },
      {
        title: 'Custom Analytics Dashboard (Custom Charts Support)',
        description: 'Build custom analytics dashboards with support for custom charts tailored to your needs. Our platform allows you to create visually appealing and informative dashboards that provide deep insights into your data. Customize charts, graphs, and widgets to display key metrics and trends relevant to your business objectives.',
        imageUrl: './dashboard.png',
      },
      {
        title: 'Migration Span with Integration Team (Minimum - 3 months)',
        description: 'Our team ensures a smooth migration process with a minimum span of 3 months for integration. We provide detailed planning, execution, and support to transition your existing systems to our platform with minimal disruption. Our experts work closely with your team to address any challenges and ensure a successful migration.',
        imageUrl: './migration.png',
      },
      {
        title: 'Dual Support Engineers Until Integration',
        description: 'Benefit from dual support engineers throughout the integration period for optimal support and troubleshooting. Our dedicated support engineers are available to assist with any technical issues or questions, ensuring a smooth and efficient integration process. This dual support model provides an added layer of reliability and expertise.',
        imageUrl: './engineer.png',
      },
    ]
  },
  {
  title: 'Shared Standard Pack',
  price: '$3743',
  infoPoints: [
    {
      title: 'Shared Kafka Cluster',
      description: 'Our shared Kafka cluster is designed to offer high performance, reliability, and scalability in a shared environment. It provides robust data streaming capabilities, enabling real-time data processing and analytics. This solution is ideal for businesses that need efficient data handling without the need for dedicated infrastructure.',
      imageUrl: './kafka.png',
    },
    {
      title: 'Seamless Grafana Logging Integration',
      description: 'Easily integrate with Grafana for seamless logging and monitoring. Our integration offers real-time insights into system performance and health, with customizable dashboards and alerting mechanisms. This ensures you can track and respond to issues promptly, maintaining system stability and reliability.',
      imageUrl: './grafana.png',
    },
    {
      title: 'Integration Choice Time Series Database (Shared)',
      description: 'Select your preferred time series database for shared integration, enhancing flexibility and performance. Our solution supports various popular time series databases, allowing you to choose the one that best fits your needs. This ensures optimal data storage, retrieval, and analysis for time-based data in a shared environment.',
      imageUrl: './db.jpg',
    },
    {
      title: 'Custom Analytics Dashboard',
      description: 'Build custom analytics dashboards tailored to your needs. Our platform allows you to create visually appealing and informative dashboards that provide deep insights into your data. Customize charts, graphs, and widgets to display key metrics and trends relevant to your business objectives.',
      imageUrl: './dashboard.png',
    },
    {
      title: 'Migration Span with Integration Team (Minimum - 5 months)',
      description: 'Our team ensures a smooth migration process with a minimum span of 5 months for integration. We provide detailed planning, execution, and support to transition your existing systems to our platform with minimal disruption. Our experts work closely with your team to address any challenges and ensure a successful migration.',
      imageUrl: './migration.png',
    },
    {
      title: 'One Support Engineer Until Integration',
      description: 'Benefit from a dedicated support engineer throughout the integration period for optimal support and troubleshooting. Our support engineer is available to assist with any technical issues or questions, ensuring a smooth and efficient integration process. This support model provides an added layer of reliability and expertise.',
      imageUrl: './engineer.png',
    },
  ]
},
{
  title: 'Enterprise Standard Pack',
  price: '$6129',
  infoPoints: [
    {
      title: 'Kafka-Spark for Peak Performance and Scalability',
      description: 'Our Kafka-Spark integration is designed to provide peak performance and scalability for your data processing needs. This solution ensures high throughput, low latency, and robust data streaming capabilities. It is ideal for enterprises looking to handle large volumes of data efficiently.',
      imageUrl: './kafka.png',
    },
    {
      title: 'Effortless Logging Integration: Grafana + Prometheus + Kibana',
      description: 'Seamlessly integrate with Grafana, Prometheus, and Kibana for comprehensive logging and monitoring. Our integration provides real-time insights into system performance and health, with customizable dashboards and alerting mechanisms. This ensures you can track and respond to issues promptly, maintaining system stability and reliability.',
      imageUrl: './grafana.png',
    },
    {
      title: 'Integration Choice Time Series Database (Stand Alone)',
      description: 'Choose your preferred time series database for standalone integration, enhancing flexibility and performance. Our solution supports various popular time series databases, allowing you to select the one that best fits your needs. This ensures optimal data storage, retrieval, and analysis for time-based data.',
      imageUrl: './db.jpg',
    },
    {
      title: 'Tailored Analytics Dashboards for Enterprise Teams',
      description: 'Build tailored analytics dashboards designed for enterprise teams. Our platform allows you to create visually appealing and informative dashboards that provide deep insights into your data. Customize charts, graphs, and widgets to display key metrics and trends relevant to your business objectives.',
      imageUrl: './dashboard.png',
    },
    {
      title: 'Migration Span with Integration Team (Minimum - 2 months)',
      description: 'Our team ensures a smooth migration process with a minimum span of 2 months for integration. We provide detailed planning, execution, and support to transition your existing systems to our platform with minimal disruption. Our experts work closely with your team to address any challenges and ensure a successful migration.',
      imageUrl: './migration.png',
    },
    {
      title: '4 Dedicated Support Engineers Until Integration',
      description: 'Benefit from four dedicated support engineers throughout the integration period for optimal support and troubleshooting. Our support engineers are available to assist with any technical issues or questions, ensuring a smooth and efficient integration process. This extensive support model provides an added layer of reliability and expertise.',
      imageUrl: './engineer.png',
    },
    {
      title: 'Spark Streaming + ML for Enhanced Data Pipelines',
      description: 'Enhance your data pipelines with Spark Streaming and Machine Learning capabilities. Our solution leverages the power of Spark to provide real-time data processing and advanced analytics, enabling you to build intelligent data pipelines that can adapt to changing data patterns and deliver actionable insights.',
      imageUrl: './spark.png',
    },
  ]
}

] 


const GetStarted = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cardIndex = parseInt(queryParams.get('cardIndex'), 10) || 0;
  const [data,setData]=useState(cards[cardIndex]);
  return (
    <div className="flex flex-col bg-[#141318] text-[#E5E1E9] w-screen items-start mx-auto p-4">
      <Button onClick={() => { window.location.href = '/' }} className="md:z-10 flex  sm:scale-10 items-center justify-center m-4 font-semibold bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] rounded-md text-[#E5E1E9]">
        <IoIosArrowBack style={{ width: '15px', height: '15px', color: '#E5E1E9' }} />
        <span className="text-[#E5E1E9] ml-2">Home</span>
      </Button>
      <div className="flex flex-col w-[80%] items-center mx-auto">
        <h1 className="md:text-3xl  font-bold text-center mb-8">{data.title}</h1>
        {data.infoPoints.map((point, index) => (
          <div key={index} className={`flex flex-col my-8 md:flex-row justify-between mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-[40%] mx-auto md:mb-0">
              <img src={point.imageUrl} alt={point.title} className="md:w-80   w-[100%] h-auto rounded-2xl" />
            </div>
            <div className="md:w-[50%] mt-4 md:mt-0 flex flex-col justify-around md:pl-8">
              <h2 className="md:text-2xl font-bold mb-2">{point.title}</h2>
              <p className="text-gray-400 md:w-[80%] mt-2 text-justify">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
