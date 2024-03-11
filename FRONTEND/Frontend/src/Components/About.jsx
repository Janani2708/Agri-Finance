

import React from 'react';
import Comnav from './Comnav';
import Footer from './Footer';
const About = () => {
  return (
    <div>
               <div className='lll'><Comnav/></div>

        
    <div style={{ 
      backgroundImage: "url('https://img.freepik.com/premium-photo/business-meeting_53876-91042.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      textAlign: 'center', 
      padding: '50px' 
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About Us</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
        We are dedicated to providing financial solutions for farmers to promote sustainable agriculture and rural development.
        Our mission is to empower farmers with access to credit, insurance, and other financial services, helping them improve their livelihoods and contribute to food security.
      </p>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '30px auto 0' }}>
        At Agriculture Finance, we believe in the importance of supporting smallholder farmers and fostering innovation in the agricultural sector. Through our partnerships and programs, we strive to create opportunities for farmers to thrive and build resilient communities.
      </p>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
};

export default About;
