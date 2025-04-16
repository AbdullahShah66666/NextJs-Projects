"use client";

import { useUser } from "@/components/context/users/userContext";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

interface ProjectLayoutProps {
  children: ReactNode;
  userMe: ReactNode;
  userGuest: ReactNode;
}

const transition = { type: "tween", duration: 0.3 };

export default function ProjectLayout({
  children,
  userMe,
  userGuest,
}: ProjectLayoutProps) {
  const { user } = useUser();
  const [showUserMe, setShowUserMe] = useState<boolean>(user?.id === "me");

  useEffect(() => {
    setShowUserMe(user?.id === "me");
  }, [user?.id]);

  console.log;
  return (
    <div className='flex flex-col gap-3 bg-gray-900 items-center'>
      <h1 className='py-2 px-4 my-1 bg-black text-white font-semibold text-2xl w-full text-center'>
        Welcome to the Project Page
      </h1>
      <AnimatePresence mode='wait'>
        {showUserMe ? (
          <motion.div
            key='userMe'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className='w-full min-h-70 flex flex-row justify-evenly items-center bg-purple-400 text-black'
          >
            {userMe}
          </motion.div>
        ) : (
          <motion.div
            key='userGuest'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className='w-full min-h-70 flex flex-row justify-evenly items-center bg-purple-600 text-black'
          >
            {userGuest}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}
