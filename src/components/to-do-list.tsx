'use client';
import {
  PlusIcon,
  MinusIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';

export default function ToDoList() {
  return (
    <div className="flex-grow flex flex-col justify-center items-center bg-pink-300 text-black h-48 w-full">
      <h1 className="bg-pink-200 text-center text-2xl font-semibold">
        To-Do List :
      </h1>
      <ul>
        <li className="list-disc">
          Learn React
          <button className="flex items-center p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
            <PlusCircleIcon className="h-4 w-2 text-black bg-white" />
          </button>
        </li>
        <li className="list-disc">Learn Next.js</li>
        <li className="list-disc">Build a To-Do List App</li>
        <li className="list-disc">Deploy the App</li>
        <li className="list-disc">Share with Friends</li>
      </ul>
    </div>
  );
}
