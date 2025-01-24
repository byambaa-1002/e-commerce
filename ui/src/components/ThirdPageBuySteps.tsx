import { ButtonWhite } from "./ButtonWhite";
import { StepComponentProps } from "./FirstPageBuySteps";

const ThirdStep = (props: StepComponentProps) => {
  const { prev } = props;
  return (
    <div>
      <div className="flex justify-center bg-zinc-200">
        <div className="w-[638px] h-[664px] flex flex-col justify-center items-center ">
          <div className="bg-white p-8 border rounded-2xl gap-10">
            <p>3. Төлбөр төлөлт</p>
            <img />
            <div onClick={prev}>
              <ButtonWhite title="Буцах" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdStep;
