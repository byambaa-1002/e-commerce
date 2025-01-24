import { Checkbox } from "@/components/ui/checkbox";

type Item = {
  _id: string;
  name: string;
};

type Props = {
  itemList: Item[];
  title: string;
};

const CategoryCheckBox = (props: Props) => {
  const { itemList, title } = props;

  return (
    <div className="flex flex-col gap-4 w-[245px]">
      <h1 className="font-bold">{title}</h1>
      {itemList.map((item) => (
        <div key={item._id} className="flex gap-2 items-center">
          <Checkbox />
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default CategoryCheckBox;
