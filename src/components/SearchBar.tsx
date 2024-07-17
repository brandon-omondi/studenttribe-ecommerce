

function SearchBar() {
  return (
    <div className="w-[1100px] h-12 px-4 py-5 bg-white rounded-xl border border-stone-300/opacity-80 justify-center items-center gap-2.5 inline-flex mb-5">
        <div className="w-4 h-4 justify-center items-center flex">
            <div className="w-4 h-4 relative">
            </div>
        </div>
        <div className="grow shrink basis-0 self-stretch text-neutral-400 text-xs font-medium font-['Inter']">Search your course here....</div>
    </div>
  )
}

export default SearchBar