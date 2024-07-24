import { PiMagnifyingGlassLight } from "react-icons/pi"
import { GrBasket } from "react-icons/gr"

function EcommHeader() {
  return (
    <>
      <div className="flex justify-between items-center px-5 py-2">
          <div><img src="https://i.postimg.cc/RZTDP6kW/UMOJAWEBSITE-02-5000x.webp" alt="Logo" className="w-24 h-14" /></div>
          <div className="NavButtons flex gap-8 items-center">
              <button className="text-center text-zinc-100 text-md font-light font-['Inter']">Products</button>
              <button className="text-center text-zinc-100 text-md font-light font-['Inter']">FAQ</button>
              <button className="text-center text-zinc-100 text-md font-light font-['Inter']">Contact Us</button>
          </div>
          <div className="flex gap-8 items-center">
              <button><PiMagnifyingGlassLight className="text-white w-6 h-6"/></button>
              <button><GrBasket className="text-white w-6 h-6"/></button>
          </div>
      </div>
      <hr className="w-full border-t border-amber-500"/>    
    </>
    
  )
}

export default EcommHeader