import CategoryCard from "./CategoryCard"


function CategoriesSection() {
  return (
    <div className="flex justify-around px-10 mb-10">
        <CategoryCard categoryImgUrl={"https://i.postimg.cc/W3tppPG7/deniro-legend-black-808545-large-crop-center.webp"} categoryName={"Mens"}/>
        <CategoryCard categoryImgUrl={"https://i.postimg.cc/pV4rTy15/moxxa-myra-black-984817-300x-crop-center.jpg"} categoryName={"Womens"}/>
        <CategoryCard categoryImgUrl={"https://i.postimg.cc/Nj7jpDGR/vigo-sage-whitepurple-391328-300x-crop-center.jpg"} categoryName={"Sneakers"}/>
        <CategoryCard categoryImgUrl={"https://i.postimg.cc/0Nnr2fL9/watamu-floral-slippers-black-202176-1024x1024.webp"} categoryName={"Sandals"}/>
    </div>
  )
}

export default CategoriesSection