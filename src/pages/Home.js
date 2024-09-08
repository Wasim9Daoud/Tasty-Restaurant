import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="md:home home-mob">
        <div className="h-[100%] mx-auto max-w-[1380px]">
              {/* button container */}
              <div className="flex flex-col pt-[135px] justify-center items-center w-[100%] h-[50%] ">
                <h1 className="text-xl md:text-4xl text-white">welcome to <span className="font-bold bg-orange-600 rounded-lg duration-500 px-[5px] text-orange-800 mr-[10px]">Tasty</span>Restaurant</h1>
                <h1 className="text-xl md:text-4xl text-white">where healthy & delicious Food &</h1>
                <h1 className="text-xl md:text-4xl text-white ">the best Services and Fast Delivery.</h1>
                <Link to="/services/:types" className="animate-pulse md:ml-[5px]">
                  <button className=" text-white text-[15px] md:text-[20px] px-[10px] max-w-[150px] border-[1px] rounded-md md:py-[7px]  text-xl border-orange-600 bg-orange-700 hover:border-none hover:scale-105 duration-500 mt-[30px]">
                    At Your Service
                  </button>
                </Link>
              </div>
            </div>
      </div>
    </>
  );
};

export default Home;
