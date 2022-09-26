import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../Button";
import { Textarea } from "../Textarea";

export function Modal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-white py-8 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-5xl font-semibold text-lightGray">
          Avaliação de satisfação
        </Dialog.Title>
        <Dialog.Description className='text-3xl font-light text-lightGray flex flex-col items-center justify-center'>
          Em uma escala de 0 a 10, quanto você recomendaria a FireDev para um
          amigo ou familiar?     
          <Textarea placeholder='Deixe sua opinião e melhorias (opcional)' />
          <Button />
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
