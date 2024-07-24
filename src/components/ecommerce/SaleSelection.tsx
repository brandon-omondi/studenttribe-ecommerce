import SaleSelectionCard from "./SaleSelectionCard"
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


function SaleSelection() {
  return (
    <div className="mx-[108px] mb-10 w-[1150px] h-[325px] relative bg-amber-500 bg-opacity-50 rounded-lg pt-[48px] px-[28px]">
        {/* <div><img className="w-[500.44px] h-[435.65px] origin-top-left " src="https://i.postimg.cc/qBwcZPQv/random-shape-in-blue-png-2.png" /></div> */}
        <div className="flex w-full h-[90%]">
            <div className="w-[20%] flex flex-col">
                <div className="text-white text-2xl font-medium font-['Inter'] mb-10">Biggest Discounts</div>
                <div className="text-white text-xl font-light font-['Inter'] leading-7 mb-3">Shop Now!</div>
                <div className="w-[99px] h-12 px-2 py-1 rounded-lg border border-white justify-center items-center inline-flex"><button className="text-center text-white text-base font-normal font-['Inter']">View all</button></div>
            </div>
            <div className="w-[80%] pl-20 flex gap-5">
              <SaleSelectionCard discount={"-50%"} productName={"Emmy Chapisha Canvas "} price={1900.00} productImgage={"https://i.postimg.cc/mkJPWgKM/emmy-chapisha-canvas-shoes-multi-green-249572-300x-crop-center.jpg"}/>
              <SaleSelectionCard discount={"-40%"} productName={"Moxxa Dora Red"} price={1900.00} productImgage={"https://i.postimg.cc/T1LP0XhP/moxxa-dora-red-968264-300x-crop-center.jpg"}/>
              <SaleSelectionCard discount={"-35%"} productName={"Tomcat Printed Navy Blue"} price={1900.00} productImgage={"https://i.postimg.cc/gkhJ6dfS/tomcat-printed-navy-blue-826978.webp"}/>
              <SaleSelectionCard discount={"-50%"} productName={"Vigo Arya Black"} price={1900.00} productImgage={"https://i.postimg.cc/JhMGLgYT/vigo-arya-black-188830-300x-crop-center.webp"}/>
            </div>
        </div>
        <div className="w-full h-[10%] flex justify-end">
          <div className="Navs flex gap-4">
            <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center"><GrFormPrevious /></div>
            <div className="w-6 h-6 bg-white rounded-full flex justify-center items-center"><GrFormNext /></div>
          </div>
        </div>
    </div>
  )
}

export default SaleSelection