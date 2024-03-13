import { StickyNavbar } from "@/components/navbar/MyNavBar";
import Movies from "./movies";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="my-32 mx-32 text-center ">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          Welcome to My Movie App
        </h1>
        <p class="mb-6 text-lg font-normal text-teal-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here you find all movies you looking for
        </p>
        <Link
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300  "
          href="/movies"
        >
          To Movies
        </Link>
      </div>
    </main>
  );
}
