"use client";

import { useUser } from "@/components/context/users/userContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function UserMe() {
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

  const handleRefresh = () => {
    console.log("Clicked");
    if (count !== 0) {
      setCount(0);
      console.log("Refreshed");
    }
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, x: -30, scale: 0.4 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 30, scale: 0.4 }}
        transition={{ type: "spring", duration: 0.7 }}
        className='rounded-2xl flex flex-col justify-evenly items-center bg-purple-700 min-w-90 h-auto space-y-4'
      >
        <motion.h1
          key={`refresh-button-${user.id}`}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -5 }}
          transition={{ type: "spring", duration: 2.5 }}
          className='bg-yellow-300 text-purple-800 font-semibold text-xl w-full rounded-t-lg py-2 text-center cursor-pointer'
          onClick={handleRefresh}
        >
          Refresh Counter
        </motion.h1>
        <motion.h1
          key={`user-name-${user.id}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ type: "spring", duration: 2.2 }}
          className='text-2xl text-yellow-200 font-semibold'
        >
          {user.name}
        </motion.h1>
        <motion.h1
          key={`click-count-${user.id}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ type: "spring", duration: 2.2 }}
          className='text-lg text-yellow-200 font-semibold'
        >
          Click Count : {count}
        </motion.h1>
        <motion.button
          key={`count-clicker-${user.id}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          whileTap={{ scale: 1.3, width: "auto" }}
          transition={{ type: "spring", duration: 2.2 }}
          className='cursor-pointer text-lg text-purple-700 bg-yellow-300 font-semibold w-1/2 rounded-xl py-1.5 mb-2'
          onClick={handleCount}
        >
          Click To Count
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
