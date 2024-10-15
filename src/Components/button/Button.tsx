import  { ComponentProps } from 'react'
type  TVariant = 'Sucsess' | 'Failed'
type TButton = ComponentProps<'button'>  & {
    variant?: TVariant
}
function Button({children, variant,className, ...rest} : TButton) {
  return (
    <button {...rest}   className={`  hover:scale-[.9]  duration-[.5s] ${checkVariant(variant as TVariant)} p-2 ${className} transition-all  rounded`} >
        {children}
    </button>
  )
}
function checkVariant(variant: TVariant){
    if(variant === 'Sucsess'){
        return ' bg-[#2af464] text-[#d9f3e1]'
    }
    else if(variant === 'Failed'){
        return 'bg-[#da3b04] text-[#d9f3e1]'
    }
    else{
        return 'bg-[#f42adf] text-[#000]'
    }
}
export default Button