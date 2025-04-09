import Link from "next/link";
import CounterButton from "@/components/counter";
import ToDoList from "@/components/to-do-list";

export default function Project() {
  const projectId = 100;

  return (
    <div className='flex flex-col gap-6 items-center bg-gray-700'>
      <h1 className='py-2 px-4 my-1 bg-black text-white font-semibold text-2xl text-center'>
        Welcome to the Project Page
      </h1>
      <div className='flex flex-col gap-4 items-center justify-evenly bg-gray-700 min-h-screen w-full'>
        <CounterButton />

        <ToDoList />
      </div>

      {/* <h1 className="px-4 py-2 bg-green-200">
          <Link href={`projects/${projectId}`}>Project {projectId}</Link>
        </h1> */}
    </div>
  );
}
