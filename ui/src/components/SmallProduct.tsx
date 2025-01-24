"use client";
import Link from "next/link";
import { Love } from "../../public/icons/Love";
import { FilledLove } from "../../public/icons/FilledLove";
import { useState } from "react";

type Products = {
  productName: string;
  price: string;
  images: string;
  productId: string;
};

const SmallProduct = (props: Products) => {
  const [isSelected, setIsSelected] = useState<boolean>(true);

  const { productName, price, images, productId } = props;
  return (
    <Link href={`/product/${productId}`}>
      <div className=" w-[245px] h-[391px]">
        <div
          className=" w-[245px] h-[331px] bg-cover bg-center rounded-2xl flex justify-end"
          style={{ backgroundImage: `${images}` }}
        >
          <div
            className="cursor-pointer h-10 w-10 "
            onClick={() => setIsSelected(!isSelected)}
          >
            {isSelected === true ? <Love /> : <FilledLove />}
          </div>
        </div>
        <div className=" text-start my-2">
          <p className="text-base font-normal leading-6 text-gray-900">
            {productName}
          </p>
          <p className="text-base font-bold leading-6 text-gray-900">
            {price}$
          </p>
        </div>
      </div>
    </Link>
  );
};
export default SmallProduct;
