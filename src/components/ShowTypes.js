import "../styles/ShowTypes.css";
import { Link } from "react-router-dom";

const ShowTypes = (props) => {
  return (
    <div>
      <div className="main-section-2 w-full">
        <div className="section-2container max-w-[1100px] h-full mx-auto flex justify-center items-center">
          <div className="flex flex-col justify-center w-[95%] h-[100%] py-100px]">
            <div className="relative flex w-full h-[50%] md:flex-row justify-center items-center gap-[2%]">
              <div className="tl hover:scale-110 duration-1000 h-[92%] w-[47%] md:w-[40%] border-b-[3px] border-orange-800">
                <Link
                  className="relative"
                  to={`/meals/Beef`}
                >
                  <img
                    src={props.services[0].image}
                    alt="...."
                    className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] mx-auto"
                  />
                  <h1 className="absolute text-white bottom-[-25px] right-[46%] text-[30px]">
                    {props.services[0].title}
                  </h1>
                </Link>
              </div>
              <div className="tr hover:scale-110 duration-1000 h-[92%] w-[47%] md:w-[55%] border-b-[3px] border-white">
                <Link
                  className="relative"
                  to={`/meals/Chicken`}
                >
                  <img
                    src={props.services[1].image}
                    alt="...."
                    className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] mx-auto"
                  />
                  <h1 className="absolute text-white bottom-[-25px] left-[46%] text-[30px]">
                    {props.services[1].title}
                  </h1>
                </Link>
              </div>
            </div>
            <div className="relative flex w-full h-[50%] md:flex-row justify-center items-center gap-[2%]">
              <div className="bl hover:scale-110 duration-1000 h-[92%] w-[47%] md:w-[55%] border-t-[3px] border-white">
                <Link
                  className="relative"
                  to={`/meals/Dessert`}
                >
                  <img
                    src={props.services[2].image}
                    alt="...."
                    className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] mx-auto"
                  />
                  <h1 className="absolute text-white bottom-[-45px] right-[46%] text-[30px]">
                    {props.services[2].title}
                  </h1>
                </Link>
              </div>
              <div className="br hover:scale-110 duration-1000 h-[92%] w-[47%] md:w-[40%] border-t-[3px] border-orange-800">
                <Link
                  className="relative"
                  to={`/meals/Seafood`}
                >
                  <img
                    src={props.services[3].image}
                    alt="..."
                    className="w-[90%] h-[90%] md:w-[80%] md:h-[80%] mx-auto"
                  />
                  <h1 className="absolute text-white bottom-[-45px] left-[46%] text-[30px]">
                    {props.services[3].title}
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTypes;
