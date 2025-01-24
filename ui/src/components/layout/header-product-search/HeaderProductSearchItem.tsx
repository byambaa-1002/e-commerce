type SearchProductItemProps = {
  image: string;
  name: string;
  price: string;
};

export const HeaderSearchProductItem = (props: SearchProductItemProps) => {
  const { image, name, price } = props;

  return (
    <div className="flex rounded-2xl flex-col">
      <div className="rounded-xl flex gap-2 items-center bg-white">
        <img className="h-10 rounded-3xl" src={image} />
        <h2 className="font-bold">{name}</h2>
        <h1 className="font-bold text-base">{price}₮</h1>
      </div>
    </div>
  );
};
