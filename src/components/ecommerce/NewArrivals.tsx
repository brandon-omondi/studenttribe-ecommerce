
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
          <ProductCard productName={'Tomcat Printed Navy Blue'} productImage={'https://i.postimg.cc/gkhJ6dfS/tomcat-printed-navy-blue-826978.webp'} productPrice={1900.00} productRating={4.5}/>
          <ProductCard productName={'Vigo Arya Black'} productImage={'https://i.postimg.cc/JhMGLgYT/vigo-arya-black-188830-300x-crop-center.webp'} productPrice={1900.00} productRating={3.6}/>
          <ProductCard productName={'Emmy Chapisha Canvas Shoes'} productImage={'https://i.postimg.cc/mkJPWgKM/emmy-chapisha-canvas-shoes-multi-green-249572-300x-crop-center.jpg'} productPrice={1900.00} productRating={4.1}/>
          <ProductCard productName={'Hippies Print Black Abstract Black'} productImage={'https://i.postimg.cc/d1037CYr/hippies-print-black-abstract-black-958114-300x-crop-center.jpg'} productPrice={1900.00} productRating={3.9}/>
        </div>
    </div>
  )
}

export default NewArrivals