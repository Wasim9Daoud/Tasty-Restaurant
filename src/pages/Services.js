// import React, { useState } from "react";
import ShowTypes from "../components/ShowTypes";
import ShowTypesLoading from '../components/ShowTypesLoading'

/****** Images for categories ****************/
const beef = "https://www.themealdb.com/images/category/beef.png"
const chicken = "https://www.themealdb.com/images/ingredients/Chicken.png"
const dessert = "https://www.themealdb.com/images/category/dessert.png"
const Seafood = "https://www.themealdb.com/images/category/seafood.png"

const Services = () => {

  // categories
  const Categries = [
        {
      id: 1,
      title: "Beef",
      image: beef,
      path: "food",
    },
    {
      id: 2,
      title: "Chicken",
      image: chicken,
      path: "drinks",
    },
    {
      id: 3,
      title: "Dessert",
      image: dessert,
      path: "sweet",
    },
    {
      id: 4,
      title: "Seafood",
      image: Seafood,
      path: "Seafood",
    },

  ];

  return (
    <div>
      {
        Categries[0].image && Categries[1].image && Categries[2].image && Categries[3].image ? ( <ShowTypes services={Categries} /> ) : ( <ShowTypesLoading/> )
      }
    </div>
  );
};

export default Services;
