"use client";

import { trackEvent } from "@/lib/analytics";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
  function handleClick() {
    trackEvent("cta_request_pilot_clicked", {
      destination: href,
    });
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="inline-block mt-5 px-6 py-3 border border-black text-sm font-medium"
    >
      {children}
    </a>
  );
}

  