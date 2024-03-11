import image from'../assets/AgriGirl.jpg';
import './Privacy.css';
import Comnav from './Comnav';
import Footer from './Footer';

const Privacy = () => {
  return (
    <div>
                       <div className='mmm'><Comnav/></div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
      <div style={{ width: '50%', paddingRight: '20px' }}>
        <h1 style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: 'bold' }}>Privacy & Policies</h1>
        <p style={{ color: '#666', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          At Revolutionizing Agricultural Funding, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and disclose information when you use our website or services.
        </p>
        <p style={{ color: '#666', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          By using our website or services, you consent to the collection, use, and disclosure of your personal information in accordance with this policy.
        </p>
        <br/>
        <h2 style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: 'bold' }}>Information We Collect</h2>
        <p style={{ color: '#666', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
        </p>
        <p style={{ color: '#666', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          The information we collect may include your name, email address, phone number, and other personal information.
        </p>
        <br/>
        <h2 style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: 'bold' }}>How We Use Your Information</h2>
        <p style={{ color: '#666', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          We use your information to provide you with our services, to contact you regarding your order or inquiry, and to send you promotional emails about our products and services.
        </p>
        <br/>
        <h2 style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: 'bold' }}>How We Disclose Your Information</h2>
        <p style={{ color: '#666', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          We may disclose your personal information to third-party service providers who perform services on our behalf, such as payment processing, shipping, and data analysis.
        </p>
        <p style={{ color: '#666', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          We may also disclose your personal information if required by law or if we believe that such disclosure is necessary to protect our rights, property, or safety.
        </p>
        <br/>
        <h2 style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: 'bold' }}>Security</h2>
        <p style={{ color: '#666', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
        </p>
        <br/>
        <h2 style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '24px', fontWeight: 'bold' }}>Changes to This Privacy Policy</h2>
        <p style={{ color: '#666', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        <p style={{ color: '#666', lineHeight: '1.6', fontFamily: 'Arial, sans-serif', fontSize: '16px' }}>
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@agrocloud.com" style={{ color: '#666', textDecoration: 'underline' }}>info@agrocloud.com</a>.
        </p>
        <br/>
      </div>
      <div style={{ width: '50%' }}>
        <img src={image} alt="Logo Image" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
};

export default Privacy;
