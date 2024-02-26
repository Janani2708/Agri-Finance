import React from 'react';
import { Link } from 'react-router-dom';

const AdminUser = () => {
  return (
    <div style={{ 
      backgroundImage: `url('../../assets/images/AgriGirl.jpg')`, // Replace 'path_to_your_image' with the actual path to your image
      backgroundSize: 'cover',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <div style={{ display: 'flex' }}>
        <Link to="/MYAPP/alogin" style={buttonStyle}>
          <div style={outerCircleStyle}>
            <span style={textStyle}>ADMIN</span>
          </div>
        </Link>
        <Link to="/MYAPP/login" style={buttonStyle}>
          <div style={outerCircleStyle}>
            <span style={textStyle}>USER</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  margin: '0 20px',
};

const outerCircleStyle = {
  width: '150px',
  height: '150px',
  border: '2px solid #000',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const textStyle = {
  fontSize: '18px', // Adjust font size as needed
};

export default AdminUser;
