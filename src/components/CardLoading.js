
const CardLoading = () => {

  return (
    <div className='sm:w-[200px] animate-pulse w-[200px] min-h-[200px] max-h-[275px] flex flex-col  rounded-xl mx-auto my-[10px] bg-gray-400'>
        <div href='/' alt='image' className='bg-gray-300 animate-pulse w-full h-[90px]'>
        </div>
        <div className='h-[100px] bg-gray-400 flex flex-col items-center '>
            <dl className="h-[100px] w-full bg-gray-300">
                {/* Name */}
                {/* source & price & category */}
                <div className='h-[30px] w-full bg-gray-300'>
                </div>
            </dl>
            {/* details */}
            <div className="h-[50px] rounded-b-xl w-full mt-[10px] bg-gray-300 flex items-center justify-between gap-8 text-2xl px-[10px]">
                {/* details */}
                <div className='hover:scale-110 duration-500'>
                </div>
                {/* add to cart */}
                <div >
                    <div className="mt-1.5 sm:mt-0">
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardLoading
