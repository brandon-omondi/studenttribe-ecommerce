import React from 'react'
import { CiDiscount1 } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import { HiOutlineCheckBadge } from 'react-icons/hi2'
import { MdOutlineDeliveryDining, MdOutlineInventory2 } from 'react-icons/md'

function ProductSelection() {

    

  return (
    <div className="flex w-full h-300px mt-5 mb-8 auto px-[108px] gap-10">
        <div className="flex flex-col justify-center items-center w-1/3 h-full gap-5 ">
        <div className="flex h-[80%] items-start">
           <div className="relative w-full h-full">
        <img
          src="https://i.postimg.cc/d1037CYr/hippies-print-black-abstract-black-958114-300x-crop-center.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <FaHeart className="absolute top-0 right-0 m-2 w-4 h-4 text-red-600" />
            </div>
        </div>
            <div className="flex h-[20%] gap-5">
                <div className='w-12 h-12 outline outline-white flex justify-center items-center'><img src="https://i.postimg.cc/d1037CYr/hippies-print-black-abstract-black-958114-300x-crop-center.jpg" alt="" /></div>
                <div className='w-12 h-12 outline outline-white flex justify-center items-center'><img src="https://i.postimg.cc/d1037CYr/hippies-print-black-abstract-black-958114-300x-crop-center.jpg" alt="" /></div>
                <div className='w-12 h-12 outline outline-white flex justify-center items-center'><img src="https://i.postimg.cc/d1037CYr/hippies-print-black-abstract-black-958114-300x-crop-center.jpg" alt="" /></div>
                <div className='w-12 h-12 outline outline-white flex justify-center items-center'><img src="https://i.postimg.cc/d1037CYr/hippies-print-black-abstract-black-958114-300x-crop-center.jpg" alt="" /></div>
                <div className='w-12 h-12 outline outline-white flex justify-center items-center'><img src="https://i.postimg.cc/d1037CYr/hippies-print-black-abstract-black-958114-300x-crop-center.jpg" alt="" /></div>
            </div>
        </div>
        <div className="flex flex-col w-1/3">
            <div className=" text-white text-xl font-medium font-['Inter'] mb-3">Hippies Print Black Abstract Black</div>
            <div className="w-12 px-1.5 py-1 bg-red-600 bg-opacity-80 rounded-tr-lg rounded-br-lg justify-start items-center gap-2.5 inline-flex  mb-3">
                <div className=" text-neutral-50 text-xs font-light font-['Inter']">-45%</div>
            </div>
            <div className="text-zinc-100 text-base font-light font-['Inter'] leading-normal mb-3">Select Size</div>
            <div className='flex gap-3 mb-5'>
                <div className='w-8 h-8 bg-slate-800 hover:bg-white rounded-full flex justify-center items-center text-white hover:text-zinc-800'>36</div>
                <div className='w-8 h-8 bg-slate-800 hover:bg-white rounded-full flex justify-center items-center text-white hover:text-zinc-800'>38</div>
                <div className='w-8 h-8 bg-slate-800 hover:bg-white rounded-full flex justify-center items-center text-white hover:text-zinc-800'>40</div>
                <div className='w-8 h-8 bg-slate-800 hover:bg-white rounded-full flex justify-center items-center text-white hover:text-zinc-800'>42</div>
                <div className='w-8 h-8 bg-slate-800 hover:bg-white rounded-full flex justify-center items-center text-white hover:text-zinc-800'>43</div>
            </div>
            <div className="flex w-full text-xs justify-between">
                <div className="flex gap-2 justify-center items-center text-neutral-500 font-medium font-['Inter']"><MdOutlineInventory2 className="w-4 h-4 text-amber-500"/>In Stock</div>
                <div className="flex gap-2 justify-center items-center text-neutral-500 font-medium font-['Inter']"><HiOutlineCheckBadge className="w-4 h-4 text-amber-500"/>Guaranteed</div>
                <div className="flex gap-2 justify-center items-center text-neutral-500 font-medium font-['Inter']"><MdOutlineDeliveryDining className="w-4 h-4 text-amber-500"/>Fast Delivery</div>
            </div>
        </div>
        <div className="flex flex-col w-1/3 bg-[#717171] bg-opacity-[12%] p-5 rounded-lg">
        <div className="flex justify-between">
            <div className="text-zinc-100 text-xl font-medium font-['Inter']">KES 3,499.00</div>
            <div className="text-amber-500 text-base font-medium font-['Inter'] flex justify-center items-center gap-1"><CiDiscount1 className="w-6 h-6 text-amber-500"/>12.5%</div>
        </div>
        <div className="text-stone-300 text-xs font-light font-['Inter'] mb-5">Actual price: KES 4,000.00</div>
        <div className="flex flex-col justify-start items-start mb-5">
            <img src="https://i.postimg.cc/cCzpKqmT/mpesa.png" alt="" className='rounded-full w-8 h-8 mb-2'/>
            <div className="flex justify-center items-center text-xs text-zinc-100 font-light font-['Inter']">M-Pesa</div>
        </div>
        <button className="flex self-center border border-amber-500 rounded-lg w-2/3 justify-center items-center"><div className="flex text-md text-zinc-100 font-light font-['Inter']">Buy Now</div></button>
        </div>
    </div>
  )
}

export default ProductSelection