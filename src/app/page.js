import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-10 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className=" font-bold text-5xl ">Visionary</h1>
      
      <Link href={"/dashboard"}>
      <button className="bg-blue-500 p-2 px-4 rounded text-white " >Dashboard</button>
      </Link>
      <Link href={"/blogs"}>
      <button className="bg-blue-500 p-2 px-4 rounded text-white " >Blogs</button>
      </Link>
      <Link href={"/contactus"}>
      <button className="bg-blue-500 p-2 px-4 rounded text-white " >Contact Us</button>
      </Link>
      <Link href={"/aboutus"}>
      <button className="bg-blue-500 p-2 px-4 rounded text-white " >About Us</button>
      </Link>

    </div>
  );
}
