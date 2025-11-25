// app/components/header.tsx
'use client'
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const linkData = [
  { name: "Performance", href: "/performance" },
  { name: "Reliability", href: "/reliability" },
  { name: "Scale", href: "/scale" },
];


export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link 
          href="/" 
          className="text-2xl font-bold text-white tracking-tight"
        >
          Home
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {linkData.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-white hover:text-purple-400 transition-colors duration-200 ${
                    pathname === link.href 
                      ? "text-purple-400 font-medium" 
                      : "text-white/90"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* 移动端菜单按钮（可选） */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}