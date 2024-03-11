import React from 'react';
import './Services.css';
import Comnav from './Comnav';
import Footer from './Footer';
const Service = () => {
  return (
    <div>               <div className='nnn'><Comnav/></div>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Agriculture Fund Portal</title>
      <div className="wrapper">
        <h1>Agriculture Fund Portal</h1>
        <p>Explore our range of agriculture funds tailored to meet the financial needs of farmers and agribusinesses.</p>
        <div className="content-box">
          <div className="card">
            <i className="bx bx-money bx-md" />
            <h2>Farmers Fund</h2>
            <p>A dedicated fund to support small-scale and family-owned farms with financial assistance.</p>
          </div>
          <div className="card">
            <i className="bx bx-plant bx-md" />
            <h2>Sustainable Agriculture Fund</h2>
            <p>Invest in sustainable agriculture practices and projects for long-term environmental and economic benefits.</p>
          </div>
          <div className="card">
            <i className="bx bx-growth bx-md" />
            <h2>AgriTech Innovation Fund</h2>
            <p>Fund innovative agricultural technology solutions to enhance productivity and efficiency in farming.</p>
          </div>
          <div className="card">
            <i className="bx bx-line-chart bx-md" />
            <h2>Agricultural Expansion Fund</h2>
            <p>Support agricultural expansion initiatives, such as land acquisition and infrastructure development.</p>
          </div>
          <div className="card">
            <i className="bx bx-dollar bx-md" />
            <h2>Agribusiness Investment Fund</h2>
            <p>Invest in agribusiness ventures and startups to foster growth and innovation in the agricultural sector.</p>
          </div>
          <div className="card">
            <i className="bx bx-shield bx-md" />
            <h2>Risk Mitigation Fund</h2>
            <p>Provide insurance and risk management solutions to protect farmers and agribusinesses from unforeseen losses.</p>
          </div>
        </div>
      </div>
      <div>
      <Footer/>
    </div>
    </div>
  );
};

export default Service;
