import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex gap-2 p-2 bg-gray-600">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      <Link href="/api/auth/signin">Login</Link>
    </div>
  );
};

export default NavBar;
