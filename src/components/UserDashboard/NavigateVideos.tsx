import React from 'react'

function NavigateVideos() {
  return (
    <>
    <div className='flex items-center justify-between mb-5'>
        <div className='items-start text-zinc-100 text-base font-medium font-["Inter"]'>Continue watching</div>
        <div className='flex gap-[13px]'>
            <div><img src="https://i.postimg.cc/BX6N2tMX/btn.png" alt="Left" className='w-6 h-6'/></div>
            <div><img src="https://i.postimg.cc/F7BppmBG/btn-1.png" alt="Right" className='w-6 h-6'/></div>
        </div>
    </div>
    </>
  )
}

export default NavigateVideos