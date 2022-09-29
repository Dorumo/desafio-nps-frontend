import * as Dialog from "@radix-ui/react-dialog";

import { X } from "phosphor-react";

export function CloseBtn() {
  return (
    <Dialog.Close type="button">
      <X size={28} />
    </Dialog.Close>
  );
}
