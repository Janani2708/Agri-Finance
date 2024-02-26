import PropTypes from 'prop-types';
import Navbar from '../../components/ui/Navbar';
import Footer from '../../components/ui/Footer';
import Service from './Service';

const UserLayout = ({ children }) => {
  return (
    <div className="user_container">

      <header>
        <Navbar />
      </header>
      <main>

        {/* home about contact */}
       

        {children}
        
        
      </main>
      <div>
        <Footer/>
      </div>
     
    </div>
  );
};

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;
