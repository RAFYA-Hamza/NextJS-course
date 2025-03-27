import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex p-2 bg-gray-600">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavBar;
