import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
type Props = { sizes: string[] };

const SizeSelector = (props: Props) => {
  const { sizes } = props;

  return (
    <ToggleGroup type="single" className="flex items-start justify-start">
      {sizes.map((size, index) => {
        return (
          <ToggleGroupItem
            key={index}
            value={size}
            className="w-8 h-8 border-black rounded-full border text-xs data-[state=on]:bg-[#000000] data-[state=on]:text-white"
            onClick={() => console.log(1)}
          >
            {size}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
};

export default SizeSelector;
