import { useContext, useState } from "react";

import {AuthContext} from "../context/Auth/AuthProvider"
import { CircularProgress, Typography } from "@mui/joy";
import AuthPage from "../component/Auth";

function LoginSignup() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {signin, signup, isLoading, isError, errorMessage} = useContext(AuthContext)


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const url = isSignup ? "http://localhost:5000/signup" : "http://localhost:5000/login";

    // try {
    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await response.json();
    //   if (data.status === "success") {
    //     alert(data.message);
    //     navigate("/detection");  // Redirect to detection page after login/signup
    //   } else {
    //     alert(data.message);
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }

  if(!isSignup) {
    signin(formData.email, formData.password, true)
  } else {
    signup(formData.name, "", formData.email, formData.password)
  }
  };

  return (
    // <div className="container">
    //   <h2>{isSignup ? "Signup Form" : "Login Form"}</h2>
    //   <div className="toggle">
    //     <button onClick={() => setIsSignup(false)} className={!isSignup ? "active" : ""}>Login</button>
    //     <button onClick={() => setIsSignup(true)} className={isSignup ? "active" : ""}>Signup</button>
    //   </div>

    //   <form onSubmit={handleSubmit}>
    //     {isSignup && (
    //       <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
    //     )}
    //     <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
    //     <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        
    //     {!isLoading && <button type="submit">{isSignup ? "Signup" : "Login"}</button>}
    //     {isLoading && <CircularProgress/>}
    //     {isError && <Typography color="danger" >{errorMessage}</Typography>}
    //   </form>
    // </div>
    <AuthPage/>
  );
}

export default LoginSignup;
