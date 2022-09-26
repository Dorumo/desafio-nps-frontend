import { BackBtn } from "./BackBtn";
import { CloseBtn } from "./CloseBtn";

export function ModalHeader() {
  return (
    <section className='flex'>
      <BackBtn />
      <CloseBtn />
    </section>
  );
}
