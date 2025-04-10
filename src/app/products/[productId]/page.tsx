"use client";

import { useSearchParams } from "next/navigation";

export default async function ProductId({
  params,
}: {
  params: { productId: string };
}) {
  const productId = await params.productId;

  return (
    <div className='flex flex-col justify-center items-center bg-gray-500 text-black'>
      <h1 className='bg-gray-200 px-4 py-2'>Product {productId}</h1>
    </div>
  );
}
