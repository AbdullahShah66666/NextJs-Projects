import CounterButton from "@/components/features/counter";
import ToDoList from "@/components/features/to-do-list";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "This is the project page.",
};

export default function Project() {
  //  const projectId = 100;

  return (
    <div className='flex flex-col gap-7 items-center justify-start bg-gray-900 min-h-screen w-full'>
      <CounterButton />
      <ToDoList />
    </div>
  );
}
