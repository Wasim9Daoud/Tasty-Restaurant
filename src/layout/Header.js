import React, { useState } from "react";
import "../styles/header.css";
import { FaRegUser , FaTruck } from "react-icons/fa";
import { RiArrowUpDownLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const [barVal, setBarVal] = useState(false);
  const orderMeals = useSelector((state) => state.order);
  const Qty = orderMeals.reduce((acc, meal) => {
    return (acc += meal.quantity);
  }, 0);

  const navLinks = [
    {
      id: 1,
      title: "HOME",
      path: "/",
    },
    {
      id: 6,
      title: "SERVICES",
      path: "/services",
    },
  ];

  return (
    <header className="sticky z-[10000] top-0 header md:px-4">
      <nav className="mx-auto flex  pl-[5px] items-center justify-between bg-transparent h-[70px] max-w-[1380px] ">
        <div className="max-h-[60px] max-w-[175px] flex items-center gap-4">
          <div className="max-w-[60px] md:max-w-[70px] max-h-[60px]">
            <Link to="/">
              <img className="rounded-xl min-w-[60px]" src="https://img.freepik.com/premium-vector/food-logo-with-smile-spoon-fork-delicious-food-design-illustration-tongue-saliva_207371-61.jpg?w=740" alt="logo" />
            </Link>
          </div>
          <h1 className="tasty text-[25px] md:text-[30px]">Tasty</h1>
        </div>

        <div className="hidden md:flex ">
          <ul className="">
            {navLinks.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={(navClass) =>
                  navClass.isActive ? "active px-[15px] md:text-[25px]" : "px-[15px] md:text-[25px]"
                }
              >
                {item.title}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center ">
          <RiArrowUpDownLine
            onClick={() => {
              setBarVal(!barVal);
            }}
            className="text-white mr-2 text-[23px] cursor-pointer md:hidden hover:scale-125 duration-500"
          />
          <Link to="/order" className="relative">
            <span className="badge bg-orange-800">{Qty}</span>
            <FaTruck className="text-orange-800 text-[25px]" />
          </Link>
          <Link to="/login">
            <FaRegUser className="text-[20px] text-white mr-1 ml-2 cursor-pointer " />
          </Link>
        </div>
      </nav>

      {barVal ? (
        <div className="w-full navBar-bg  md:hidden ">
          <ul className="mob-menu py-[30px] flex flex-col items-center justify-center gap-[25px]">
            <li onClick={()=>setBarVal(false)} className="hover:scale-[1.5] duration-500">
              <Link to="/">Home</Link>
            </li>
            <li onClick={()=>setBarVal(false)} className="hover:scale-[1.5] duration-500">
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="w-full md:hidden ">
          <ul className="move-up navBar-bg py-[30px] flex flex-col items-center gap-[25px]">
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/food">Home</Link>
            </li>
            <li className="hover:scale-[1.5] duration-500">
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
