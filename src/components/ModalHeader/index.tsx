import { BackBtn } from "./BackBtn";
import { CloseBtn } from "./CloseBtn";

export function ModalHeader() {
  return (
    <section className='flex justify-between mb-16'>
      <BackBtn />
      <CloseBtn />
    </section>
  );
}
