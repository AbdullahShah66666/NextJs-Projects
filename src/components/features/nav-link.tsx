// components/NavLink.tsx
"use client";

import { useLoading } from "@/components/context/loading/loadingContext";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className }: Props) {
  const { startLoading } = useLoading();

  return (
    <Link
      href={href}
      onClick={startLoading}
      className={className || "hover:text-gray-500"}
    >
      {children}
    </Link>
  );
}
