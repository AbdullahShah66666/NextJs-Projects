import { useState } from 'react';

export default function ButtonForPractice() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button className="py-2 px-4 text-white bg-black" onClick={handleClick}>
      Click To Increment {count}
    </button>
  );
}
