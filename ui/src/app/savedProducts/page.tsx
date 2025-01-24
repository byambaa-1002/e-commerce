import SavedProduct from "@/components/SavedProduct";

const SavedProducts = () => {
  return (
    <div className="container mx-auto flex flex-col w-[622px] h-[472px] gap-4">
      <p className="font-bold text-xl">
        Хадгалсан бараа &apos; array.lengt coun &apos;t
      </p>
      <div className="flex justify-center items-center flex-col gap-4">
        <SavedProduct />
        <SavedProduct />
        <SavedProduct />
      </div>
    </div>
  );
};
export default SavedProducts;
