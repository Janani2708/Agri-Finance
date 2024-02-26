import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/admindashboard.css';

function AdminDashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <UserProfile />
        <Statistics />
        <AddFunds />
        <br/>
        <br/>
        <DeleteFunds/>
        {/* Add other components as needed */}
      </div>
    </div>
  );
}

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/MYAPP/sitesettings" className="menu-item">Site Settings</Link>
    {/* <Link to="/users" className="menu-item">Users</Link> */}
    <Link to="/MYAPP/user/adminuser" className="menu-item">Logout</Link>
  </div>
);

const UserProfile = () => {
    const [name, setName] = useState('Admin');
    const [userId, setUserId] = useState('12234');
    const [email, setEmail] = useState('admin1234@gmail.com');
    const [phoneNo, setPhoneNo] = useState('9237864733');
    const [isEditMode, setIsEditMode] = useState(false);
  
    const handleApplyChanges = () => {
      // Here you can perform actions to save changes, such as making an API call
      console.log('Changes applied:', { name, userId, email, phoneNo });
  
      // After applying changes, exit edit mode
      setIsEditMode(false);
    };
  
    return (
      <div className="user-profile">
        <div className="avatar"></div>
        {isEditMode ? (
          <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} /><br/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
            <input type="text" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} /><br/>
            <button onClick={handleApplyChanges}>Apply</button>
          </>
        ) : (
          <>
            <p>Name: {name}</p>
            <p>UserId: {userId}</p>
            <p>Email: {email}</p>
            <p>PhoneNo: {phoneNo}</p>
            <button onClick={() => setIsEditMode(true)}>Edit</button>
          </>
        )}
      </div>
    );
        };

const Statistics = () => (
  <div className="statistics">
    <div className="stat-item"><Link to="/MYAPP/afunddetails">Total Funds: 10</Link></div>
    <div className="stat-item"><Link to="/total-users">Total Users: 0</Link></div>
    {/* <div className="stat-item"><Link to="/today-bookings">Today Booking: 25</Link></div> */}
  </div>
);

const AddFunds = () => {
  const [fundId, setFundId] = useState('');
  const [fundName, setFundName] = useState('');
  const [details, setDetails] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAction = () => {
    if (!fundId || !fundName || !details) {
      setErrorMessage('Please fill in all details');
      return;
    }

    // Perform action here, e.g., add fund
    console.log('Action performed:', { fundId, fundName, details });

    // Reset fields and error message
    setFundId('');
    setFundName('');
    setDetails('');
    setErrorMessage('');
  };

  return (
    <div className="add-funds">
      <div className="head">
        <h2>ADD FUNDS</h2><br/>
      </div>
      <input
        type="text"
        placeholder="Fund id"
        value={fundId}
        onChange={(e) => setFundId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Fund name"
        value={fundName}
        onChange={(e) => setFundName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button onClick={handleAction}>Action</button>
    </div>
  );
};
const DeleteFunds = () => {
    const [fundId, setFundId] = useState('');
    const [fundName, setFundName] = useState('');
    const [details, setDetails] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleAction = () => {
      if (!fundId || !fundName || !details) {
        setErrorMessage('Please fill in all details');
        return;
      }
  
      // Perform action here, e.g., add fund
      console.log('Action performed:', { fundId, fundName, details });
  
      // Reset fields and error message
      setFundId('');
      setFundName('');
      setDetails('');
      setErrorMessage('');
    };
  
    return (
      <div className="add-funds">
        <div className="head">
          <h2>DELETE FUNDS </h2><br/>
        </div>
        <input
          type="text"
          placeholder="Fund id"
          value={fundId}
          onChange={(e) => setFundId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fund name"
          value={fundName}
          onChange={(e) => setFundName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button onClick={handleAction}>Action</button>
      </div>
    );
  };

export default AdminDashboard;
