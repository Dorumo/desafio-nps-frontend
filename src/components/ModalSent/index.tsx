import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle } from "phosphor-react";
import { ModalHeader } from "../ModalHeader";

export function ModalSent() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed w-[480px] justify-center bg-white py-12 px-16 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        <ModalHeader />
        <div className="flex justify-center">
          <CheckCircle size={100} color="#3bb46b" weight="fill" />
        </div>
        <Dialog.Title className="my-6 text-center text-4xl font-semibold text-lightGray">
          Sua avaliação foi enviada com sucesso!
        </Dialog.Title>
        <Dialog.Description className="text-center justify-center text-2xl font-light text-lightGray flex flex-col items-center">
          <span className="mb-10">
            <p>Esta avaliação ajuda a melhorarmos a sua experiência.</p>
            Muito obrigado pela sua participação.
          </span>
          <Dialog.Close className="max-w-min bg-firedev-linear rounded-lg py-3 px-10 font-semibold text-white">
            Concluir
          </Dialog.Close>
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
