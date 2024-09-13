import "../styles/meals.css";
import "../styles/card.css"
import { FaSistrix } from "react-icons/fa";
import Card from "../components/Card";
import MealsLoading from "../components/MealsLoading";

// import Card from "../components/Card";

import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";

const Meals = () => {

  const { category } = useParams()
  const [ meals , setMeals ] = useState()
  const [ searchMeals , setSearchMeals ] = useState()    
  const [ categories , setCategories ] = useState() 

  // get the main image source
  const mainImageSrc = categories?.filter(res=>res.strCategory === category)[0].strCategoryThumb

  // get-meals function
  const getMeals = async ()=>{
    try {
      await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then(res=>setMeals(res.data.meals))
      await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then(res=>setSearchMeals(res.data.meals))
      await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).then(res=>setCategories(res.data.categories))
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(
    ()=>{
      getMeals()
    },[category]
    )

  //   // search function
  const searching = (e) => {
    const val = e.target.value;
    const search = meals.filter((meal) => {
      return meal?.strMeal.toLowerCase().includes(val.toLowerCase());
    });
    if (val !== "" | " ") {
      setSearchMeals(search);
      console.log("search",search)
    } else {
      setSearchMeals(meals);
    }
  };

  return (
    <>
       {
        searchMeals ? (
          <div className="meal-page z-10">
          <div className="max-w-[1380px] mx-auto">
            {/*first section ( image - search ) */}
            <div className=" w-full h-[275px] flex flex-col md:flex-row items-center justify-center ">
              {/* the main image */}
              <div className="h-full moving-image w-[325px] mt-[50px]  md:w-[45%] lg:w-[35%] md:relative">
                <img
                  src={mainImageSrc}
                  alt="image1"
                  className="w-[100%] md-w-[80%] h-full md:right-[150px] mx-auto md:absolute"
                />
              </div>
              {/* the search input */}
              <div className="md:relative">
                <div className="moving-input md:right-[-175px] bg-transparent search-section w-[300px] md:min-w-[200px] flex justify-between items-center border-t-[2px] border-b-[2px] rounded-xl px-[10px] border-white text-white text-xl md:absolute mt-[20px]">
                  <input
                    className="h-[30px] w-[80%] px-[10px] font-bold placeholder-white md:min-w-[100px] rounded-sm  outline-none border-0 bg-transparent "
                    type="text"
                    placeholder="Enter To Search"
                    onChange={searching}
                  />
                  <FaSistrix className="text-orange-800 text-[20px]" />
                </div>
              </div>
            </div>
            {}
    
            {/* second section ( meals )*/}
            <div className=" px-[30px] sm:px-[10px]">
              {
                searchMeals ? 
                  <div className="w-full flex sm:justify-between justify-center mt-[20px] items-center gap-[10px] flex-wrap md:mt-[100px]">
                  {searchMeals?.map((meal) => (
                    <div
                      key={meal.idMeal}
                      className="my-[10px] border-2 border-white rounded-xl bg-orange-400"
                    >
                      <Card  card={meal} />
                    </div>
                  ))}
                  </div> : ""
              }
            </div>
          </div>
        </div>
        ) : (
            <MealsLoading/>
        )
       }
    </>
  );
};

export default Meals;
