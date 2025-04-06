import { use, useState } from "react";

export default function ToDoList() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to store the input value
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle adding a new task
  const handleAddTask = () => {
    if (inputValue.trim() === "") return; // Don't add empty tasks
    setTasks([...tasks, inputValue]); // Add the new task to the list
    setInputValue(""); // Clear the input field
  };

  // Handle pressing "Enter" to add task
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask(); // Add task when Enter is pressed
    }
  };

  // Handle task deletion
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove the task by index
    setTasks(updatedTasks); // Update the task list
  };

  return (
    <div className='flex flex-col justify-center items-center bg-pink-300 text-black h-auto w-full'>
      <h1 className='bg-pink-200 text-center text-2xl font-semibold'>
        To-Do List:
      </h1>

      {/* Input field to add tasks */}
      <div className='flex justify-center items-center mb-4'>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Trigger adding on Enter key press
          placeholder='Add a new task'
          className='bg-green-400 text-black px-4 py-2'
        />
        <button
          onClick={handleAddTask}
          className='bg-blue-500 text-white ml-2 p-2'
        >
          Add
        </button>
      </div>

      {/* List of tasks */}
      <ul className='list-disc p-4'>
        {tasks.map((task, index) => (
          <li
            key={index}
            className='flex justify-between items-center bg-white text-black p-2 mb-2 rounded-md shadow-md'
          >
            <span>{task}</span>
            <button
              onClick={() => handleDeleteTask(index)}
              className='bg-red-500 text-white p-1 rounded-full'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
