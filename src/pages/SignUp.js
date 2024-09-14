import React , { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const SignUp = () => {
  useEffect(
    ()=>{
      window.scrollTo(0,0)
    }
  )
  return (
    <div className="login-h w-full header">
      <div className="max-w-[1380px] mx-auto">
        <div className="mx-auto max-w-[400px] sm:max-w-[500px] md:max-w-[700px] p-[20px]">
          <form className="flex flex-col min-h-[450px] justify-evenly py-[30px] login-form-bg opacity-[90%] rounded-lg my-[30px]">
            <h1 className="text-white md:text-3xl text-2xl text-xl mx-auto my-[10px]">SignUp</h1>
            <input
              type="text"
              placeholder=" Your Name"
              className="login-input placeholder-white text-white bg-transparent px-[20px] py-[5px] my-[10px] w-[75%] mx-auto outline-none rounded-md border-t-[2px] border-b-[2px]"
            />
            <input
              type="email"
              placeholder=" Your E-mail "
              className="login-input placeholder-white text-white bg-transparent px-[20px] py-[5px] my-[10px] w-[75%] mx-auto outline-none rounded-md border-t-[2px] border-b-[2px]"
            />
            <input
              type="text"
              placeholder=" Your Password"
              className="login-input placeholder-white text-white bg-transparent px-[20px] py-[5px] my-[10px] w-[75%] mx-auto outline-none rounded-md border-t-[2px] border-b-[2px]"
            />
            <button className="login-btn text-white md:text-xl w-[85px] rounded-md border-l-0 border-r-0 mx-auto my-[20px]  bg-transparent border-[3px] hover:scale-105 duration-500">
              Signup
            </button>
            <div className="flex justify-center px-[20px]">
              <h3 className="text-white text-lg md:text-xl mx-[10px]">have an account ?</h3>
              <Link to="/login" className="text-white text-lg md:text-xl animate-bounce">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
