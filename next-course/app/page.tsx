"use client";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { Metadata } from "next";
import { useState } from "react";

// import HeavyComponent from "./components/HeavyComponent";

export default function Home() {
  const [isVisible, setVisible] = useState(false);

  return (
    <main>
      <h1>Hello world!</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        show CH
      </button>
    </main>
  );
}

// lazy loadin a client components
// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });
// export default function Home() {
//   const [isVisible, setVisible] = useState(false);

//   return (
//     <main>
//       <h1>Hello world!</h1>
//       <button onClick={() => setVisible(true)}>show CH</button>
//       {isVisible && <HeavyComponent />}
//     </main>
//   );
// }

// export default async function Home() {
//   const session = await getServerSession(authOptions);
//   return (
//     <main>
//       <h1>Home {session && <span>{session.user?.name}</span>}</h1>
//       <Link href="/users">Users</Link>
//       <ProductCard />
//     </main>
//   );
// }

export async function generateMetada(): Promise<Metadata> {
  const product = await fetch("");

  return product.json();
}

// Image optimazation
// import Image from "next/image";
// import myImg from "../public/images/img.png";
// export default function page() {
//   return (
//     <main className="relative h-screen">
//       <Image
//         src="https://bit.ly/react-cover"
//         alt="My image"
//         fill
//         className="object-cover"
//         sizes="(max-width: 468px) 100vw, (max-width: 768px) 50vw, 33vw"
//         quality={100}
//         priority
//       />
//     </main>
//   );
// }
