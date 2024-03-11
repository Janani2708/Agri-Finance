import { useEffect, useState } from 'react';
import axios from 'axios';
import Comnav from './Comnav';
import logo from '../assets/AgriHome.jpg';
import './Home.css'
// import Footer from './Footer';

const Home = () => {
  const [ setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [setData]);

  return (
    <div>
    <div className="content-wrapper">
      <Comnav />
      <img className="img1" src={logo} alt="Logo" />
      {/* <div>
    <Footer /></div> */}
    </div>
    
  </div>
  );
};

export default Home;
