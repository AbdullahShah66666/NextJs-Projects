import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-red-200">
      <h1 className="py-2 px-4 my-1 bg-blue-200">
        <Link href="/products">Products</Link>
      </h1>
      <h1 className="py-2 px-4 my-1 bg-blue-200">
        <Link href="/products">Products to test Flexbox</Link>
      </h1>
    </div>
  );
}
