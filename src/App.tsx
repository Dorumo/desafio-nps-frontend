import * as Dialog from '@radix-ui/react-dialog'
import { Modal } from './components/Modal';

import "./styles/main.css";

function App() {
  return (
    <>
    <Dialog.Root defaultOpen>
      <Modal />
    </Dialog.Root>
    </>
  )
}

export default App
