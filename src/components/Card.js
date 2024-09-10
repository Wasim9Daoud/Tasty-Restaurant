// icons
import { MdAddShoppingCart } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addMeal } from "../RTK/Slices/orderSlice";

import swal from "sweetalert";

const Card = ({ card }) => {

  const dispatch = useDispatch()

  return (
    <div className='sm:w-[200px] w-[200px] max-h-[275px] rounded-xl mx-auto my-[10px] hover:scale-105 duration-500 shadow-xl'>
      {/* Image */}
      <a href={`/meal/${card?.idMeal}`} alt='image' className='max-h-[125px]'>
        <img
            alt=""
            src={card?.strMealThumb}
            className="h-full w-full rounded-xl object-cover"
          />
      </a>
    <div className='min-h-[50px]'>
        <dl className="flex flex-col justify-between px-[10px] text-lg">
          {/* Name */}
          <div className='text-center mb-[5px] text-white font-bold overflow-hidden max-w-[230px] max-h-[20px]'>
            <h1>{card?.strMeal}</h1>
          </div>
        </dl>
        {/* details */}
          <div className="max-h-[30px] flex items-center justify-between gap-8 px-[10px]">
            {/* details */}
            <Link to={`/meal/${card?.idMeal}`} className='text-orange-900 hover:scale-110 duration-500'>
              <CgDetailsMore className='cursor-pointer text-2xl'/>
            </Link>
            {/* the price */}
            <div>
              <h1 className="text-md font-bold text-green-900">{`${(parseFloat(card?.idMeal)/1110).toFixed(2)} $`}</h1>
            </div>
          {/* add to cart */}
            <div className='text-green-900 hover:scale-110 duration-500'>
            <MdAddShoppingCart onClick={
              ()=>{
                dispatch(addMeal(card))
                swal({
                  title: `${card.strMeal.toUpperCase()} has been Added to Your Order Successfully`,
                  icon: "success",
                });
              }
            } className='cursor-pointer text-xl'/>
            <div className="mt-1.5 sm:mt-0">
            </div>
            </div>
          </div>
    </div>
</div>
  )
}

export default Card
