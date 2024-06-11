import React from 'react';

const ServicesUnderMaintenance = ({onClose}) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>We'll be back soon!</h1>
      <p style={styles.paragraph}>
        Our services are currently undergoing maintenance. We apologize for any inconvenience caused.
        Please check back later. Some features might not be working as we are constantly updating.
        If you have any urgent inquiries, feel free to contact our support team.
      </p>
      <p style={styles.contact}>
        Email: support@poschh.com <br />
      </p>
      <p style={styles.thankYou}>
        Thank you for your patience and understanding.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f4f4f5',
    // maxWidth: '600px',
    height:"100%",
    margin: '100px auto',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2em',
    color: '#333',
  },
  paragraph: {
    fontSize: '1em',
    color: '#666',
    lineHeight:'20px',
    margin: '20px 0',
  },
  contact: {
    fontSize: '1em',
    color: '#666',
    margin: '20px 0',
  },
  thankYou: {
    fontSize: '1em',
    color: '#333',
    marginTop: '20px',
  },
};

export default ServicesUnderMaintenance;
