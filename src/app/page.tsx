/*import dynamic from 'next/dynamic';

const ButtonForPractice = dynamic(
  () => import('../components/ButtonForPractice'),
  {
    ssr: false,
  }
);*/
'use client';
import React from 'react';
import Link from 'next/link';

import ButtonForPractice from './counter';

export default function Home() {
  return (
    <div className="flex-grow flex flex-col justify-center items-center bg-white">
      <h1 className="py-2 px-4 my-1 bg-black">
        <Link href="/products">Products</Link>
      </h1>
      <h1 className="py-2 px-4 my-1 bg-black">
        <Link href="/products">Products to test Flexbox</Link>
      </h1>
      <ButtonForPractice />
    </div>
  );
}
