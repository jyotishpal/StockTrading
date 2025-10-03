import { useState } from 'react';
import axios from 'axios';
import './sign.css'
function SignIn() {
  const[signInData,setSignInData]=useState({
    email:"",
    password:""
  })
 const handleSubmit=async(e)=>{
  e.preventDefault();
  console.log("Login data",signInData);
  try{
    const res= await axios.post("https://stocktrading-backend.onrender.com/login",{
      email:signInData.email,
      password:signInData.password,
      
    })
    if(res.data.success){
        alert("Login successfull!")
         // full redirect to dashboard project
      window.location.href = "https://stocktrading-dashboard.onrender.com"; // dashboard URL
    }else{
      alert(res.data.message||"Invalid Credentials")
    }
  setSignInData({
    email:"",
    password:""
  })}
  catch (err) {
      console.error("Login failed:", err);
      alert("Something went wrong, please try again!");
    }
 }

  return (
    <div className="signin-container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="mb-4 text-center text-primary">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={(e)=>{setSignInData({...signInData,email:e.target.value})}}
              value={signInData.email}
              required
            />
          </div>
          <div className="mb-4 text-start">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={(e)=>{setSignInData({...signInData,password:e.target.value})}}
              value={signInData.password}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

