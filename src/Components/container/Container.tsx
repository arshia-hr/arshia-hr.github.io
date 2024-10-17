import { ComponentProps } from "react";

type TContainer = ComponentProps<'div'> & {
  children: React.ReactNode
}
export default function Container({ children,className} : TContainer) {
  return <div className={` md:w-[90%] sm:w-screen p-2 ${className} md:m-auto `}>{children}</div>;
}
