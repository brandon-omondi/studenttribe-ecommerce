import { PiMagnifyingGlassLight } from "react-icons/pi"
import { GrBasket } from "react-icons/gr"

function EcommHeader() {
  return (
    <>
      <div className="flex justify-between items-center px-5">
          <div><img src="https://i.postimg.cc/RZTDP6kW/UMOJAWEBSITE-02-5000x.webp" alt="Logo" className="w-48 h-18" /></div>
          <div className="NavButtons flex gap-5 items-center">
              <button className="text-center text-zinc-100 text-lg font-light font-['Inter']">Products</button>
              <button className="text-center text-zinc-100 text-lg font-light font-['Inter']">FAQ</button>
              <button className="text-center text-zinc-100 text-lg font-light font-['Inter']">Contact Us</button>
          </div>
          <div className="flex gap-5 items-center">
              <button><PiMagnifyingGlassLight className="text-white w-6 h-6"/></button>
              <button><GrBasket className="text-white w-6 h-6"/></button>            
              <button className="w-[148px] h-12 px-4 py-2 bg-amber-500 rounded-lg justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-zinc-800 text-base font-normal font-['Inter']">Login / Sign Up</div>
              </button>
          </div>
      </div>
      <hr className="w-full border-t border-amber-500"/>    
    </>
    
  )
}

export default EcommHeader