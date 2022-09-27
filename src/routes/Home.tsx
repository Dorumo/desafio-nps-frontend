import * as Dialog from "@radix-ui/react-dialog";
import { Modal } from "../components/Modal";

export function Home() {
  return (
    <Dialog.Root defaultOpen>
      <Modal />
    </Dialog.Root>
  );
}
