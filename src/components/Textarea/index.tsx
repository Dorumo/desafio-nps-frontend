import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea 
      {...props}
      className=' border-0 py-3 px-4 rounded-xl font-light text-lightGray bg-[#e5e5e5] w-full h-48 placeholder:text-lightGray placeholder:font-light'
    />
  )
}