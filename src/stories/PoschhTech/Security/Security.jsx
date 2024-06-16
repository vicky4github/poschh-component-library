import React from 'react';
import { Button } from '@nextui-org/react';
import { IoIosArrowBack } from "react-icons/io";
import './security.css';

const SecurityPage = () => {
  return (
    <div className="flex flex-col bg-[#141318] text-[#E5E1E9] w-screen items-start mx-auto p-4">
      <Button onClick={() => { window.location.href = '/' }} className="z-10 flex items-center justify-center m-4 font-semibold bg-gradient-to-r from-[#6F6DDE] to-[#63A5D6] rounded-md text-[#E5E1E9]">
        <IoIosArrowBack style={{ width: '15px', height: '15px', color: '#E5E1E9' }} />
        <span className="text-[#E5E1E9] ml-2">Home</span>
      </Button>
      <div className="flex flex-col md:w-full w-[85%]  items-center mx-auto">
        <h1 className="md:text-3xl text-2xl mt-4 font-bold md:text-center  mb-4 md:mb-8">Data Security at Poschh</h1>
        
        <p className="mb-6 w-[95%] md:max-w-4xl">
          At Poschh, ensuring the security and privacy of our users' data is our top priority. We employ robust security measures and best practices to protect data at every stage, from collection and storage to processing and transmission. Our commitment to data security is integral to our mission of providing advanced analytics and insights while maintaining the highest standards of trust and reliability.
        </p>
        <div className='text-start'>
        <h2 className="text-2xl font-semibold mb-4">Comprehensive Security Measures</h2>
        
        <h3 className="text-xl font-semibold mb-2">Data Encryption</h3>
        <ul className="list-disc pl-6 mb-6 max-w-4xl">
          <li className="mb-2"><strong>Encryption at Rest:</strong> All sensitive data is encrypted at rest using industry-standard encryption algorithms to protect it from unauthorized access.</li>
          <li><strong>Encryption in Transit:</strong> Data transmitted between our systems and users is encrypted using TLS (Transport Layer Security) to ensure secure communication.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-2">Access Controls</h3>
        <ul className="list-disc pl-6 mb-6 max-w-4xl">
          <li className="mb-2"><strong>Role-Based Access Control (RBAC):</strong> We implement RBAC to restrict access to data based on the user's role within the organization, ensuring that only authorized personnel can access sensitive information.</li>
          <li><strong>Multi-Factor Authentication (MFA):</strong> MFA is required for accessing our systems, adding an extra layer of security by requiring users to provide multiple forms of verification.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-2">Regular Audits and Monitoring</h3>
        <ul className="list-disc pl-6 mb-6 max-w-4xl">
          <li className="mb-2"><strong>Security Audits:</strong> We conduct regular security audits to identify and address vulnerabilities in our systems. These audits help us maintain a high level of security and compliance.</li>
          <li><strong>Continuous Monitoring:</strong> Our systems are continuously monitored for suspicious activities and potential security threats. Any anomalies are promptly investigated and mitigated.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-2">Data Anonymization and Masking</h3>
        <ul className="list-disc pl-6 mb-6 max-w-4xl">
          <li className="mb-2"><strong>Anonymization:</strong> We use data anonymization techniques to protect the identity of individuals in our datasets, ensuring that personal information cannot be traced back to specific individuals.</li>
          <li><strong>Data Masking:</strong> Sensitive data is masked to prevent exposure during testing, development, and analysis processes.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Compliance and Best Practices</h2>
        <ul className="list-disc pl-6 mb-6 max-w-4xl">
          <li className="mb-2"><strong>GDPR Compliance:</strong> We adhere to the General Data Protection Regulation (GDPR) requirements, ensuring that personal data is handled in compliance with European data protection standards.</li>
          <li className="mb-2"><strong>HIPAA Compliance:</strong> For healthcare-related data, we comply with the Health Insurance Portability and Accountability Act (HIPAA) to protect sensitive patient information.</li>
          <li><strong>ISO/IEC 27001 Certification:</strong> Our information security management system is ISO/IEC 27001 certified, demonstrating our commitment to maintaining the highest standards of information security.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">User Data Privacy</h2>
        <ul className="list-disc pl-6 mb-6 max-w-4xl">
          <li className="mb-2"><strong>Privacy Policy:</strong> Our comprehensive privacy policy outlines how we collect, use, and protect user data. We are transparent about our data practices and ensure users are informed about their rights and choices.</li>
          <li><strong>User Consent:</strong> We obtain explicit consent from users before collecting or processing their data. Users have the right to access, modify, and delete their data as needed.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Incident Response</h2>
        <ul className="list-disc pl-6 mb-6 max-w-4xl">
          <li className="mb-2"><strong>Incident Management:</strong> We have a robust incident response plan in place to handle any security incidents promptly and effectively. Our team is trained to respond to breaches, mitigate risks, and prevent future occurrences.</li>
          <li><strong>Communication:</strong> In the event of a data breach, we will notify affected users promptly and provide them with the necessary information and support to protect their data.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">Continuous Improvement</h2>
        <ul className="list-disc pl-6 mb-6 max-w-4xl">
          <li className="mb-2"><strong>Security Training:</strong> Our employees receive regular security training to stay updated on the latest security practices and threats. This ensures that our team is equipped to protect user data effectively.</li>
          <li><strong>Innovation in Security:</strong> We continuously invest in advanced security technologies and practices to stay ahead of emerging threats and enhance our security posture.</li>
        </ul>
        
        <p className="mb-6 max-w-4xl">
          At Poschh, we are dedicated to safeguarding your data and maintaining your trust. Our comprehensive security measures, adherence to best practices, and commitment to continuous improvement ensure that your data is protected at all times.
        </p>

        </div>
        
      </div>
    </div>
  );
};

export default SecurityPage;
