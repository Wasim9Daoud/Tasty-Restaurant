import React , { useEffect } from "react";
import "../styles/order.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { deleteMeale, clear } from "../RTK/Slices/orderSlice";

import { RiDeleteBin5Line } from "react-icons/ri";

import swal from "sweetalert";

const Order = () => {

  useEffect(
    ()=>{
      window.scrollTo(0,0)
    }
  )

  const orderMeals = useSelector((state) => state.order);
  console.log("orderMeals",orderMeals)
  const dispatch = useDispatch();

  // toatal-price
  const TotalPrice = orderMeals.reduce((acc, meal) => {
    return (acc += (meal.idMeal / 1110).toFixed(2) * meal.quantity);
  }, 0);
  // Qty
  const Qty = orderMeals.reduce((acc, meal) => {
    return (acc += meal.quantity);
  }, 0);

  // SWEET-ALERT CLEAR BUTTON FUNCTION -------------------------
  const swalertFun = () => {
    swal({
      title: "Are you sure ? you are going to cancel this Order !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(clear());
        swal("Your Order has been canceled!", {
          icon: "success",
        });
      } else {
        swal("Your Order is Safe !");
      }
    });
  };
  //---------------------------------------------------
 
  // place-order swl-function
  const placeOrderFun = ()=>{
    swal({
      title : "Please Login to Continue"
    })
  }

  return (
    <div className="order-page w-full">
      <div className="order-section max-w-[1100px] mx-auto">
        <div className=" bg-transparent flex flex-col md:flex-row justify-between items-center py-[50px]">
          {/* the table */}
          <table className="login-form-bg opacity-[70%] rounded-xl w-[95%] md:w-[70%] mx-auto mb-[30px] md:mb-0">
            <thead >
              <tr className=" text-center text-white md:text-2xl text-lg border-b-2 border-orange-800 my-[10px] ">
                <td>Image</td>
                <td>Title</td>
                <td>Price </td>
                <td>Qty</td>
                <td>Total Price </td>
                <td>
                  <button
                    onClick={() => {
                      swalertFun();
                    }}
                    className="mb-[2px] bg-red-800 text-white px-[5px] rounded-md text-sm"
                  >
                    Clear
                  </button>
                </td>
              </tr>
            </thead>
            <tbody className="text-white">
              {orderMeals.map((meal) => (
                <tr
                  key={meal.idMeal}
                  className="trans table-body-tr text-[15px] sm:text-md md:text-xl w-[80px] h-[80px] text-center border-b-[1px] border-orange-800"
                > 
                  <td className="w-[80px] h-[80px] ">
                    <img className="w-[90%] h-[90%] ml-[5px] rounded-lg" src={meal.strMealThumb} alt="" />
                  </td>
                  <td>{meal.strMeal}</td>
                  <td>{(parseFloat(meal?.idMeal)/1110).toFixed(2)} $</td>
                  <td>{meal.quantity} px</td>
                  <td>{((parseFloat(meal?.idMeal)/1110).toFixed(2) * meal.quantity).toFixed(2)} $</td>
                  <td>
                    <RiDeleteBin5Line
                      className="text-red-800 mx-auto cursor-pointer hover:scale-125 duration-500"
                      onClick={() => {
                        dispatch(deleteMeale(meal));
                        swal({
                          title: `${meal?.strMeal?.toUpperCase()} has been Deleted from Your Order Successfully`,
                          icon: "warning",
                          dangerMode: true,
                        });
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* payment */}
          <div className="text-white text-lg md:text-xl w-[70%] md:w-[25%]  bg-transparent md:px-[15px] px-[60px] login-form-bg opacity-[70%] rounded-lg md:mr-[15px]">
            <div className="flex justify-between items-center p-[10px]">
              <span>Qty</span>
              <span className="text-white">{Qty} px</span>
            </div>
            <div className="flex justify-between items-center p-[10px]">
              <span>Cost </span>
              <span className="text-white">{(TotalPrice).toFixed(2)} $</span>
            </div>
            <div className="flex justify-between items-center p-[10px]">
              <span>Free</span>
              <span className="text-white"> 0 $</span>
            </div>

            <div className="total-cost-hr"></div>

            <div className="flex justify-between items-center p-[10px] text-2xl border-b-2 border-orange-800">
              <span>Total Cost</span>
              <span className="text-white">{(TotalPrice).toFixed(2)} $</span>
            </div>
            <div className="flex justify-center">
              <Link to="/login" onClick={()=>{placeOrderFun()}} className="palce-order-link mt-[20px]">
                Place an Order
              </Link>
            </div>
            <div className="flex justify-center">
              <Link to="/services" className="palce-order-link my-[20px]">
                Buy More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
