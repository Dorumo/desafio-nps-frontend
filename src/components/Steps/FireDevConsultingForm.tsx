import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { MobilebackBtn } from "../Modal/BackBtn/MobilebackBtn";
import { Grades } from "./Grades";
import { Textarea } from "./Textarea";

interface ModalStepProps {
  onNextStep: () => void;
  onBackStep: () => void;
}

export function FireDevConsultingForm({
  onNextStep,
  onBackStep,
}: ModalStepProps) {
  const [fireDevConsultingFormMsg, setFireDevConsultingFormMsg] = useState(
    () => {
      try {
        return String(
          JSON.parse(localStorage.getItem("FireDevConsultingFormMsg") || "")
        );
      } catch (error) {
        return "";
      }
    }
  );

  const [fireDevConsultingFormGrade, setFireDevConsultingFormGrade] = useState(
    Number(
      JSON.parse(localStorage.getItem("FireDevConsultingFormGrade") || "0")
    )
  );

  useEffect(() => {
    localStorage.setItem(
      "FireDevConsultingFormMsg",
      JSON.stringify(fireDevConsultingFormMsg)
    );
  }, [fireDevConsultingFormMsg]);

  useEffect(() => {
    localStorage.setItem(
      "FireDevConsultingFormGrade",
      JSON.stringify(fireDevConsultingFormGrade)
    );
  }, [fireDevConsultingFormGrade]);

  const [isMobile, setMobile] = useState(window.innerWidth < 640);

  const updateMedia = () => {
    setMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
  });

  return (
    <Dialog.Description className="text-center justify-center text-2xl font-light text-lightGray flex flex-col items-center mobile:text-xl">
      <form onSubmit={onNextStep}>
        <span className="mb-10">
          Em uma escala de 0 a 10, quanto você recomendaria a consultoria
          Firedev para a sua empresa?
        </span>
        <Grades
          value={[fireDevConsultingFormGrade]}
          onValueChanged={(value) =>
            setFireDevConsultingFormGrade(Number(value))
          }
        />
        <Textarea
          onChange={(event) => setFireDevConsultingFormMsg(event.target.value)}
          value={fireDevConsultingFormMsg}
          placeholder="Deixe sua opinião e melhorias (opcional)"
        />
        <div className="mobile:flex mobile:justify-between ">
          {isMobile ? <MobilebackBtn onBackStep={onBackStep} /> : ""}
          <button className="max-w-min my-10 bg-firedev-linear rounded-lg py-3 px-10 font-semibold text-white mobile:px-5">
            Próximo
          </button>
        </div>
      </form>
    </Dialog.Description>
  );
}
