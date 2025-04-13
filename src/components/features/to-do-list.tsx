"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { IoMdRefresh } from "react-icons/io";

type Task = string;

export default function ToDoList() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<boolean>(false);

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

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTask();
    } else if (e.key === "Delete" && tasks.length > 0) {
      handleRefreshTasks();
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
    <div className='flex flex-col gap-1 justify-center items-center bg-black text-black h-auto w-full'>
      <h1 className='bg-white text-black text-center text-2xl font-bold w-full'>
        To-Do List :-
      </h1>
      {/* input field for adding tasks */}
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
            className={`pl-3 pr-7 text-sm font-normal placeholder:pl-2 placeholder:text-xs placeholder:text-black placeholder:opacity-30 rounded-2xl bg-gray-100 text-gray-900 h-10 w-50 transition-all duration-300 ${
              isClicked
                ? "placeholder:opacity-40 bg-white w-64 rounded-3xl"
                : ""
            }`}
          />
          <CiCirclePlus
            className='absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer icon-thicker'
            size={22}
            color='black'
            onClick={handleAddTask}
          />
          <IoMdRefresh
            className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer icon-thicker'
            size={23}
            color='black'
            onClick={handleRefreshTasks}
          />
        </div>
      </div>

      <AnimatePresence>
        {tasks.length > 0 && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", width: "auto" }}
            exit={{
              opacity: 0,
              height: 0,
              width: 0,
              marginBottom: 0,
              marginTop: 0,
              paddingTop: 0,
              paddingBottom: 0,
            }}
            transition={{
              duration: 0.2,
              opacity: { duration: 0.4 },
              height: { duration: 0.4 },
              width: { duration: 0.5 },
              marginbottom: { duration: 0.4 },
              margintop: { duration: 0.4 },
              paddingtop: { duration: 0.4 },
              paddingbottom: { duration: 0.4 },
            }}
            className='bg-white text-black rounded-md w-auto max-w-md p-1 mt-1'
          >
            <motion.ul layout className='space-y-2 text-sm font-semibold'>
              <AnimatePresence initial={false}>
                {tasks.map((task, index) => (
                  <motion.li
                    layout
                    key={`task-${index}`}
                    initial={{ opacity: 0, y: -20, width: 0 }}
                    animate={{ opacity: 1, y: 0, width: "auto" }}
                    exit={{
                      opacity: 0,
                      width: 0,
                      height: 0,
                      marginBottom: 0,
                      marginTop: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      opacity: { duration: 0.4 },
                      height: { duration: 0.6 },
                      width: { duration: 0.6 },
                      marginbottom: { duration: 0.5 },
                      margintop: { duration: 0.5 },
                      paddingtop: { duration: 0.5 },
                      paddingbottom: { duration: 0.5 },
                    }}
                    whileHover={{ scale: 1.03 }}
                    className='flex justify-between items-center gap-2 p-2 bg-red-200 overflow-hidden'
                  >
                    <span className='break-words text-black'>{task}</span>
                    <CiCircleMinus
                      className='bg-white rounded-full flex-shrink-0 cursor-pointer icon-thicker'
                      size={20}
                      color='black'
                      onClick={() => handleDeleteTask(index)}
                    />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
