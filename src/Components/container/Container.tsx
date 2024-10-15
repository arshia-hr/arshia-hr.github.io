
export default function Container(props: { children: React.ReactNode }) {
  return <div className=" md:w-[90%] sm:w-[100vw] p-2 md:m-auto ">{props.children}</div>;
}
