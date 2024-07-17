import React from 'react'

function AccountActions() {
  return (
    <div className='flex items-center justify-between mb-3'>
        <div className='flex items-center gap-2'>
            <div className='bg-gray-50 w-4 h-4 rounded-sm'></div>
            <div className="text-zinc-100 text-xs font-medium font-['Inter'] leading-[18px]">Remember me</div>
        </div>
        <div className="text-right text-amber-500 text-xs font-medium font-['Inter'] leading-[18px]">Forgot your password?</div>
    </div>
  )
}

export default AccountActions