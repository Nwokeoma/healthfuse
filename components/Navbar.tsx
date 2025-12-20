"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-200 bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-blue-700 tracking-tight">
            HealthFuse
          </span>
        </div>
        <ul className="flex gap-4 md:gap-8 items-center text-base font-medium">
          <li>
            <Link
              href="/trust"
              className="block px-2 py-1 text-zinc-800 rounded-md hover:bg-zinc-100 transition"
            >
              Trust
            </Link>
          </li>
          <li>
            <Link
              href="/hospitals"
              className="block px-2 py-1 text-zinc-800 rounded-md hover:bg-zinc-100 transition"
            >
              Hospitals
            </Link>
          </li>
          <li>
            <Link
              href="/investors"
              className="block px-2 py-1 text-zinc-800 rounded-md hover:bg-zinc-100 transition"
            >
              Investors
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block px-2 py-1 text-zinc-800 rounded-md hover:bg-zinc-100 transition"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/partner"
              className="block px-2 py-1 text-zinc-800 rounded-md hover:bg-zinc-100 transition"
            >
              Partner
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
