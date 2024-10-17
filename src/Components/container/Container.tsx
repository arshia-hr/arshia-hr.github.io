
export default function Container(props: { children: React.ReactNode }) {
  return <div className=" md:w-[90%] sm:w-screen p-2 md:m-auto ">{props.children}</div>;
}
