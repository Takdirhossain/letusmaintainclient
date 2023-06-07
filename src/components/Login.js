import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/dashboard.css"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../featuers/userSlice";
import Swal from "sweetalert2";
const Login = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handalesubmit = (e) => {
    e.preventDefault()
    const rafferid = e.target.rafferid.value 
    const data = {
      partnerId: rafferid
    }
   try{
    fetch("http://localhost:5000/auth/partnerlogin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
     })
     .then(res=>res.json())
     .then(data => {
     
      dispatch(login(data))
     if(data){
      navigate('/dashboard')
     }else{

       setError(true)
     }
    })
   } catch(err){
    
    console.log("This is errror", err);
   }
  };
  if(error){
    console.log(error);
    Swal.fire(
      'Something Wrong?',
      'Please Enter Valid Info?',
      'question'
    )
  }
  useEffect(() => {
    // If user is already logged in, redirect to the desired page
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);
  return (
    <div class="bg-gradient-to-tr from-green-300 to-green-600 h-screen w-full flex justify-center items-center">
    <div class="bg-green-600 w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
      <div class="w-full md:w-1/2  md:flex flex-col justify-center items-center text-white">
        <h1 class="text-3xl">Hello</h1>
        <p class="text-5xl font-extrabold">Welcome !</p>
       
      </div>
      <div class="bg-white w-full md:w-1/2 flex flex-col items-center py-32 px-8">
        <h3 class="text-3xl font-bold text-green-600 mb-4">
        Channel Partner Login 
        </h3>
        <form onSubmit={handalesubmit} class="w-full flex flex-col justify-center">
          <label className="pb-2">Name (not mendatory)</label>
          <div class="mb-4">
            <input type="text" placeholder="Name" class="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-green-600" />
          </div>
          <label className="pb-2">Six Digit Referral  id</label>
          <div class="mb-4">
            <input type="text" placeholder="Six Digit Referral id" name="rafferid" required class="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-green-600" />
          </div>
          <button class="bg-green-600 font-bold text-white focus:outline-none rounded p-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;
