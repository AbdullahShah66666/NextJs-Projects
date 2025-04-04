//import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
"use client";

import { useRef, useState, useEffect } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

export default function ToDoList() {
  const inputRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!isDisabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isDisabled]);

  /*  
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      setIsDisabled(false);
      setIsClicked(true);
    }
  };
*/
  
  const handleClick = () => {
    if (inputRef.current) {
      setIsDisabled(false);
    }
    setIsClicked(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      //setIsDisabled(true);
      setIsClicked(false);
    }, 2000);
  };
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-pink-300 text-black h-auto w-full'>
        <h1 className='bg-pink-200 text-center text-2xl font-semibold'>
          To-Do List :-
        </h1>
        <ul className='bg-red-500'>
          <li className='list-disc flex flex-row justify-between gap-2'>
            <span>Learn React</span>
            <CiCircleMinus className='bg-green-200' size={20} />
          </li>
          <li className='list-disc flex flex-row justify-between gap-2'>
            <span>Learn NextJs</span>
            <CiCirclePlus className='bg-green-200' size={20} />
          </li>
        </ul>
      </div>
      <div className='flex w-full h-auto justify-center items-center'>
        <div className='relative'>
          <input
            ref={inputRef}
            disabled={isDisabled}
            //onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder='Add a new task'
            className={`bg-green-400 text-black w-36 transition-all duration-300 ${isClicked ? "bg-green-600 w-64" : ""}`}
          />
          <CiCirclePlus
            className='absolute right-1/50 top-1/2 transform -translate-y-1/2'
            size={20}
            color='black'
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}
