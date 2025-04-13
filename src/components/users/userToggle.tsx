"use client";

import { useUser } from "@/components/users/userContext";
import { useEffect } from "react";

export default function UserToggle() {
  const { user, toggleUser } = useUser();

  useEffect(() => {
    console.log({ user });
  }, [user]);

  return (
    <button className='bg-black cursor-pointer' onClick={toggleUser}>
      Toggle User : {user}
    </button>
  );
}
