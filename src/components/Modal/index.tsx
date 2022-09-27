import * as Dialog from "@radix-ui/react-dialog";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grades } from "../Grades";
import { ModalHeader } from "../ModalHeader";
import { Textarea } from "../Textarea";

export function Modal() {
  const navigate = useNavigate()

  const [ message, setMessage] = useState('')

  function handleNext() {
    return navigate('/sent')
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed h-[800px] w-[640px] justify-center bg-white py-12 px-16 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        <ModalHeader />
        <Dialog.Title className=" my-6 text-center justify-center text-4xl font-semibold text-lightGray">
          Avaliação de satisfação
        </Dialog.Title>
        <Dialog.Description className="text-center justify-center text-2xl font-light text-lightGray flex flex-col items-center">
          <form onSubmit={handleNext}>
          <span className="mb-10">
            Em uma escala de 0 a 10, quanto você recomendaria a FireDev para um
            amigo ou familiar?
          </span>
          <Grades />
          <Textarea onChange={(event) => setMessage(event.target.value)} value={message} placeholder="Deixe sua opinião e melhorias (opcional)" />
          <button disabled={message.length > 10 ? false : true} className='max-w-min my-10 enabled:bg-firedev-linear rounded-lg py-3 px-10 font-semibold text-white disabled:bg-[#c4c4c4]'>
            Próximo
          </button>
          </form>
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
