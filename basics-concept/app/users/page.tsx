import getAllUsers from "@/lib/getAllUsers";
import type { Metadata } from "next";
import Link from "next/link";

export const metaData: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  // get users during the build time from the server component

  const userData: Promise<User[]> = getAllUsers();

  const users = await userData;

  console.log("hello");

  const content = (
    <section>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        );
      })}
    </section>
  );
  return content;
}
