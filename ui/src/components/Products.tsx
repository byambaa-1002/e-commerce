import SmallProduct from "./SmallProduct";
import BigProduct from "./BigProduct";
import { Product } from "@/app/page";

interface ProductsProps {
  datas: Product[];
}
const Products = ({ datas }: ProductsProps) => {
  const slciedDatas = datas.slice(0, 14);
  return (
    <div className="grid grid-cols-4 max-w-[1040px] mx-auto gap-x-5 gap-y-12 mt-4 mb-[100px]">
      {slciedDatas.map((data: Product, index) => {
        return (
          <div
            key={index}
            className={`${
              index !== 6 && index !== 7
                ? "col-span-1 row-span-1"
                : "col-span-2 row-span-2"
            }  `}
          >
            {index !== 6 && index !== 7 ? (
              <SmallProduct
                price={String(data.price)}
                productName={data.productName}
                images={`url(${data.images[0]})`}
                productId={data._id}
              />
            ) : (
              <BigProduct
                price={data.price}
                productName={data.productName}
                img={`url(${data.images[0]})`}
                productId={data._id}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Products;
