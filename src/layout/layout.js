import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Order from "../pages/Order";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Services from "../pages/Services";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Details from "../components/Details";
import Meals from "../pages/Meals";


const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/Resturant" element={<Home />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/meal/:mealID" element={<Details />}></Route>
        <Route path="/meals/:category" element={<Meals />}></Route>
        <Route path="/services/:name" element={<Services/>}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
