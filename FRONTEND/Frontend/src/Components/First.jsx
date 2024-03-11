// import React from 'react'
import './First.css'
import { Link } from 'react-router-dom'
// import Signup from './Signup'
// import AdminLog from './Adminlog'

function First() {
  return (
    
        <div className='firstimage'>
           <center> <div className="con">
            <br></br>
        <center><div className='firsthead' >AGROFINANCE </div></center>
        <div ><img className='usericon'src='https://www.pinclipart.com/picdir/big/487-4877720_user-svg-icon-free-transparent-background-registered-user.png'></img>
        {/* <div className='usericon'><img src={(userlogo)}></img></div> */}
        <img className='adminicon'src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/3219428/admin-icon-md.png'></img></div>


        <button className='firstbutt'type="submit"><Link to={"/Signup"}>USER</Link></button>
        <button className='secondbutt'type="submit"><Link to={"/Adminlog"}>ADMIN</Link></button>
        </div></center>
</div>
    // </div>
  )
}

export default First