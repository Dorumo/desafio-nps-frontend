import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea 
      {...props}
      className='text-2xl mt-7 border-0 py-3 px-4 rounded-xl font-light text-black bg-[#e5e5e5] w-full h-48 placeholder:text-lightGray placeholder:font-light'
    />
  )
}