
import { GrFormNext } from 'react-icons/gr'
import ProductCard from './ProductCard'

function NewArrivals() {
  return (
    <div className='flex flex-col mb-5'>
        <div className='flex mx-[108px] justify-between mb-2'>
            <div className="text-zinc-100 text-[32px] font-medium font-['Inter']">New Arrivals</div>
            <div className="flex justify-center items-center gap-1 text-center text-zinc-100 text-base font-normal font-['Inter']">View All<GrFormNext /></div>
        </div>
        <hr className='mb-5'/>
        <div className="flex mx-[108px] justify-between">
          <ProductCard productName={''} productImage={''} productPrice={''} productRating={0}/>
          <ProductCard productName={''} productImage={''} productPrice={''} productRating={0}/>
          <ProductCard productName={''} productImage={''} productPrice={''} productRating={0}/>
          <ProductCard productName={''} productImage={''} productPrice={''} productRating={0}/>
        </div>
    </div>
  )
}

export default NewArrivals