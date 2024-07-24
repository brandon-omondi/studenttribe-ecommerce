import Footer from "../../Footer"
import EcommHeader from "../EcommHeader"
import DetailsSection from "./DetailsSection"
import ProductSelection from "./ProductSelection"
import SimilarProducts from "./SimilarProducts"


function ProductDetails() {
  return (
    <div>
        <EcommHeader/>
        <ProductSelection/>
        <DetailsSection/>
        <SimilarProducts/>
        <Footer/>
    </div>
  )
}

export default ProductDetails