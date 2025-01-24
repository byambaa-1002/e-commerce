type Props = { title: string };

export const ButtonBlue = (props: Props) => {
  const { title } = props;
  return (
    <button className="btn btn-outline min-h-9 h-9 rounded-[18px] border-[#2563EB] bg-blue-600 text-white hover:bg-[#2563EB] hover:bg-opacity-80 py-2 px-3 w-[200px]">
      {title}
    </button>
  );
};
