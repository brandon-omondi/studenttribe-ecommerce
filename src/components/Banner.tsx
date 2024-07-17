

function Banner() {
  return (
    <>
        <div className="flex w-[1100px] h-[185px] pl-6 pr-[7px] rounded-[20px] justify-end items-center gap-[588px] bg-amber-500 bg-opacity-[58%] mb-5">
            <div className="Left w-[328px]">
                <div className="text-white text-xs font-normal font-['Inter'] pt-2 uppercase mb-2">PSYCHOSOCIAL SUPPORT</div>
                <div className=" text-white text-2xl font-semibold font-['Inter'] mb-2">Sharpen  Your Mind With<br/>Professional Online Courses</div>
                <div className="w-[110px] h-9 px-3 py-2 bg-neutral-800 rounded-[40px] justify-start items-center gap-3 inline-flex">
                    <div className="text-right text-white text-xs font-medium font-['Inter'] ">Topics</div>
                    <div className="w-5 h-5 p-1.5 bg-white rounded-[50px] justify-center items-center gap-2.5 flex">
                        <div className="w-2 h-2 justify-center items-center flex">
                           <img src="https://i.postimg.cc/WFLkmwc2/play.png" alt="" className="w-2 h-2 relative" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Right w-[221px]  flex justify-center items-center">
                <img src="https://i.postimg.cc/vgbtTm48/stars.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Banner