import * as Dialog from "@radix-ui/react-dialog";

export function SentDescription() {
  return (
    <Dialog.Description className="text-center justify-center text-2xl font-light text-lightGray flex flex-col items-center">
      <span className="mb-10">
        <p>Esta avaliação ajuda a melhorarmos a sua experiência.</p>
        Muito obrigado pela sua participação.
      </span>
      <Dialog.Close className="max-w-min bg-firedev-linear rounded-lg py-3 px-10 font-semibold text-white">
        Concluir
      </Dialog.Close>
    </Dialog.Description>
  );
}
