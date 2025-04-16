"use client";

import { useUser } from "@/components/context/users/userContext";
import { useEffect, useState } from "react";

export default function ParallelRoute2() {
  const [count, setCount] = useState(0);
  const { user } = useUser();
  const countKey = `count-${user?.id}`;
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleCount = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    const storedCount = localStorage.getItem(countKey);
    const parsedCount = storedCount !== null ? parseInt(storedCount) : 0;

    setCount(parsedCount);
    setHasLoaded(true);
    // console.log("Loaded count", parsedCount, "for key", countKey);
  }, [countKey]);

  useEffect(() => {
    if (!hasLoaded) return;

    localStorage.setItem(countKey, count.toString());

    // console.log("Saved count", count, "for key", countKey);
  }, [count, countKey, hasLoaded]);

  return (
    <div className='rounded-2xl flex flex-col justify-evenly items-center bg-white min-h-40 min-w-50'>
      <h1 className='text-2xl font-semibold'>{user.name}</h1>
      <h1 className='text-lg font-semibold'>Click Count : {count}</h1>
      <button
        className='text-lg text-white font-semibold bg-gray-600 w-9/12 rounded-xl'
        onClick={handleCount}
      >
        Click To Count
      </button>
    </div>
  );
}
