import CategoryCard from "./CategoryCard"


function CategoriesSection() {
  return (
    <div className="flex justify-around px-10 mb-10">
        <CategoryCard categoryImgUrl={""} categoryName={""}/>
        <CategoryCard categoryImgUrl={""} categoryName={""}/>
        <CategoryCard categoryImgUrl={""} categoryName={""}/>
        <CategoryCard categoryImgUrl={""} categoryName={""}/>
    </div>
  )
}

export default CategoriesSection