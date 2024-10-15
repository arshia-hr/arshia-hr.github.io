
export default function Container(props: { children: React.ReactNode }) {
  return <div className="container w-full p-5 m-auto">{props.children}</div>;
}
