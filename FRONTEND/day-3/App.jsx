import {Routes,Route,Navigate} from "react-router-dom"
import {lazy} from "react"

import LazyLayout from "./components/ui/LazyLayout"
import UserProfile from "./pages/user/userProfile"
import UserLayout from "./pages/user/UserLayout"
import FundDetails from "./pages/user/funddetails"
import AdminUser from "./pages/user/Adminuser"
import ALogin from "./pages/auth/Alogin"
import AdminDashboard from "./pages/auth/AdminDashboard"
import AFundDetails from "./pages/auth/AFundDetails"
import SiteSettings from "./pages/auth/SiteSettings"
import Loandetails from "./pages/user/Loandetails"
const LazyLogin = lazy(() => import ("./pages/auth/Login"))
const LazyRegister = lazy(() => import ("./pages/auth/Register"))
const LazyHome = lazy(() => import ("./pages/user/Home"))
const LazyAbout = lazy(() => import ("./pages/user/About"))
const LazyDashboard = lazy(() => import ("./pages/admin/Dashboard"))
const LazyUserInfo = lazy(() => import ("./pages/admin/UserInfo"))
const LazyContact = lazy(() => import ("./pages/user/Contact"))
const LazyAppointment = lazy(() => import ("./pages/user/Appointment"))
const LazyService =lazy(()=> import("./pages/user/Service"))


const UserRoutes =() => {
  return (
    <UserLayout>
     <Routes>
     <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
     <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/>
     <Route path="/contact" element={<LazyLayout component={LazyContact}/>}/>
     <Route path="/appointment" element={<LazyLayout component={LazyAppointment}/>}/>
     <Route path="/service" element={<LazyLayout component={LazyService}/>}/>
     <Route path="/loandetails" element={<Loandetails/>}></Route>

     <Route path="/profile" element={<UserProfile/>}></Route>
     <Route path="/funddetails" element={<FundDetails/>}></Route>
     <Route path='/adminuser' element={<AdminUser/>}></Route>

     </Routes>
     </UserLayout>
  )
}


const AdminRoutes =() => {
  return(
    <Routes>
      <Route path="/dashboard" element={<LazyLayout component={LazyDashboard}/>}/>
      <Route path="/dashboard" element={<LazyLayout component={LazyUserInfo}/>}/>
    </Routes>
  )
}
function App() {


  return (
 <Routes>
    <Route path="/" element={<Navigate to="/MYAPP/user/home"/>} />
    <Route path="/MYAPP/login" element={<LazyLayout component={LazyLogin} />} />
    <Route path="/MYAPP/register" element={<LazyLayout component={LazyRegister} />} />
    <Route path='/MYAPP/alogin' element={<ALogin/>}></Route>
    <Route path='/MYAPP/admindashboard' element={<AdminDashboard/>}></Route>
    <Route path='/MYAPP/afunddetails' element={<AFundDetails/>}></Route>

    <Route path='/MYAPP/sitesettings' element={<SiteSettings/>}></Route>

    <Route path="/MYAPP/user/*" element={<UserRoutes />}/>
   <Route path="/MYAPP/admin/*" element={<AdminRoutes />}/>

 </Routes>
  )
}

export default App;
