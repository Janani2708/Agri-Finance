import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
// import Home from './Home';
import img from "../assets/tractor.jpg"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  }

  const handlePwd = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        email,
        password
      });
  
      if (response.status === 200) {
        console.log('Login successful');
        console.log(response.data); 
        localStorage.setItem("token",response.data.token)
        // You may want to inspect the response data
  
        // Navigate to the desired page upon successful login
        navigate('/Home');
      } else {
        console.log('Login unsuccessful');
        // Handle other status codes or error conditions if needed
      }
    } catch (error) {
      console.error('Login failed', error);
      // Handle network errors or other exceptions
    }
  };
  
  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.email) {
  //     errors.username = "Email is Required";
  //     setIsSubmit(false);
  //   } else {
  //     setIsSubmit(true);
  //   }

  //   if (!values.password) {
  //     errors.password = "Password is Required";
  //     setIsSubmit(false);
  //   }  else {
  //     setIsSubmit(true);
  //   }

  //   return errors;
  // }




  
  return (
    <div>
      <img src={img} className='bgimg' alt="background"></img>

      <form className='logfor' onSubmit={handleSubmit}>
        <h3><b>Login Here</b></h3>

        <label className='loginl'>Email</label>
        <input className='input8'
          type="email"
          placeholder="Enter your Email"
          
          value={email}
          onChange={handleName}
          required id="username"
          
        />
        {/* <p>{formErrors.username}</p> */}
        <br />

        <label className='loginl'>Password</label>
        <input className='input8'
          type="password"
          placeholder="Enter your Password"
          
          value={password}
          onChange={handlePwd}
          required id="password"
        />
                {/* <p>{formErrors.password}</p> */}

        <br />

        <center><button className='loggbutttt'type="submit">Login</button></center>
        <br />
        <center><p>Create an account !<Link to={"/Signup"}>  Sign up</Link></p></center>
      </form>
    </div>
  );
}

export default Login;

    //  const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [formErrors,setFormErrors]=useState({});
    // const [isSubmit,setIsSubmit]=useState(false);
  
    // const navigate=useNavigate();
    //   const handleName=(event)=>{
    //       event.preventDefault();
    //       setEmail(event.target.value);
    //   }
    //   const handlePwd=(event)=>{
    //       event.preventDefault();
    //       setPassword(event.target.value);
    //   }
    //   const handleSubmit=async(event)=>{
    //       event.preventDefault();
    //       setFormErrors(validate({email,password}));
    //       if(isSubmit===true){
    //           try{
    //             console.log("Login Successful");
    //             // window.location.href = "/Home";
    //               // navigate('/Signup');
    //           }catch(error){
    //               console.error('Error: ',error);
    //           }
    //       }
    //   }
  
      
  
    //   const validate=(values)=>{
    //       const errors={};
    //       const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 
  
    //       if(!values.email){
    //       errors.username="Email is Required";
    //       setIsSubmit(false);
    //       }else{
    //           setIsSubmit(true);
    //       }
    //       if(!values.password){
    //       errors.password="Password is Required";
    //       setIsSubmit(false);
    //       }
    //       else if(!preg.test(values.password)){
    //       errors.password="Invalid password";
    //       setIsSubmit(false);
    //       }else{
    //           setIsSubmit(true);
    //       }
    //       return errors;
    //   }
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  
  //   const handleUsernameChange = (e) => {
  //     setUsername(e.target.value);
  //   };
  
  //   const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //   };
  
  //   const handleSubmit=async(e)=>{
  //    event.preventDefault();
  //    setFormErrors(validate({email,password}));
  //    if(isSubmit===true){
  //        try{
  //          console.log("Login Successful");
  //          window.location.href = "/nav";
  //            // navigate('/Signup');
  //        }catch(error){
  //            console.error('Error: ',error);
  //        }
  //    }
  // }
  
  
  
  // const validate=(values)=>{
  //    const errors={};
  //    const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 
  
  //    if(!values.email){
  //    errors.username="Email is Required";
  //    setIsSubmit(false);
  //    }else{
  //        setIsSubmit(true);
  //    }
  //    if(!values.password){
  //    errors.password="Password is Required";
  //    setIsSubmit(false);
  //    }
  //    else if(!preg.test(values.password)){
  //    errors.password="Invalid password";
  //    setIsSubmit(false);
  //    }else{
  //        setIsSubmit(true);
  //    }
  //    return errors;
  // }