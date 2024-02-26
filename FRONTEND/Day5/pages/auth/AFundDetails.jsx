import React from 'react';

const fundsData = [
  { id: 1, name: 'Farmers Fund', amount: '$10,000', duration: '1 year', details: 'Provides financial support and resources to small-scale and traditional farmers for sustainable agricultural practices.' },
  { id: 2, name: 'AgriTech Growth Fund', amount: '$20,000', duration: '2 years', details: 'Invests in innovative agricultural technologies and startups to drive growth and efficiency in the agricultural sector.' },
  { id: 3, name: 'Sustainable Agriculture Fund', amount: '$15,000', duration: '1.5 years', details: 'Focuses on funding projects and initiatives that promote sustainable farming practices, reduce environmental impact, and ensure long-term viability of agriculture.' },
  { id: 4, name: 'GreenHarvest Impact Fund', amount: '$35,000', duration: '3 years', details: 'Invests in initiatives aimed at reducing carbon footprint, promoting biodiversity, and mitigating climate change effects in agriculture.' },
  { id: 5, name: 'Agri Innovative Tech Fund', amount: '$25,000', duration: '2.5 years', details: 'Supports research and development in agricultural technology innovations such as precision farming, IoT, and AI-driven solutions.' },
  { id: 6, name: 'Pure Harvest Organic Fund', amount: '$20,000', duration: '2.5 years', details: 'Invests in organic farming projects and enterprises that produce high-quality, chemical-free agricultural products.' },
  { id: 7, name: 'GrowTogether Community Fund', amount: '$25,000', duration: '1.5 years', details: 'Supports community-based agricultural projects, cooperatives, and initiatives aimed at empowering local farmers and rural communities.' },
  { id: 8, name: 'LocalHarvest Impact Fund', amount: '$10,000', duration: '1 year', details: 'Invests in local agriculture, supporting small farmers and promoting local food production and consumption.' },
  { id: 9, name: 'AgriCommunities Fund', amount: '$30,000', duration: '3 years', details: 'Funds projects that strengthen agricultural communities, improve access to resources, and enhance livelihood opportunities for farmers.' },
  { id: 10, name: 'RanchRaise Cattle Fund', amount: '$35,000', duration: '2 years', details: 'Supports cattle farming operations, ranches, and livestock management practices that prioritize animal welfare, sustainability, and ethical farming.' }
];

const AFundDetails = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {fundsData.map((fund) => (
        <div key={fund.id} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3 style={{ marginBottom: '10px' }}>{fund.name}</h3>
          <p style={{ margin: '0' }}>Amount: {fund.amount}</p>
          <p style={{ margin: '0' }}>Duration: {fund.duration}</p>
          <p style={{ margin: '0' }}>{fund.details}</p>
        </div>
      ))}
    </div>
  );
};

export default AFundDetails;
