"use client";

import { useUser } from "@/components/context/users/userContext";
import { useEffect } from "react";

export default function UserToggle() {
  const { user, toggleUser } = useUser();

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <button
      className='bg-black cursor-pointer px-2 py-1.5 h-auto rounded-2xl'
      onClick={toggleUser}
    >
      Toggle User : {user.name}
    </button>
  );
}
