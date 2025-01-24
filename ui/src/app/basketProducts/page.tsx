"use client";

import FirstStep from "@/components/FirstPageBuySteps";
import SecondStep from "@/components/SecondPageBuySteps";
import Steps from "@/components/Steps";
import ThirdStep from "@/components/ThirdPageBuySteps";
import { useState } from "react";

const BasketProducts = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  if (step === 2) {
    return (
      <>
        <div className="py-[50px]">
          <Steps step={step} setStep={setStep} />
        </div>
        <SecondStep next={handleNextStep} prev={handlePrevStep} />
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <div className="py-[50px]">
          <Steps step={step} setStep={setStep} />
        </div>
        <ThirdStep next={handleNextStep} prev={handlePrevStep} />
      </>
    );
  }
  return (
    <>
      <div className="py-[50px]">
        <Steps step={step} setStep={setStep} />
      </div>
      <FirstStep next={handleNextStep} prev={handlePrevStep} />
    </>
  );
};

export default BasketProducts;
