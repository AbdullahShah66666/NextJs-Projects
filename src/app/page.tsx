/*import dynamic from 'next/dynamic';

const ButtonForPractice = dynamic(
  () => import('../components/ButtonForPractice'),
  {
    ssr: false,
  }
);*/

import ThemeToggle from "@/components/layout/toggleTheme";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-500'>
      <h1 className='py-2 px-4 my-1 bg-black'>
        <Link href='/products'>Products</Link>
      </h1>
      <h1 className='py-2 px-4 my-1 bg-black'>
        <Link href='/products'>Products to test Flexbox</Link>
      </h1>
      <ThemeToggle />
    </div>
  );
}
