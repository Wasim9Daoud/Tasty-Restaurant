import "../styles/meals.css";
import CardLoading from "./CardLoading";

const MealsLoading = () => {

  return (
    <div className=" z-10 ">
      <div className="max-w-[1100px] mx-auto bg-white ">
        {/*first section ( image - search ) */}
        <div className="animate-pulse w-full h-[275px] flex flex-col md:flex-row items-center justify-center ">
          {/* the main image */}
          <div className="h-full bg-gray-300 rounded-xl moving-image w-[325px] mt-[50px]  md:w-[45%] lg:w-[35%]">
          </div>
        </div>
        {}
        {/* second section ( meals )*/}
        <div className=" px-[30px] sm:px-[10px]">
          {
              <div className="w-full flex sm:justify-between justify-center mt-[20px] items-center gap-[10px] flex-wrap md:mt-[100px]">
              {[1,2,3,4,5,6,7,8,9,10].map((meal) => (
                <div
                  key={meal}
                  className="my-[10px] h-[200px]  bg-gray-300 rounded-xl"
                >
                  <CardLoading />
                </div>
              ))}
              </div> 
          }
        </div>
      </div>
    </div>
  );
};

export default MealsLoading;
