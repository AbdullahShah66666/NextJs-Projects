//import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
"use client";

import { useRef, useState, useEffect } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoMdRefresh } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

type Task = string;

export default function ToDoList() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  //const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isDisabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isDisabled]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleDeleteTask = (index : number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
      //setShow(true);
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

  const handleRefreshTasks = () => {
    setTimeout(() => {
      setTasks([]);
    }, 500);
    setIsDisabled(true);
    setInputValue("");
    setIsClicked(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        transition={{ duration: 0.15 }}
        className='flex flex-col gap-1 justify-center items-center bg-black text-black h-auto w-full'
      >
        <h1 className='bg-white text-black text-center text-2xl font-bold w-full'>
          To-Do List :-
        </h1>
        {/* input field for adding tasks*/}
        <div className='flex w-auto h-auto justify-center items-center'>
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
              className={`pl-3 pr-7 text-sm font-normal placeholder:pl-2 placeholder:text-xs placeholder:text-black placeholder:opacity-30 rounded-2xl bg-gray-100 text-gray-900 h-10 w-50 transition-all duration-300 ${isClicked ? "placeholder:opacity-40 bg-white w-64 rounded-3xl" : ""}`}
            />
            <CiCirclePlus
              className='absolute right-1/7 top-1/2 transform -translate-y-1/2 icon-thicker'
              size={20}
              color='black'
              //style={{ strokeWidth: 3 }}
              onClick={handleAddTask}
            />
            <IoMdRefresh
              className='absolute right-1/50 top-1/2 transform -translate-y-1/2 icon-thicker'
              size={23}
              color='black'
              onClick={handleRefreshTasks}
            />
          </div>
        </div>
        <AnimatePresence>
          {tasks.length > 0 && (
            <motion.ul
              layout
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                opacity: { duration: 0.3 },
                height: { duration: 0.3 },
              }}
              //whileHover={{ scale: 1.02 }}
              className='space-y-3 bg-white text-black h-auto p-2 rounded-md w-auto max-w-md text-sm font-semibold'
            >
              <AnimatePresence>
                {tasks.map((task, index) => (
                  <motion.li
                    layout
                    key={index}
                    initial={{
                      opacity: 0,
                      height: 0,
                      width: 0,
                      overflow: "hidden",
                      //x: -20,
                      //maxHeight: 0,
                      //maxWidth: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      width: "auto",
                      //x: 0,
                      //maxHeight: 500,
                      //maxWidth: 500,
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      width: 0,
                      //x: -20,
                      overflow: "hidden",
                      //maxHeight: 0,
                      //maxWidth: 0,
                    }}
                    transition={{
                      opacity: { duration: 0.3 },
                      height: { duration: 0.3 },
                      width: { duration: 0.8, delay: 0.3 }, //for smoother text-showing
                      //x: { duration: 0.5 },
                      overflow: { duration: 1 },
                      //minHeight: { duration: 1 },
                      //maxHeight: { duration: 2 },
                      //minWidth: { duration: 2 },
                      //maxWidth: { duration: 4 },
                    }}
                    whileHover={{ scale: 1.03 }}
                    //whileTap={{ scale: 0.98 }}
                    className='w-auto max-md list-disc flex flex-row justify-between gap-2'
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      className='w-auto max-md break-words text-black'
                    >
                      {task}
                    </motion.span>
                    <CiCircleMinus
                      className='bg-white rounded-full icon-thicker'
                      size={20}
                      color='black'
                      onClick={() => handleDeleteTask(index)}
                    />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
