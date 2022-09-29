import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { MobilebackBtn } from "../Modal/BackBtn/MobilebackBtn";
import { Grades } from "./Grades";
import { Textarea } from "./Textarea";

interface ModalStepProps {
  onNextStep: () => void;
  onBackStep: () => void;
}

export function DevPortalForm({ onNextStep, onBackStep }: ModalStepProps) {
  const [devPortalFormMsg, setDevPortalFormMsg] = useState(() => {
    try {
      return String(JSON.parse(localStorage.getItem("DevPortalFormMsg") || ""));
    } catch (error) {
      return "";
    }
  });

  const [devPortalFormGrade, setDevPortalFormGrade] = useState(
    Number(JSON.parse(localStorage.getItem("DevPortalFormGrade") || "0"))
  );

  useEffect(() => {
    localStorage.setItem("DevPortalFormMsg", JSON.stringify(devPortalFormMsg));
  }, [devPortalFormMsg]);

  useEffect(() => {
    localStorage.setItem(
      "DevPortalFormGrade",
      JSON.stringify(devPortalFormGrade)
    );
  }, [devPortalFormGrade]);

  const [isMobile, setMobile] = useState(window.innerWidth < 640);

  const updateMedia = () => {
    setMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
  });

  return (
    <Dialog.Description className="text-center justify-center text-2xl font-light text-lightGray flex flex-col items-center mobile:text-xl">
      <form onSubmit={onNextStep}>
        <span className="mb-10">
          Em uma escala de 0 a 10, quanto você recomendaria o Portal do
          Desenvolvedor para um amigo ou familiar?
        </span>
        <Grades
          value={[devPortalFormGrade]}
          onValueChanged={(value) => setDevPortalFormGrade(Number(value))}
        />
        <Textarea
          onChange={(event) => setDevPortalFormMsg(event.target.value)}
          value={devPortalFormMsg}
          placeholder="Deixe sua opinião e melhorias (opcional)"
        />
        <div className="mobile:flex mobile:justify-between ">
          {isMobile ? <MobilebackBtn onBackStep={onBackStep} /> : ""}
          <button className="max-w-min my-10 bg-firedev-linear rounded-lg py-3 px-10 font-semibold text-white mobile:px-5">
            Próximo
          </button>
        </div>
      </form>
    </Dialog.Description>
  );
}
