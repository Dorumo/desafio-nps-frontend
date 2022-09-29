import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { FormTitle } from "../ModalTitle/FormTitle";
import { SentTitle } from "../ModalTitle/SentTitle";
import { DevPortalForm } from "../Steps/DevPortalForm";
import { FireDevConsultingForm } from "../Steps/FireDevConsultingForm";
import { FireDevForm } from "../Steps/FireDevForm";
import { SentDescription } from "../Steps/SentDescription";

export function Modal() {
  const [isSent, setIsSent] = useState(false);
  const [step, setStep] = useState(0);

  function handleNextStep() {
    const nextStep = step + 1;
    setStep(nextStep);
  }

  function handleSent() {
    setIsSent(true);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed w-[640px] justify-center bg-white py-12 px-16 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        {!isSent ? (
          <>
            <FormTitle />
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
            <SentTitle />
            <SentDescription />
          </>
        )}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
