/*import dynamic from 'next/dynamic';

const ButtonForPractice = dynamic(
  () => import('../components/ButtonForPractice'),
  {
    ssr: false,
  }
);*/

import Link from "next/link";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 3000)); //3 sec delay
  return (
    <div className='flex flex-col justify-center items-center bg-gray-500'>
      <h1 className='py-2 px-4 my-1 bg-black'>
        <Link href='/products'>Products</Link>
      </h1>
    </div>
  );
}
