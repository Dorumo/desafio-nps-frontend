import { ArrowLeft } from "phosphor-react";

interface ModalStepProps {
  onBackStep: () => void;
}

export function BackBtn({ onBackStep }: ModalStepProps) {
  return (
    <button onClick={onBackStep}>
      <ArrowLeft size={28} />
    </button>
  );
}
