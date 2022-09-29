import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { Grades } from "./Grades";
import { Textarea } from "./Textarea";

interface ModalStepProps {
  onNextStep: () => void;
}

export function FireDevForm({ onNextStep }: ModalStepProps) {
  const [fireDevFormMsg, setFireDevFormMsg] = useState(() => {
    try {
      return String(JSON.parse(localStorage.getItem("FireDevFormMsg") || ""));
    } catch (error) {
      return "";
    }
  });

  const [fireDevFormGrade, setFireDevFormGrade] = useState(
    Number(JSON.parse(localStorage.getItem("FireDevFormGrade") || "0"))
  );

  useEffect(() => {
    localStorage.setItem("FireDevFormMsg", JSON.stringify(fireDevFormMsg));
  }, [fireDevFormMsg]);

  useEffect(() => {
    localStorage.setItem("FireDevFormGrade", JSON.stringify(fireDevFormGrade));
  }, [fireDevFormGrade]);

  return (
    <Dialog.Description className="text-center justify-center text-2xl font-light text-lightGray flex flex-col items-center mobile:text-xl">
      <form onSubmit={onNextStep}>
        <span className="mb-10">
          Em uma escala de 0 a 10, quanto você recomendaria a FireDev para um
          amigo ou familiar?
        </span>
        <Grades
          value={[fireDevFormGrade]}
          onValueChanged={(value) => setFireDevFormGrade(Number(value))}
        />
        <div className="items-start flex flex-col">
          <Textarea
            onChange={(event) => setFireDevFormMsg(event.target.value)}
            value={fireDevFormMsg}
            placeholder="Deixe sua opinião e melhorias"
          />
          <p className="text-[#FF046D] text-xl mobile:text-base">*Obrigatório</p>
        </div>
        <button
          disabled={fireDevFormMsg.length > 10 ? false : true}
          className="max-w-min my-10 enabled:bg-firedev-linear rounded-lg py-3 px-10 font-semibold text-white disabled:bg-[#c4c4c4]"
        >
          Próximo
        </button>
      </form>
    </Dialog.Description>
  );
}
