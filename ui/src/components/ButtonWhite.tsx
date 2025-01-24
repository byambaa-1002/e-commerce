type Props = { title: string };

export const ButtonWhite = (props: Props) => {
  const { title } = props;
  return (
    <button className="btn btn-outline min-h-9 h-9 w-[200px] rounded-[16px] bg-gray-50 border border-gray-200 hover:bg-opacity-70 py-2 px-3">
      {title}
    </button>
  );
};
