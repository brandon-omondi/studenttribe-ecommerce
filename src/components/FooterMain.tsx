import React from 'react'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import { MdKeyboardArrowUp } from 'react-icons/md'
import FooterInput from './FooterInput'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'

function FooterMain() {
  return (
    <div className=" bg-[#717171] bg-opacity-[12%] flex flex-col px-[108px] pt-3">
        <div className="flex w-full justify-between h-[90%] mb-5">
            <div className='gap-3'>
                <div  className="text-white text-base font-medium font-['Inter']">Categories</div>
                <div className="text-stone-300 text-base font-light font-['Inter'] leading-normal">Mens</div>
                <div className="text-stone-300 text-base font-light font-['Inter'] leading-normal">Womens</div>
                <div className="text-stone-300 text-base font-light font-['Inter'] leading-normal">Sandals</div>
                <div className="text-stone-300 text-base font-light font-['Inter'] leading-normal">Sneakers</div>
                <div className="text-stone-300 text-base font-light font-['Inter'] leading-normal">Studeez</div>
            </div>
            <div className='gap-3'>
                <div  className="text-white text-base font-medium font-['Inter']">Info</div>
                <div className="text-stone-300 text-base font-light font-['Inter'] leading-normal">How it works?</div>
                <div className="text-stone-300 text-base font-light font-['Inter'] leading-normal">Delivery Policy</div>
                <div className="text-stone-300 text-base font-light font-['Inter'] leading-normal">FAQ</div>
            </div>
            <div className='gap-3'>
                <div  className="text-white text-base font-medium font-['Inter'] flex gap-1">Contact us</div>
                <div className="text-stone-300 text-base font-light font-['Inter'] leading-normal flex gap-1"><IoLocationOutline className="self-center"/>Kikuyu, Nairobi, Kenya</div>
                <div className="text-stone-300 text-base font-light font-['Inter'] leading-normal flex gap-1"><IoCallOutline className="self-center"/>+2547 9354 2951</div>
                <div className="text-stone-300 text-base font-light font-['Inter'] leading-normal flex gap-1"><AiOutlineMail className="self-center"/>marketing@thestudenttribe.com</div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="text-white text-base font-medium font-['Inter']">Sign up for News and updates</div>
                <FooterInput/>
                <div className="flex gap-2">
                    <FaInstagram className='w-6 h-6 text-white'/>
                    <FaXTwitter className='w-6 h-6 text-white'/>
                    <FaYoutube className='w-6 h-6 text-white'/>
                    <FaLinkedin className='w-6 h-6 text-white'/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-end ">
                <div className="w-8 h-8 bg-amber-500 bg-opacity-50 rounded-full flex justify-center items-center"><MdKeyboardArrowUp className='w-6 h-6 text-white'/></div>
            </div>
        </div>
        <div className="flex justify-between w-full h-[10%]">
            <div className="self-start text-stone-300 w-[15%] text-xs font-medium font-['Inter']">©2024 Studenttribe.</div>
            <div className="self-end w-[30%] flex justify-between text-stone-300 text-xs font-medium font-['Inter']">
                <div>cookie settings</div>
                <div>Privacy Policy</div>
                <div>Terms and Conditions </div>
            </div>
        </div>
    </div>
  )
}

export default FooterMain