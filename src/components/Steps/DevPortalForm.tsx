import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Grades } from "./assets/Grades";
import { Textarea } from "./assets/Textarea";
interface ModalStepProps {
  onNextStep: () => void;
}

export function DevPortalForm({ onNextStep }: ModalStepProps) {
  const [message, setMessage] = useState("");

  return (
    <Dialog.Description className="text-center justify-center text-2xl font-light text-lightGray flex flex-col items-center">
      <form onSubmit={onNextStep}>
        <span className="mb-10">
          Em uma escala de 0 a 10, quanto você recomendaria o Portal do
          Desenvolvedor para um amigo ou familiar?
        </span>
        <Grades />
        <Textarea
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          placeholder="Deixe sua opinião e melhorias (opcional)"
        />
        <button className="max-w-min my-10 enabled:bg-firedev-linear rounded-lg py-3 px-10 font-semibold text-white disabled:bg-[#c4c4c4]">
          Próximo
        </button>
      </form>
    </Dialog.Description>
  );
}
