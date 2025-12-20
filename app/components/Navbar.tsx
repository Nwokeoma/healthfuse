"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
  <div className="font-semibold text-gray-900">
    HealthFuse
  </div>
  <div className="flex gap-6 text-sm font-medium text-gray-700">
    <Link href="/trust">Trust</Link>
    <Link href="/hospitals">Hospitals</Link>
    <Link href="/investors">Investors</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/partner">Partner</Link>
  </div>
</div>
    </nav>
  );
}
