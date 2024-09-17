import React, { useEffect, useState } from "react";
import DeatelsLoading from "./DeatelsLoading";
import { addMeal } from "../RTK/Slices/orderSlice";
import { useDispatch } from "react-redux";
import "../styles/details.css";
import swal from "sweetalert";

import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {

    const [ meal , setMeal ] = useState()
    const { mealID } = useParams();

    const dispatch = useDispatch()

    useEffect(()=>{
      async function getData (){
        try {
          await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
          .then(res=>setMeal(res.data?.meals[0]))
        } catch (error) {
          alert(error.message)
        }
      }
      getData()
    },[mealID])
    
  return (
    meal ? (     
    <div className="bg min-h-[600px] details-page">
      <div className="max-w-[1380px] mx-auto">
        <div className="page-container p-[10px] flex flex-col md:flex-row md:items-start justify-center items-center py-[10px] gap-[30px]">
            {/*image section {myMeal?.image} */}
          <div className="details-img-container w-[80%] md:w-[45%] h-[350px] md:h-[400px] text-center flex flex-col justify-center items-center">
            <img src={meal?.strMealThumb} alt="..." className="details-img w-full h-[100%] "></img>
            <button className="absolute bottom-[-50px] px-[10px] mt-[10px]  py-[5] bg-white rounded-md text-black text-[20px] hover:bg-orange-800 hover:border-0 hover:scale-105 hover:text-white duration-500" onClick={()=>{
                swal({
                  title: `${meal.strMeal.toUpperCase()} has been Added to Your Order Successfully`,
                  icon: "success",
                });
               dispatch(addMeal(meal))
                }}>Add to Order
            </button>
          </div>
            {/* title & description section*/}
          <div className="details-description md:w-[50%] w-[80%] min-h-[500px] flex flex-col items-center justify-center relative">
            {/* category & area */}
            <div className="details-title w-full h-[30%] md:h-[10%] mt-[20px] md:mt-0 text-center text-white absolute">
                <div className="border-b-2 w-full sm:text-xl text-lg font-bold  border-orange-800">{meal?.strMeal.slice(0,20)}</div>
                <div className="flex justify-between items-center text-[20px]">
                  <div className="border-b-2 border-orange-800 px-[10px] rounded-xl">Category : {meal?.strCategory}</div>
                  <div className="border-b-2 border-orange-800 px-[10px] rounded-xl">Area : {meal?.strArea}</div>
                </div>
            </div>
            {/* strInstructions */}
            <div className="p-[10px] w-full h-[70%] md:h-[85%] text-white text-center md:mt-[70px] mt-[80px] ">
              <h1 className="text-white text-center font-bold sm:text-xl text-lg lg:text-xl">Instructions</h1>
              <p className="bg-orange-800 opacity-50 rounded-xl px-[5px]">{meal?.strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    </div> ) : (<DeatelsLoading/>)
  );
};
export default Details;
