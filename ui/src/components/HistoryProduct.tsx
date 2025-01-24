type Product = {
  count: number;
  productName: string;
  price: number;
};

const HistoryProduct = (props: Product) => {
  const { productName, count, price } = props;
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <img
          className="rounded-xl h-9 flex-col gap-1 flex"
          src="./Pics/profileImg.png"
        />
        <div>
          <p className="text-xs">{productName}</p>
          <p className="text-xs">
            {count} x {price}
          </p>
        </div>
      </div>
      <p className="text-xs font-bold">{price}₮</p>
    </div>
  );
};

export default HistoryProduct;
