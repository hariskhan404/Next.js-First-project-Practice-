import "../globals.css";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        <html>
            <body>
                <section className="min-h-screen flex">
                    <div className="w-1/6 bg-gray-800 border-r-2 border-r-gray-700	">
                        <Link className="p-2 text-center w-full block hover:bg-gray-600" href={"/dashboard/settings"}>
                            Settings
                        </Link>

                        <Link className="p-2 text-center w-full block hover:bg-gray-600" href={"/dashboard/profile"}>
                            Profile
                        </Link>
                    </div>
                    <div className="w-2/3">
                        {children}
                    </div>
                </section>
            </body>
        </html>
    );
} 