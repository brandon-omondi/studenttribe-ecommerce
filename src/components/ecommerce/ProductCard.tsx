import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaHeart, FaStar } from "react-icons/fa";

interface ProductCardProps {
  productName: string;
  productImage: string;
  productPrice: number;
  productRating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ productName, productImage, productPrice, productRating }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const displayPrice = quantity > 0 ? productPrice * quantity : productPrice;

  return (
    <div className="w-[248px] h-[350px] pt-2 px-3 pb-3 bg-white rounded-lg shadow flex-col justify-between items-start gap-4 inline-flex relative">
      <div className="w-full h-[60%] p-2 justify-end items-center gap-2 inline-flex">
        <img className="w-full h-full object-contain relative rounded-lg" src={productImage} alt={productName} />
      </div>
      <div className="w-full h-[40%] flex-col justify-between items-start gap-2 flex">
        <div className="text-neutral-950 text-base font-medium font-['Inter'] leading-normal">{productName}</div>

        <div className="carting flex w-[40%] justify-between items-center gap-2 border-b-2 border-gray-400">
          <button onClick={decrementQuantity} className="text-lg p-1">
          <CiCircleMinus />
          </button>
          <div className="text-sm font-medium ">
            {quantity}
          </div>
          <button onClick={incrementQuantity} className="text-lg p-1">
          <CiCirclePlus />
          </button>
        </div>



        <div className="flex justify-between w-full">
          <div className="flex-col justify-start items-center flex">
              <div className="text-neutral-950 text-md font-light font-['Inter']">
                KES {displayPrice.toFixed(2)}
              </div>
          </div>
        <div className="self-end items-center gap-0.5 flex">
              <FaStar className="text-red-600" />
              <div className="text-red-600 text-base font-medium font-['Inter']">{productRating}</div>
        </div>
        </div>
      </div>
      <FaHeart className="absolute top-2 right-2 m-2 w-4 h-4 text-red-600" />
    </div>
  );
};

export default ProductCard;
