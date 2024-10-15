
export default function Container(props: { children: React.ReactNode }) {
  return <div className=" w-[90%] p-2 md:m-auto ">{props.children}</div>;
}
