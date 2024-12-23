"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
    const pathname = usePathname();

    return(
        <nav className="bg-purple-100 flex justify-center items-center py-2 " >
           <div> 
            <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/" >
            Home</Link>

            <Link className={`link ${pathname === "/blogs" ? "active" : ""}`} href="/blogs" >
            Blogs</Link>

            <Link className={`link ${pathname === "/dashboard" ? "active" : ""}`} href="/dashboard" >
            Dashboard</Link>

            <Link className={`link ${pathname === "/contactus" ? "active" : ""}`} href="/contactUs" >
            Contact Us</Link>

            <Link className={`link ${pathname === "/about" ? "active" : ""}`} href="/about" >
            About</Link>

           </div>
        </nav>
    );
}