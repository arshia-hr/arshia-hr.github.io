
import React from 'react'
interface TInput{
    name: string;
    value: string,
    handle: (e : React.ChangeEvent<HTMLInputElement>) => void
}
function Input({name,value,handle} : TInput) {
  return (
    <div className="flex  w-[70%] gap-5 flex-col">
    <label  htmlFor="">{name}:</label>
    <input className='rounded border-b-2 border-[#000] p-1  outline-none' placeholder={name} name={name} onChange={(e : React.ChangeEvent<HTMLInputElement>) => handle(e)} value={value}/>
  </div>
  )
}

export default Input