import * as Dialog from "@radix-ui/react-dialog";
import { ModalSent } from "../components/ModalSent";

export function Sent() {
  return (
    <Dialog.Root defaultOpen>
      <ModalSent />
    </Dialog.Root>
  );
}
