import DeliveryInfo from "./DeliveryInfo";
import { ButtonBlue } from "./ButtonBlue";
import { ButtonWhite } from "./ButtonWhite";
import { StepComponentProps } from "./FirstPageBuySteps";

const SecondStep = (props: StepComponentProps) => {
  const { next, prev } = props;
  return (
    <div>
      <div className="flex justify-center bg-zinc-200">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex gap-5">
            <DeliveryInfo />
            <div className="bg-white w-[687px] h-[678px] p-[32px] gap-y-6 rounded-2xl">
              <p className="font-bold">2. Хүргэлтийн мэдээлэл оруулах</p>
              <div>
                <p className="font-bold">Овог:</p>
                <input className="border border-grey bg-white rounded-2xl w-[619px]"></input>
                <p className="font-bold">Нэр:</p>
                <input className="border border-grey bg-white rounded-2xl w-[619px]"></input>
                <p className="font-bold">Утасны дугаар:</p>
                <input className="border border-grey bg-white rounded-2xl w-[619px]"></input>
                <p className="font-bold">Хаяг:</p>
                <input className="border border-grey bg-white rounded-2xl w-[619px] h-[94px]"></input>
                <p className="font-bold">Нэмэлт мэдээлэл:</p>
                <input className="border border-grey bg-white rounded-2xl w-[619px] h-[66px]"></input>
                <p>Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй</p>
              </div>
              <div className="flex justify-between">
                <div onClick={prev}>
                  <ButtonWhite title="Буцах" />
                </div>
                <div onClick={next}>
                  <ButtonBlue title="Төлбөр төлөх" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondStep;
