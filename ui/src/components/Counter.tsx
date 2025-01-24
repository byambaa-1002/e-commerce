"use client";
type Props = {
  count: number;
  handlePlusCount: Function;
  handleMinusCount: Function;
};

const Counter = (props: Props) => {
  const { count, handlePlusCount, handleMinusCount } = props;

  return (
    <div className="flex">
      <button
        className="w-8 h-8 border-black rounded-full border text-xs"
        onClick={() => handleMinusCount()}
      >
        -
      </button>
      <p className="w-8 h-8 flex justify-center items-center">{count}</p>
      <button
        className="w-8 h-8 border-black rounded-full border text-xs"
        onClick={() => handlePlusCount()}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
