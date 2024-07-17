import React from 'react'
interface AuthBtnProps{
    btnlabel: string;
}
const AuthBtn: React.FC <AuthBtnProps>= ({btnlabel}) => {
  return (
    <button className='w-full h-[46px] px-5 py-3 bg-amber-500 rounded-md shadow justify-center items-center inline-flex mb-4'>
        <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-normal">{btnlabel}</div>
    </button>
  )
}

export default AuthBtn