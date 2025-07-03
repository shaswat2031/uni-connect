import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Student Connect", path: "/student-connect" },
    { name: "Certifications", path: "/certifications" },
    { name: "Talent Marketplace", path: "/talent-marketplace" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-gradient-to-r from-slate-800 to-blue-500 text-white shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center gap-4">
        <div className="bg-white rounded-full p-2 flex items-center justify-center shadow-sm">
          <img
            src="/logo.png"
            alt="University Connect Logo"
            className="w-8 h-8 object-contain"
          />
        </div>
        <span className="font-bold text-2xl bg-gradient-to-br from-white to-gray-200 text-transparent bg-clip-text drop-shadow">
          University Connect
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`text-white no-underline ${
              item.name === "Profile" ? "font-semibold" : "font-normal"
            } px-3 py-2 rounded hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
