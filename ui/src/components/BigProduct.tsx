import Link from "next/link";

type Products = {
  productName: string;
  price: number;
  img: string;
  productId: string;
};

const BigProduct = (props: Products) => {
  const { productName, price, img, productId } = props;
  return (
    <Link href={`/product/${productId}`}>
      <div
        className=" w-[508px] h-[752px] bg-cover bg-center rounded-2xl flex justify-end"
        style={{ backgroundImage: `${img}` }}
      ></div>
      <div className=" text-start my-2">
        <p className="text-base font-normal leading-6 text-gray-900">
          {productName}
        </p>
        <p className="text-base font-bold leading-6 text-gray-900">{price}$</p>
      </div>
    </Link>
  );
};
export default BigProduct;
