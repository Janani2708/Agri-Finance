import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Aprofile.css';

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

function AdminDashboard() {
    const [showFundDetails, setShowFundDetails] = useState(false);

    const handleToggleFundDetails = () => {
      setShowFundDetails(!showFundDetails);
    };
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <UserProfile />
        <Statistics onToggleFundDetails={handleToggleFundDetails} />
        {showFundDetails && <FundDetails />}
        
        <br/>
        <br/>
        
        {/* Add other components as needed */}
      </div>
    </div>
  );
}

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/Afunddetail" className="menu-item">Funds</Link>
    {/* <Link to="/users" className="menu-item">Users</Link> */}
    <Link to="/" className="menu-item">Logout</Link>
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
        <div className="avatar">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYztvd-H22I082XiZ7uwTwUs8ZurFkRdsy9l_N3uQZg&s" alt="Admin Avatar" />
        </div>
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
const Statistics = ({ onToggleFundDetails }) => (
    <div className="statistics">
      <div className="stat-item"><button onClick={onToggleFundDetails}>Total Funds</button></div>
      <div className="stat-item"><Link to="/Appliedstatus">Total Users</Link></div>
    </div>
  );
  const FundDetails = () => (
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

// const Statistics = () => (
//   <div className="statistics">
//     <div className="stat-item"><Link to="/Afunddetail">Total Funds</Link></div>
//     <div className="stat-item"><Link to="/Status">Total Users</Link></div>
//     {/* <div className="stat-item"><Link to="/today-bookings">Today Booking: 25</Link></div> */}
//   </div>
// );

// const AddFunds = () => {
//   const [fundId, setFundId] = useState('');
//   const [fundName, setFundName] = useState('');
//   const [details, setDetails] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleAction = () => {
//     if (!fundId || !fundName || !details) {
//       setErrorMessage('Please fill in all details');
//       return;
//     }

//     // Perform action here, e.g., add fund
//     console.log('Action performed:', { fundId, fundName, details });

//     // Reset fields and error message
//     setFundId('');
//     setFundName('');
//     setDetails('');
//     setErrorMessage('');
//   };

//   return (
//     <div className="add-funds">
//       <div className="head">
//         <h2>ADD FUNDS</h2><br/>
//       </div>
//       <input
//         type="text"
//         placeholder="Fund id"
//         value={fundId}
//         onChange={(e) => setFundId(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Fund name"
//         value={fundName}
//         onChange={(e) => setFundName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Details"
//         value={details}
//         onChange={(e) => setDetails(e.target.value)}
//       />
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <button onClick={handleAction}>Action</button>
//     </div>
//   );
// };
// const DeleteFunds = () => {
//     const [fundId, setFundId] = useState('');
//     const [fundName, setFundName] = useState('');
//     const [details, setDetails] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
  
//     const handleAction = () => {
//       if (!fundId || !fundName || !details) {
//         setErrorMessage('Please fill in all details');
//         return;
//       }
  
//       // Perform action here, e.g., add fund
//       console.log('Action performed:', { fundId, fundName, details });
  
//       // Reset fields and error message
//       setFundId('');
//       setFundName('');
//       setDetails('');
//       setErrorMessage('');
//     };
  
//     return (
//       <div className="add-funds">
//         <div className="head">
//           <h2>DELETE FUNDS </h2><br/>
//         </div>
//         <input
//           type="text"
//           placeholder="Fund id"
//           value={fundId}
//           onChange={(e) => setFundId(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Fund name"
//           value={fundName}
//           onChange={(e) => setFundName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Details"
//           value={details}
//           onChange={(e) => setDetails(e.target.value)}
//         />
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//         <button onClick={handleAction}>Action</button>
//       </div>
//     );
//   };

export default AdminDashboard;
