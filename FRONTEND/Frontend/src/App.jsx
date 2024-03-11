
import Signup from './Components/Signup'
// import Login from './Components/login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
// import Navv from "./Components/Home"
import Loanreg from './Components/Loanreg'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Adminlog from './Components/Adminlog'
import Apply from './Components/Apply'
import Formsub from './Components/Formsub'
import First from './Components/First'
import Status from './Components/Status'
import Appliedstatus from './Components/Appliedstatus'
import Profile from './Components/Profile'
import Remove from './Components/Remove'
import Login from './Components/Login'
import Footer from './Components/Footer'
import About from './Components/About'
import Service from './Components/Services'
import Privacy from './Components/privacy'
import AdminDashboard from './Components/Aprofile'
import UserProfile from './Components/UserProfile'
import AFundDetails from './Components/AFundDetails'
// import ApplyForm from './Components/Applyform'
// import Adminsign from './Components/Adminsign'



function App() {

  return (
    <>
    {/* <div><First/> </div> */}
      <BrowserRouter>
      <div>
         <Routes>
         <Route path='/About' element={<About/>}></Route> 
         {/* <Route path='/Contact' element={<Signup/>}></Route>  */}
         <Route path='/Privacy' element={<Privacy/>}></Route> 
         <Route path='/Services' element={<Service/>}></Route> 
         <Route path='/Aprofile' element={<AdminDashboard/>}></Route> 
         <Route path='/Uprofile' element={<UserProfile/>}></Route> 
         <Route path='/Afunddetail' element={<AFundDetails/>}></Route> 

          <Route path='/' element={<First/>}></Route>
          <Route path='/Signup' element={<Signup/>}></Route> 
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Loanreg' element={<Loanreg/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>  
          <Route path='/Apply' element={<Apply/>}></Route>   
          <Route path='/Status' element={<Status/>}></Route>   
          <Route path='/Appliedstatus' element={<Appliedstatus/>}></Route>   
          <Route path='/Update' element={<Profile/>}></Route>   
          {/* <Route path='/Applyform' element={<ApplyForm/>}></Route>    */}
          <Route path='/Remove' element={<Remove/>}></Route>   
          <Route path='/Footer' element={<Footer/>}></Route>
           <Route path='/Formsub' element={<Formsub/>}></Route>
          <Route path='/Adminlog' element={<Adminlog/>}></Route>
         </Routes>
       </div> 
     </BrowserRouter> 
    </>
  )
}

export default App
