type Props = { title: string };

export const ButtonBlack = (props: Props) => {
  const { title } = props;
  return (
    <button className="btn btn-outline min-h-9 h-9 rounded-[18px] border-[#2563EB] hover:border-[#2564ebc9] text-white hover:bg-opacity-80 py-2 px-3">
      {title}
    </button>
  );
};
