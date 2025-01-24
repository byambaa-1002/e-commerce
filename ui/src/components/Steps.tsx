type StepsProps = {
  step: number;
  setStep: (step: number) => void;
};

const Steps = ({ step, setStep }: StepsProps) => {
  return (
    <div className="flex justify-center items-center">
      {[1, 2, 3].map((num) => (
        <div className="flex items-center" key={num}>
          <button
            className="border border-3 border-black rounded-2xl text-base py-1 px-3"
            style={{
              backgroundColor: step === num ? "blue" : "transparent",
            }}
            onClick={() => setStep(num)}
          >
            {num}
          </button>
          {num < 3 && (
            <p className="border border-1 flex border-black h-0 w-[80px]"></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Steps;
