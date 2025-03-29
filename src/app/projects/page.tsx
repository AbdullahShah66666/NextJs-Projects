import Link from 'next/link';

export default function Project() {
  const projectId = 100;

  return (
    <>
      <h1>Welcome to the Project Page</h1>
      <div className="flex flex-row justify-evenly bg-black text-black">
        <h1 className="px-4 py-2 bg-green-200">
          <Link href="projects/1">Project 1</Link>
        </h1>
        <h1 className="px-4 py-2 bg-green-200">
          <Link href="projects/2">Project 2</Link>
        </h1>
        <h1 className="px-4 py-2 bg-green-200">
          <Link href="projects/3">Project 3</Link>
        </h1>
        <h1 className="px-4 py-2 bg-green-200">
          <Link href={`projects/${projectId}`}>Project {projectId}</Link>
        </h1>
      </div>
    </>
  );
}
