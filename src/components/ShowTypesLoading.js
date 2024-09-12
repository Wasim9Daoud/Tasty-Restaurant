import "../styles/ShowTypes.css";

const ShoeTypesLoading = (props) => {
  // const dispatch = useDispatch();
  return (
    <div>
      <div className="main-section-2 w-full">
        <div className="section-2container max-w-[1380px] h-full flex justify-center items-center bg-gray-300 mx-auto">
          <div className="flex flex-col justify-center w-[95%] h-[100%] py-100px] animate-pulse">
            <div className="relative flex w-full h-[50%] md:flex-row justify-center items-center gap-[2%]">
              <div className="tl bg-gray-400 rounded-xl h-[92%] w-[47%] md:w-[40%]">
              </div>
              <div className="tr bg-gray-400 rounded-xl h-[92%] w-[47%] md:w-[55%]">
              </div>
            </div>
            <div className="relative flex w-full h-[50%] md:flex-row justify-center items-center gap-[2%]">
              <div className="bl bg-gray-400 rounded-xl h-[92%] w-[47%] md:w-[55%]">
              </div>
              <div className="br bg-gray-400 rounded-xl h-[92%] w-[47%] md:w-[40%]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeTypesLoading;
