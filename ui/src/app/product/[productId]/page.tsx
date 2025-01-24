"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Love } from "../../../../public/icons/Love";
import Od from "../../../../public/icons/Od";
import Counter from "@/components/Counter";
import { ButtonBlue } from "@/components/ButtonBlue";
import SmallProduct from "@/components/SmallProduct";
import NewComment from "@/components/NewComment";
import Comments from "@/components/Comments";
import axios from "axios";
import { useCart, useProduct } from "@/app/providers";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

const ProductDetail = () => {
  const { addToCart } = useCart();
  const { productItems } = useProduct();
  const SlicedProductItems = productItems.slice(0, 8);
  const router = useRouter();
  const { productId } = useParams();
  const [products, setProducts] = useState<Product | null>(null);
  const [selectedImg, setSelectedImg] = useState(0);
  const [count, setCount] = useState(1);
  const [isExtandComment, setIsExtandComment] = useState(true);

  useEffect(() => {
    async function getProduct() {
      if (!productId) return;
      try {
        const { data } = await axios.get<{ product: Product }>(
          `http://localhost:8000/products/${productId}`
        );
        setProducts(data.product);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    }
    getProduct();
  }, [productId]);

  const handleMinusCount = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handlePlusCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    if (localStorage.getItem("userid") !== null) {
      addToCart({ ...products, quantity: count } as Product);
    } else {
      alert("User not found");
      router.push("/login");
    }
  };
  return (
    <div className="mx-auto">
      <div className="flex mt-[52px] mb-20 gap-5">
        <div className="w-[509px] h-[521px] flex gap-5">
          <div className="flex flex-col justify-center gap-2">
            {products?.images.map((image, index) => (
              <button
                key={index}
                style={{ backgroundImage: `url(${image})` }}
                className="rounded-2xl h-[67px] w-[67px] bg-cover bg-center"
                onClick={() => setSelectedImg(index)}
              ></button>
            ))}
          </div>
          <div
            style={{ backgroundImage: `url(${products?.images[selectedImg]})` }}
            className="rounded-2xl h-[521px] w-[422px] bg-cover bg-center"
          ></div>
        </div>

        <div className="mt-[100px] flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <p className="border border-[#2563EB] rounded-xl flex justify-center items-center w-fit px-2 py-1 text-xs font-semibold">
                  {products?.categoryId.name}
                </p>
                <div className="flex text-2xl font-bold items-center">
                  <p>{products?.productName}</p>
                  <Love />
                </div>
                <p>{products?.description}</p>
              </div>
              <Counter
                count={count}
                handleMinusCount={handleMinusCount}
                handlePlusCount={handlePlusCount}
              />
            </div>
            <div className="w-[175px] flex flex-col gap-2">
              <p className="text-xl font-bold">{products?.price}$</p>
              <div onClick={handleAddToCart}>
                <ButtonBlue title="Сагсанд нэмэх" />
              </div>
            </div>
          </div>

          <div className="mt-[50px]">
            <div className="flex gap-4 text-sm">
              <p>Үнэлгээ</p>
              <p
                onClick={() => setIsExtandComment(!isExtandComment)}
                className="cursor-pointer"
              >
                {isExtandComment ? "бүгдийг харах" : "бүгдийг хураах"}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex">
                <Od />
                <div className="flex">
                  4.6<p className="text-[#71717A]">({products?.viewCount})</p>
                </div>
              </div>
              {!isExtandComment && (
                <>
                  <Comments />
                  <NewComment />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="font-bold text-3xl">Холбоотой бараа</p>
        <div className="grid-cols-4 grid max-w-[1040px] mx-auto gap-x-5 gap-y-12 mt-4 mb-[100px]">
          {SlicedProductItems.map((product) => (
            <SmallProduct
              key={product._id}
              price={product.price}
              productName={product.productName}
              images={`url(${product.images[0]})`}
              productId={product._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
