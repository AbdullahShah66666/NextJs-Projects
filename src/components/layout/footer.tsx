import Link from "next/link";

export default function Footer() {
  return (
    <footer className='flex flex-row bg-black justify-evenly mt-2'>
      {/*{navItems.map((item) => (
        //key={`${item.label}-${item.href}`} for repeating links...
        <div key={item.href} className='bg-yellow-300 text-black px-4 py-2'>
          <Link href={item.href}>{item.label}</Link>
        </div>
      ))}*/}
      <div className='bg-yellow-300 text-black px-3 py-0.8 w-1/2 text-center'>
        Footer
      </div>
    </footer>
  );
}
