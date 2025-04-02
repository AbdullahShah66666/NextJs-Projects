import Link from 'next/link';
import CounterButton from '@/components/counter';
import ToDoList from '@/components/to-do-list';

export default function Project() {
  const projectId = 100;

  return (
    <>
      <h1 className="py-2 px-4 my-1 bg-pink-200 text-white font-semibold text-2xl text-center">
        Welcome to the Project Page
      </h1>
      <div className="flex flex-col flex-grow justify-evenly items-center bg-pink-400 min-h-screen">
        <div className="flex flex-row justify-evenly bg-pink-200 gap-2 items-center w-full h-auto">
          <h1 className="px-4 py-2 bg-green-200 text-black">
            <Link href="">
              <CounterButton />
            </Link>
          </h1>
          <h1 className="px-4 py-2 bg-green-200 text-black">
            <Link href="">Project 2</Link>
          </h1>
          {/* <h1 className="px-4 py-2 bg-green-200">
          <Link href={`projects/${projectId}`}>Project {projectId}</Link>
        </h1> */}
        </div>
      </div>
    </>
  );
}
