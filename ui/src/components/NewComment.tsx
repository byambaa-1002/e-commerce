import { ButtonBlue } from "./ButtonBlue";
import Star from "./Star";

const NewComment = () => {
  return (
    <div className="w-[511px] h-[294px] bg-gray-200 rounded-xl p-6 gap-6 flex flex-col">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-sm">Одоор үнэлэх:</p>
        <div className="flex">
          <Star />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium text-sm ">Сэтгэгдэл үлдээх:</p>
        <textarea
          className="bg-white w-[463px] h-[94px] rounded-md py-2 px-3"
          placeholder="Энд бичнэ үү"
        ></textarea>
      </div>
      <div className="w-[121px]">
        <ButtonBlue title="Үнэлэх" />
      </div>
    </div>
  );
};
export default NewComment;
