import PropTypes from 'prop-types';
import Navbar from '../../components/ui/Navbar';

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
      <footer></footer>
    </div>
  );
};

UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;
