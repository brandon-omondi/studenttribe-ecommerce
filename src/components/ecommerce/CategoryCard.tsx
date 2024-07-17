import React from "react";

interface CategoryCardProps{
    categoryImgUrl: string;
    categoryName: string;
}
const  CategoryCard: React.FC <CategoryCardProps> = ({categoryImgUrl, categoryName}) => {
    return(
        <div className="w-[184px] h-[196px] px-[18px] py-2 bg-zinc-800 rounded-lg shadow justify-start items-start gap-2.5 inline-flex">
            <div className="flex-col justify-start items-center gap-2 inline-flex">
                <img className="w-[148px] h-[148px] relative" src={categoryImgUrl} />
                <div className="text-center text-zinc-100 text-base font-light font-['Inter'] leading-normal">{categoryName}</div>
            </div>
        </div>
    )
}

export default CategoryCard