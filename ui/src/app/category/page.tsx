"use client";
import SmallProduct from "@/components/SmallProduct";
import { useProduct } from "../providers";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

type Item = {
  _id: string;
  name: string;
};

const Category = () => {
  const { productItems } = useProduct();
  const [category, setCategory] = useState([]);
  const [more, setMore] = useState(12);
  const [filteredProducts, setFilteredProducts] = useState(productItems);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/category`);

        setCategory(response.data.category);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchCategory();
  }, []);

  const SlicedProductItems = filteredProducts.slice(0, more);
  return (
    <div className=" max-w-[1040px] flex mx-auto gap-5 mt-[60px] mb-24 w-full">
      <div className="flex flex-col gap-12 w-1/4">
        <div className="flex flex-col gap-4 w-[245px]">
          <h1 className="font-bold w-full justify-center items-center flex">
            Ангилал
          </h1>
          <div
            className="flex gap-2 items-center w-full justify-center"
            onClick={() => setFilteredProducts(productItems)}
          >
            <Button className="w-[150px] h-6 rounded-xl">All</Button>
          </div>
          {category.map((item: Item) => {
            const handleProduct = () => {
              const filtered = productItems.filter((productItem) =>
                productItem?.categoryId?.name.includes(item.name)
              );
              setFilteredProducts(filtered);
            };
            return (
              <div
                key={item._id}
                className="flex gap-2 items-center w-full justify-center"
                onClick={handleProduct}
              >
                <Button className="w-[150px] h-6 rounded-xl">
                  {item.name}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-4/5">
        <div className="grid grid-cols-3 gap-x-5 gap-y-12 ">
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
        <Button
          className={`${filteredProducts.length > more ? "block" : "hidden"}`}
          onClick={() => setMore(more + 12)}
        >
          more
        </Button>
      </div>
    </div>
  );
};
export default Category;
