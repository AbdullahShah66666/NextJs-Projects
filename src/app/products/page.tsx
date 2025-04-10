import Link from "next/link";

export default function Products() {
  return (
    <div className='flex flex-row justify-evenly bg-gray-400 text-black'>
      <h1 className='px-4 py-2 bg-gray-200'>
        <Link href='products/1'>Only Defined Product</Link>
      </h1>
    </div>
  );
}
