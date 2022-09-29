import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle } from "phosphor-react";

export function SentTitle() {
  return (
    <>
      <div className="flex justify-center">
        <CheckCircle size={100} color="#3bb46b" weight="fill" />
      </div>
      <Dialog.Title className="my-6 text-center text-4xl font-semibold text-lightGray">
        Sua avaliação foi enviada com sucesso!
      </Dialog.Title>
    </>
  );
}
