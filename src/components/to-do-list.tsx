//import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
"use client";

import { useRef, useState, useEffect } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

export default function ToDoList() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!isDisabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isDisabled]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleAddTask = () => {
    if (inputRef.current) {
      setIsDisabled(false);
    }
    setIsClicked(true);

    if (inputValue.trim() === "") return;
    setTasks([...tasks, inputValue]);
    setInputValue("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
    setTimeout(() => {
      setIsDisabled(true);
    }, 6000);
  };

  return (
    <div className='flex flex-col gap-2 justify-center items-center bg-gray-700 h-auto w-full'>
      <div className='flex flex-col gap-1 justify-center items-center bg-black text-black h-auto w-full'>
        <h1 className='bg-pink-200 text-center text-2xl font-semibold w-full'>
          To-Do List :-
        </h1>
        <div className='flex w-full h-auto justify-center items-center w-full'>
          <div className='relative'>
            <input
              type='text'
              value={inputValue}
              ref={inputRef}
              disabled={isDisabled}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyPress}
              placeholder='Add a new task'
              className={`placeholder:pl-2 placeholder:text-xs placeholder:text-black placeholder:opacity-30 rounded-2xl bg-gray-100 text-black h-10 w-36 transition-all duration-300 ${isClicked ? "placeholder:opacity-40 bg-white w-64 rounded-3xl" : ""}`}
            />
            <CiCirclePlus
              className='absolute right-1/50 top-1/2 transform -translate-y-1/2 icon-thicker'
              size={20}
              color='black'
              //style={{ strokeWidth: 3 }}
              onClick={handleAddTask}
            />
          </div>
        </div>
        <ul className='bg-gray-100 w-auto h-auto p-2 rounded-md w-full'>
          {tasks.map((task, index) => (
            <li
              key={index}
              className='list-disc flex flex-row justify-between gap-2'
            >
              <span className='text-black'>{task}</span>
              <CiCircleMinus
                className='bg-white rounded-full icon-thicker'
                size={20}
                color='black'
                onClick={() => handleDeleteTask(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
