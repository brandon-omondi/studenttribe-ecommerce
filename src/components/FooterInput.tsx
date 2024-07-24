

function FooterInput() {
  return (
    <>
        <div className="w-72 h-12  rounded-lg border border-stone-50 justify-center items-start gap-[95px] inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                    </div>
                </div>
                <div className="justify-center items-center gap-1 flex">
                    {/* <input type="text" placeholder="E-mail Address" className="text-stone-50 text-base font-light font-['Inter'] bg-opacity-0 w-72 h-12 leading-normal"/> */}
                    <div className="text-stone-50 text-base font-light font-['Inter'] leading-normal"></div>
                </div>
            </div>
            <div className="w-6 h-6 justify-center items-center inline-flex">
                <div className="w-6 h-6 relative">
                </div>
            </div>
        </div>
    </>
  )
}

export default FooterInput