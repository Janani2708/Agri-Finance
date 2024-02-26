import React from 'react';
import { useParams } from 'react-router-dom';

const FundDetails = () => {
  const { id } = useParams(); // Get the fund ID from the URL params

  // Here you can fetch the details of the fund with the provided ID from your data source
  // For now, I'll just display the ID
  return (
    <div>
      <h1>Fund Details</h1>
      <p>ID: {id}</p>
      <p>afghj</p>
      {/* Add more details of the fund here */}
    </div>
  );
};

export default FundDetails;
