
import '../../assets/css/home.css';
import { Link } from 'react-router-dom';
import Service from './Service'; // Import the Service component
import image from '../../assets/images/WheatAgri.jpg';

const Home = () => {
  return (
    <div className="back" style={{ backgroundImage: `url(${image})`}}>
      <div className="content" style={{ position: 'relative', zIndex: 1 ,paddingTop:'90px'}}>
        <h1 className='head' style={{paddingTop:'-90px'}}>
          INVESTING IN THE  &amp; <br />
          <span>FUTURE</span> <br />
          OF AGRICULTURE
        </h1>
        <p className="par" style={{ color: 'white', fontFamily: 'Times New Roman, Times, serif' }}>
        Financing solutions to enable smart agriculture and to help automation</p>
        <button className="cn">
          <Link to="/MYAPP/user/loandetails">APPLY NOW</Link>
        </button>
      </div>
      {/* Uncomment below to include the Service component */}
       <Service /> 
    </div>
  );
};

export default Home;
