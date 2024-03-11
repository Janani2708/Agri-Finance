import './Contact.css';
import Footer from './Footer';
import Comnav from './Comnav';

const Contact = () => {
  return (
    <div>
      <Comnav />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          If you have any questions or inquiries about our agriculture finance services, feel free to contact us using the information below:
        </p>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@agrofinance.com</p>
          <p><strong>Phone:</strong> +1 123-456-7890</p>
          <p><strong>Address:</strong> 123, AgroFinance Street, CityName</p>
        </div>
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
