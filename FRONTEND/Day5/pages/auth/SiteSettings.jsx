import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/sitesettings.css';

function SiteSettings({ setSite }) {
    const [siteSettingsData, setSiteData] = useState({
        aboutUs: [
            { heading: "About Us", description: "We are dedicated to providing financial solutions for farmers to promote sustainable agriculture and rural development. Our mission is to empower farmers with access to credit, insurance, and other financial services, helping them improve their livelihoods and contribute to food security. At Agriculture Finance, we believe in the importance of supporting smallholder farmers and fostering innovation in the agricultural sector. Through our partnerships and programs, we strive to create opportunities for farmers to thrive and build resilient communities." }
        ],
        contactUs: "Get in Touch with Agriculture Finance Have questions, need assistance, or just want to share your excitement about your upcoming nautical adventure? We're here to help! Contact Agriculture Finance through the following channels: Customer Support Our dedicated customer support team is available around the clock to ensure your journey with Agriculture Finance is smooth sailing. Whether you have inquiries about a specific service, need assistance navigating our platform, or just want some personalized recommendations, we're here for you.",
    });

    return (
        <div className="site-settings-outer">
            <Link to="/MYAPP/admindashboard" className="close-link">Close</Link>
            <div className="site-setting-section">
                <h1 className="site-setting-label">About Us</h1>
                {siteSettingsData.aboutUs.map((m, index) =>
                    <div key={index}>
                        <label className="site-settings-label">Heading</label>
                        <input type="text" className="site-settings-heading-input-tag" value={m.heading} readOnly />
                        <label className="site-settings-label">Description</label>
                        <textarea className="site-settings-textarea" value={m.description} readOnly />
                    </div>
                )}
            </div>

            <div className="site-setting-section">
                <h1 className="site-setting-label">Contact Us</h1>
                <textarea className="site-settings-textarea" value={siteSettingsData.contactUs} readOnly />
            </div>

            <button className="site-settings-apply" disabled>Apply</button>
        </div>
    );
}

export default SiteSettings;
