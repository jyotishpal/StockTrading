import { Link ,useNavigate } from "react-router-dom";
import './sign.css'
import { useState } from "react";
import axios from "axios";

function SignUp() {
    const [formData,setFormData,]=useState({
        name:"",
        email:"",
        password:""
    });
   
   const navigate=useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
     // yaha API call kar sakte ho
     try{
     axios.post("https://stocktrading-backend.onrender.com/newUser",{
        name:formData.name,
        email:formData.email,
        password:formData.password
        
    })
    //redirect to login page
    navigate("/signin")

    //when i will be click on the submit then it become blank
    
    setFormData({
         name:"",
        email:"",
        password:""
    });
  }catch (err) {
      console.error("Signup failed:", err);
      alert("Signup failed. Please try again!");
    }
   
  };
  return (
    <div className="signup-container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "450px", width: "100%" }}>
        <h2 className="mb-4 text-center text-success">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="name" className="form-label fw-semibold">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              value={formData.name}
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value})}
              value={formData.email}
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
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              value={formData.password}
              required
            />
          </div>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-decoration-none fw-bold text-primary">
              Sign In
            </Link>
          </p>

          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
