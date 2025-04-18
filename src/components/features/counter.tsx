"use client";

import { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  function handleClickForIncrement() {
    setCount(count + 1);
  }

  function handleClickForDecrement() {
    setCount(count - 1);
  }

  return (
    <div className='w-full flex flex-col justify-center items-center gap-3 h-auto bg-gray-200'>
      <div className='flex flex-row gap-2 items-center justify-center h-auto bg-gray-200'>
        <button
          className='cursor-pointer py-2 px-4 text-white bg-black text-xl'
          onClick={handleClickForIncrement}
        >
          Click To Increment
        </button>
        <button
          className='cursor-pointer py-2 px-4 text-white bg-black text-xl'
          onClick={handleClickForDecrement}
        >
          Click To Decrement
        </button>
      </div>
      <p className='cursor-pointer py-2 px-4 bg-black text-white font-semibold text-2xl'>
        Counter Value : {count}
      </p>
    </div>
  );
}
