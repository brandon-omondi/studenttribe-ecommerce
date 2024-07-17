import React from "react";

interface SaleSelectionCardProps{
    productImgage: string;
    discount: string;
    productName: string;
    price: number;
}

const SaleSelectionCard: React.FC <SaleSelectionCardProps> = ({discount,productName,price,productImgage}) => {
    return(
        <div className="w-[184px] h-[229px] p-2 bg-white rounded flex-col justify-center items-center gap-3 inline-flex">
            <img className="w-[168px] h-[146px] relative" src={productImgage} />
            <div className="px-1.5 py-1 bg-red-600/opacity-80 rounded-tr-lg rounded-br-lg justify-start items-center gap-2.5 inline-flex">
                <div className="text-neutral-50 text-xs font-light font-['Inter']">{discount}</div>
            </div>
            <div className="self-stretch h-[55px] flex-col justify-center items-center gap-2 flex">
                <div className="self-stretch grow shrink basis-0 text-neutral-950 text-xs font-light font-['Inter'] leading-normal">{productName}</div>
                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                    <div className="grow shrink basis-0 text-right text-neutral-950 text-xs font-light font-['Inter']"> KES<span>{price}</span> </div>
                </div>
            </div>
        </div>
    )
}

export default SaleSelectionCard