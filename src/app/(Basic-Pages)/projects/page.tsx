import CounterButton from "@/components/features/counter";
import ToDoList from "@/components/features/to-do-list";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "This is the project page.",
};

export default function Project() {
  //  const projectId = 100;

  return (
    <div className='flex flex-col gap-10 items-center justify-start bg-gray-900 min-h-screen w-full'>
      <CounterButton />
      <ToDoList />
      <h1 className='py-2 px-4 w-full text-center text-xl bg-black'>
        <Link href='./slow'>Slow Page</Link>
      </h1>
    </div>
  );
}
