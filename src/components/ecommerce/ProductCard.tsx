import React from "react";

interface ProductCardProps{
    productName: string;
    productImage: string;
    productPrice: string;
    productRating: number;

}                     

const ProductCard: React.FC <ProductCardProps> = ({productName,productImage,productPrice,productRating}) => {
    return(
        <div className="w-[248px] h-[300px] p-4 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
            <div className="pl-[15px] pt-3.5 pb-[15px] justify-end items-center gap-2 inline-flex">
                <img className="w-[170px] h-[141px] relative rounded-lg" src={productImage} />
                <div className="self-stretch flex-col justify-start items-center gap-2 inline-flex">
                    <div className="w-3 h-3 bg-neutral-600 rounded-full border border-neutral-700"></div>
                    <div className="w-3 h-3 bg-orange-50 rounded-full border border-neutral-700"></div>
                    <div className="w-3 h-3 bg-slate-400 rounded-full border border-neutral-700"></div>
                    <div className="text-center text-neutral-600 text-base font-medium font-['Inter']">+</div>
                </div>
            </div>
            <div className="self-stretch h-[93px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch grow shrink basis-0 text-neutral-950 text-base font-light font-['Inter'] leading-normal">{productName}</div>
                <div className="self-stretch justify-between items-end inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-center inline-flex">
                        <div className="self-stretch h-[22px] flex-col justify-start items-center flex">
                            <div className="self-stretch text-neutral-950 text-lg font-light font-['Inter']">KES {productPrice}</div>
                        </div>
                    </div>
                    <div className="grow shrink basis-0 h-6 justify-end items-center gap-4 flex">
                        <div className="justify-end items-center gap-0.5 flex">
                            <div className="text-red-600 text-base font-medium font-['Inter']">{productRating}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard