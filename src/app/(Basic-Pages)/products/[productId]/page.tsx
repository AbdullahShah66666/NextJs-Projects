"use client";

import * as React from "react";
import { useEffect } from "react";

export default function ProductId({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ query: string; filter: string }>;
}) {
  const { productId } = React.use(params);
  const { query, filter } = React.use(searchParams);

  useEffect(() => {
    console.log(`${productId} ${query} ${filter}`);
  }, [productId, query]);

  return (
    <div className='flex flex-col justify-center items-center bg-gray-500 text-black text-lg'>
      <h1 className='bg-gray-200 px-4 py-2'>Product: {productId}</h1>
    </div>
  );
}
