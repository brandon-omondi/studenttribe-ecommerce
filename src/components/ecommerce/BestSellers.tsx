
import { GrFormNext } from 'react-icons/gr'
import ProductCard from './ProductCard'

function BestSellers() {
  return (
    <div className='flex flex-col mb-5'>
        <div className='flex mx-[108px] justify-between mb-2'>
            <div className="text-zinc-100 text-[32px] font-medium font-['Inter']">Best Sellers</div>
            <div className="flex justify-center items-center gap-1 text-center text-zinc-100 text-base font-normal font-['Inter']">View All<GrFormNext /></div>
        </div>
        <hr className='mb-5'/>
        <div className="flex mx-[108px] justify-between">
          <ProductCard productName={'Watamu Floral Slippers'} productImage={'https://i.postimg.cc/0Nnr2fL9/watamu-floral-slippers-black-202176-1024x1024.webp'} productPrice={1900.00} productRating={4.5}/>
          <ProductCard productName={'Mzuka Navy'} productImage={'https://i.postimg.cc/y6bgZLWd/mzuka-navy-579719.webp'} productPrice={1900.00} productRating={3.6}/>
          <ProductCard productName={'Tomcat Canvas Shoes Multi-tribal'} productImage={'https://i.postimg.cc/Z5kWf08z/tomcat-canvas-shoes-multi-tribal-882198.webp'} productPrice={1900.00} productRating={4.1}/>
          <ProductCard productName={'Hippies Print Black Abstract Black'} productImage={'https://i.postimg.cc/d1037CYr/hippies-print-black-abstract-black-958114-300x-crop-center.jpg'} productPrice={1900.00} productRating={3.9}/>
        </div>
    </div>
  )
}

export default BestSellers