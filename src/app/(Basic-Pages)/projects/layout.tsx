"use client";

import { useUser } from "@/components/context/users/userContext";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

interface ProjectLayoutProps {
  children: ReactNode;
  parallelRoute1: ReactNode;
  parallelRoute2: ReactNode;
}

const transition = { type: "tween", duration: 0.3 };

export default function ProjectLayout({
  children,
  parallelRoute1,
  parallelRoute2,
}: ProjectLayoutProps) {
  const { user } = useUser();
  const [showParallelRoute1, setShowParallelRoute1] = useState<boolean>(
    user?.id === "me"
  );

  useEffect(() => {
    setShowParallelRoute1(user?.id === "me");
  }, [user?.id]);

  return (
    <div className='flex flex-col gap-6 bg-gray-900'>
      <h1 className='py-2 px-4 my-1 bg-black text-white font-semibold text-2xl w-full text-center'>
        Welcome to the Project Page
      </h1>

      <div className='relative min-h-60'>
        <AnimatePresence mode='wait'>
          {showParallelRoute1 ? (
            <motion.div
              key='route1'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              className='absolute top-0 left-0 w-full h-full flex flex-row justify-evenly items-center bg-black text-black'
            >
              {parallelRoute1}
            </motion.div>
          ) : (
            <motion.div
              key='route2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              className='absolute top-0 left-0 w-full h-full flex flex-row justify-evenly items-center bg-black text-black'
            >
              {parallelRoute2}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {children}
    </div>
  );
}
