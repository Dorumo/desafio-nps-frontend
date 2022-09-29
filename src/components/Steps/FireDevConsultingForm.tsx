import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { Grades } from "./Grades";
import { Textarea } from "./Textarea";

interface ModalStepProps {
  onNextStep: () => void;
}

export function FireDevConsultingForm({ onNextStep }: ModalStepProps) {
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

  return (
    <Dialog.Description className="text-center justify-center text-2xl font-light text-lightGray flex flex-col items-center">
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
        <button className="max-w-min my-10 enabled:bg-firedev-linear rounded-lg py-3 px-10 font-semibold text-white disabled:bg-[#c4c4c4]">
          Próximo
        </button>
      </form>
    </Dialog.Description>
  );
}
