import * as Dialog from "@radix-ui/react-dialog";

import { ArrowLeft } from "phosphor-react";

export function BackBtn() {
  return (
    <Dialog.Close type="button">
      <ArrowLeft size={28} />
    </Dialog.Close>
  );
}
