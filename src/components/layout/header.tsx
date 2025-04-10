import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/products" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className='flex flex-row bg-black justify-evenly mb-2'>
      {navItems.map((item) => (
        //key={`${item.label}-${item.href}`} for repeating links...
        <div key={item.href} className='bg-yellow-300 text-black px-3 py-0.8'>
          <Link href={item.href}>{item.label}</Link>
        </div>
      ))}
    </header>
  );
}

{
  /*
       <div className='bg-yellow-300 px-4 py-2'>
        <Link href='/'>Home</Link>
      </div>
      <div className='bg-yellow-300 px-4 py-2'>
        <Link href='/projects'>Projects</Link>
      </div>
      <div className='bg-yellow-300 px-4 py-2'>
        <Link href='/skills'>Skills</Link>
      </div>
      <div className='bg-yellow-300 px-4 py-2'>
        <Link href='/about'>About</Link>
      </div>
      <div className='bg-yellow-300 px-4 py-2'>
        <Link href='/contact'>Contact</Link>
      </div>
      */
}
