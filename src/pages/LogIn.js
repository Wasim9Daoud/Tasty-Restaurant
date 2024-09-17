import React ,{ useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const LogIn = () => {
  useEffect(
    ()=>{
      window.scrollTo(0,0)
    }
   )
  return (
    // login-page
    <div className="header w-full login-h">
      <div className=" max-w-[1100px] mx-auto ">
        <div className="mx-auto  min-h-[500px]  max-w-[400px] sm:max-w-[500px] md:max-w-[700px] p-[20px]">
          <form className="flex min-h-[450px] flex-col justify-center login-form-bg opacity-[90%] rounded-lg my-[30px]">
            <h1 className=" text-white md:text-3xl text-2xl mx-auto mb-[30px]">Login</h1>
            <input
              type="text"
              placeholder=" Your Name"
              className="login-input placeholder-white text-white bg-transparent px-[20px] py-[5px] my-[10px] w-[75%] mx-auto outline-none rounded-md border-t-[2px] border-b-[2px]"
            />
            <input
              type="text"
              placeholder=" Your Password"
              className="login-input placeholder-white text-white bg-transparent px-[20px] py-[5px] my-[10px] w-[75%] mx-auto outline-none rounded-md border-t-[2px] border-b-[2px]"
            />
            <button className="text-white md:text-lg login-btn w-[85px] rounded-md border-l-0 border-r-0 mx-auto my-[20px]  bg-transparent border-[3px] hover:scale-105 duration-500">
              LogIn
            </button>
            <div className="flex justify-center px-[20px]">
              <h3 className="text-white mx-[10px] md:text-lg">haven't an account ?</h3>
              <Link to="/signup" className="text-white md:text-lg animate-bounce ">
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
