"use client";

import { useLoading } from "@/components/context/loading/loadingContext";

export function GlobalLoader() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='text-white text-2xl'>Loading...</div>
    </div>
  );
}
