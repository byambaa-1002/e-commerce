import { useProduct } from "@/app/providers";
import Link from "next/link";

const Hero = () => {
  const { productItems } = useProduct();

  return (
    <Link href={`/product/${productItems[0]?._id}`}>
      <div
        className="w-screen h-[450px] bg-cover flex items-end max-w-screen"
        style={{ backgroundImage: `url(${productItems[0]?.images[0]})` }}
      >
        <div className="max-w-5xl mx-auto container flex flex-col">
          <p className="font-normal text-xl">{productItems[0]?.productName}</p>
          <p className="font-bold text-4xl h-[72px] flex items-center w-auto">
            {productItems[0]?.price}$
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Hero;
