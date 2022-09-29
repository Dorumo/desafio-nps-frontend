import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { DevPortalForm } from "../Steps/DevPortalForm";
import { FireDevConsultingForm } from "../Steps/FireDevConsultingForm";
import { FireDevForm } from "../Steps/FireDevForm";
import { SentContent } from "../Steps/SentContent";
import { BackBtn } from "./BackBtn";
import { CloseBtn } from "./CloseBtn";

export function Modal() {
  const [isSent, setIsSent] = useState(
    Boolean(JSON.parse(localStorage.getItem("isSent") || "false"))
  );

  const [step, setStep] = useState(
    Number(JSON.parse(localStorage.getItem("step") || "0"))
  );

  useEffect(() => {
    localStorage.setItem("isSent", JSON.stringify(isSent));
  }, [isSent]);

  useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step));
  }, [step]);

  function handleNextStep() {
    const nextStep = step + 1;
    setStep(nextStep);
  }

  function handleBackStep() {
    const backStep = step - 1;
    setStep(backStep);
  }

  function handleSent() {
    console.log(
      "FireDevFormGrade: ",
      String(JSON.parse(localStorage.getItem("FireDevFormGrade") || ""))
    );
    console.log(
      "FireDevFormMsg: ",
      String(JSON.parse(localStorage.getItem("FireDevFormMsg") || ""))
    );
    console.log(
      "DevPortalFormGrade: ",
      String(JSON.parse(localStorage.getItem("DevPortalFormGrade") || ""))
    );
    console.log(
      "DevPortalFormMsg: ",
      String(JSON.parse(localStorage.getItem("DevPortalFormMsg") || ""))
    );
    console.log(
      "FireDevConsultingFormGrade: ",
      String(
        JSON.parse(localStorage.getItem("FireDevConsultingFormGrade") || "")
      )
    );
    console.log(
      "FireDevConsultingFormMsg: ",
      String(JSON.parse(localStorage.getItem("FireDevConsultingFormMsg") || ""))
    );
    setIsSent(true);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed max-w-[680px] justify-center bg-white py-12 px-16 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        <header className="flex justify-between">
          {step > 0 && !isSent ? (
            <BackBtn onBackStep={handleBackStep} />
          ) : (
            <div></div>
          )}
          <CloseBtn />
        </header>
        {!isSent ? (
          <>
            <Dialog.Title className=" my-6 text-center justify-center text-4xl font-semibold text-lightGray">
              Avaliação de satisfação
            </Dialog.Title>
            {step === 0 ? (
              <FireDevForm onNextStep={handleNextStep} />
            ) : step === 1 ? (
              <DevPortalForm onNextStep={handleNextStep} />
            ) : (
              <FireDevConsultingForm onNextStep={handleSent} />
            )}
          </>
        ) : (
          <>
            <SentContent />
          </>
        )}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
