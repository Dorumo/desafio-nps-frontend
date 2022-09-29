interface ModalStepProps {
  onBackStep: () => void;
}

export function MobilebackBtn({ onBackStep }: ModalStepProps) {
  return (
    <button
      onClick={onBackStep}
      className="max-w-min my-10 bg-transparent border-2 border-[#333333] rounded-lg py-3 font-semibold text-lightGray px-7"
    >
      Voltar
    </button>
  );
}
