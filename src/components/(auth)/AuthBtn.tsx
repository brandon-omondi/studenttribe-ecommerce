import React from 'react'
interface AuthBtnProps {
  btnLabel: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const AuthBtn: React.FC <AuthBtnProps>= ({btnLabel, onClick}) => {
  return (
    <button onClick={onClick} className='w-full h-[46px] px-5 py-3 bg-amber-500 rounded-md shadow justify-center items-center inline-flex mb-4'>
        <div className="text-zinc-800 text-base font-semibold font-['Inter'] leading-normal">{btnLabel}</div>
    </button>
  )
}

export default AuthBtn