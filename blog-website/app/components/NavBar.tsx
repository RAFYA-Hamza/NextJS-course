import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Hamza RAFYA
          </Link>
        </h1>
        <div
          className="flex flex-row justify-center sm:justify-evenly align-middle
        gap-4 text-white text-4xl lg:text-5xl"
        >
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.youtube.com/"
          >
            <FaYoutube />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.twitter.com/"
          >
            <FaTwitter />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.github.com/"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.youtube.com/"
          >
            <FaLaptop />
          </Link>
        </div>
      </div>
    </nav>
  );
}
