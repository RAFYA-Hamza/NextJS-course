"use client";

import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <button className="btn btn-neutral" onClick={() => router.push("/users")}>
      Create
    </button>
  );
};

export default NewUserPage;
