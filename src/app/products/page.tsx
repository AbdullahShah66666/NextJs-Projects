import Link from 'next/link';

export default function Products() {
  return (
    <div className="flex flex-row justify-evenly bg-black text-black">
      <h1 className="px-4 py-2 bg-green-200">
        <Link href="products/1">Product 1</Link>
      </h1>
      <h1 className="px-4 py-2 bg-green-200">
        <Link href="products/1">Product 1</Link>
      </h1>
      <h1 className="px-4 py-2 bg-green-200">
        <Link href="products/1">Product 1</Link>
      </h1>
    </div>
  );
}
