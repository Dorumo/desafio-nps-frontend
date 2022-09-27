import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../Button";
import { Grades } from "../Grades";
import { ModalHeader } from "../ModalHeader";
import { Textarea } from "../Textarea";

export function Modal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed h-[800px] w-[640px] justify-center bg-white py-12 px-16 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        <ModalHeader />
        <Dialog.Title className=" my-6 text-center justify-center text-4xl font-semibold text-lightGray">
          Avaliação de satisfação
        </Dialog.Title>
        <Dialog.Description className="text-center justify-center text-2xl font-light text-lightGray flex flex-col items-center">
          <span className='mb-10'>
            Em uma escala de 0 a 10, quanto você recomendaria a FireDev para um
            amigo ou familiar?
          </span>
          <Grades />
          <Textarea placeholder="Deixe sua opinião e melhorias (opcional)" />
          <Button />
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
