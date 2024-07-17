import BestSellers from "./BestSellers"
import CategoriesSection from "./CategoriesSection"
import EcommHeader from "./EcommHeader"
import EcommSection1 from "./EcommSection1"
import NewArrivals from "./NewArrivals"
import SaleSelection from "./SaleSelection"


function Ecommerce() {
  return (
    <div>
        <EcommHeader/>
        <EcommSection1/>
        <CategoriesSection/>
        <SaleSelection/>
        <NewArrivals/>
        <BestSellers/>
    </div>
  )
}

export default Ecommerce