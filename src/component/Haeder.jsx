"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
    const pathname = usePathname();

    return(
        <nav className="bg-gray-700 h-20 flex justify-between  items-center py-2 " >
           <div className="mx-auto  "> 
            <Link className={`link px-3 ${pathname === "/" ? "active underline " : ""}`} href="/" >
            Home</Link>

            <Link className={`link px-3 ${pathname === "/blogs" ? "active underline " : ""}`} href="/blogs" >
            Blogs</Link>

            <Link className={`link px-3 ${pathname === "/dashboard" ? "active underline " : ""}`} href="/dashboard" >
            Dashboard</Link>

            <Link className={`link px-3 ${pathname === "/contactus" ? "active underline " : ""}`} href="/contactus" >
            Contact Us</Link>

            <Link className={`link px-3 ${pathname === "/aboutus" ? "active underline " : ""}`} href="/aboutus" >
            About</Link>

           </div>

           <div className="p-2">
           <Link className={`link px-4 ${pathname === "/login" ? "active underline " : ""}`} href="/login" >
           Sign-in</Link>
           </div>
        </nav>
    );
}