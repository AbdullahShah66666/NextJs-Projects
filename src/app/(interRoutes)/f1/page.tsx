import Link from "next/link";

export default function F1() {
  return (
    <div className='flex flex-col items-center'>
      <h1>Intercepting Routes</h1>
      <Link href={"f1/f2"}>F2</Link>
      <Link href={"./f3"}>F3</Link>
    </div>
  );
}
