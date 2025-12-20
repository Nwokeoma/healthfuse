import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-sans flex flex-col justify-between">
      {/* Top Navigation */}
      <nav className="w-full bg-white border-b border-zinc-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-healthfuse.svg"
              alt="HealthFuse Logo"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <span className="font-bold text-lg text-blue-700 tracking-tight">HealthFuse</span>
          </div>
          <ul className="flex gap-2 sm:gap-5 md:gap-8 items-center text-base font-medium">
            <li>
              <Link
                href="/"
                className="block px-3 py-1 text-zinc-800 rounded-lg hover:bg-zinc-100 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/trust"
                className="block px-3 py-1 text-zinc-800 rounded-lg hover:bg-zinc-100 transition"
              >
                Trust
              </Link>
            </li>
            <li>
              <Link
                href="/hospitals"
                className="block px-3 py-1 text-zinc-800 rounded-lg hover:bg-zinc-100 transition"
              >
                Hospitals
              </Link>
            </li>
            <li>
              <Link
                href="/investors"
                className="block px-3 py-1 text-zinc-800 rounded-lg hover:bg-zinc-100 transition"
              >
                Investors
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block px-3 py-1 text-zinc-800 rounded-lg hover:bg-zinc-100 transition"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/partner"
                className="block px-3 py-1 text-white bg-blue-700 hover:bg-blue-800 rounded-full transition"
              >
                Partner
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16 w-full flex-1 flex flex-col">
        {/* Hero */}
        <section className="w-full flex flex-col items-center justify-center bg-white pb-16 pt-20">
          <div className="max-w-3xl w-full flex flex-col items-center">
            <Image
              src="/logo-healthfuse.svg"
              alt="HealthFuse Logo"
              width={64}
              height={64}
              className="mx-auto mb-8"
              priority
            />
            <h1 className="text-3xl md:text-4xl font-semibold text-zinc-900 text-center mb-6 tracking-tight">
              Healthcare works only when infrastructure works
            </h1>
            <p className="text-base md:text-lg text-zinc-700 text-center max-w-xl mx-auto mb-0 font-normal">
              Building calm, interoperable healthcare infrastructure for Nigeria and Africa.<br />
              Reliable. Secure. Open.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="w-full py-12 px-6 md:px-0 bg-zinc-50 border-y">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-3 text-black">The Problem: Fragmented Healthcare</h2>
            <p className="text-base md:text-lg text-zinc-700">
              Across Nigeria and Africa, healthcare is deeply fragmented. Hospitals, HMOs, labs, pharmacies, and patients operate in silos, relying on disconnected apps and manual processes. Critical information gets lost, care is delayed, and outcomes suffer.
            </p>
          </div>
        </section>

        {/* Why Infrastructure Fails */}
        <section className="w-full py-12 px-6 md:px-0 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-black mb-3">Why Infrastructure Fails</h2>
            <p className="text-base md:text-lg text-zinc-700">
              Most healthcare solutions are isolated applications. They solve one problem, but can’t talk to other systems. Africa’s health sector lacks shared “rails”—standards and secure APIs that let stakeholders connect, collaborate, and coordinate care seamlessly.
            </p>
          </div>
        </section>

        {/* What HealthFuse Is Building */}
        <section className="w-full py-12 px-6 md:px-0 bg-zinc-50 border-y">
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-black mb-3">What HealthFuse Is Building</h2>
            <p className="text-base md:text-lg text-zinc-700">
              HealthFuse is creating the backbone for African healthcare: a neutral, interoperable infrastructure platform that enables secure health data exchange, digital identity, payments, and more—across every part of the ecosystem.
            </p>
          </div>
        </section>

        {/* Who It's For */}
        <section className="w-full py-12 px-6 md:px-0 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-black mb-6">Who It’s For</h2>
            <div className="flex flex-wrap gap-4 justify-between">
              <div className="flex-1 min-w-[130px] bg-zinc-50 border rounded-lg p-4 shadow-sm text-center">
                <span className="block text-lg font-medium mb-1">Hospitals</span>
              </div>
              <div className="flex-1 min-w-[130px] bg-zinc-50 border rounded-lg p-4 shadow-sm text-center">
                <span className="block text-lg font-medium mb-1">HMOs</span>
              </div>
              <div className="flex-1 min-w-[130px] bg-zinc-50 border rounded-lg p-4 shadow-sm text-center">
                <span className="block text-lg font-medium mb-1">Labs</span>
              </div>
              <div className="flex-1 min-w-[130px] bg-zinc-50 border rounded-lg p-4 shadow-sm text-center">
                <span className="block text-lg font-medium mb-1">Pharmacies</span>
              </div>
              <div className="flex-1 min-w-[130px] bg-zinc-50 border rounded-lg p-4 shadow-sm text-center">
                <span className="block text-lg font-medium mb-1">Patients</span>
              </div>
              <div className="flex-1 min-w-[130px] bg-zinc-50 border rounded-lg p-4 shadow-sm text-center">
                <span className="block text-lg font-medium mb-1">Government</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Compliance */}
        <section className="w-full py-12 px-6 md:px-0 bg-zinc-50 border-y">
          <div className="max-w-3xl mx-auto flex flex-col">
            <h2 className="text-2xl font-semibold text-black mb-3">Trust &amp; Compliance</h2>
            <ul className="list-disc list-inside text-zinc-700 text-base space-y-2">
              <li>
                <span className="font-medium">Security</span>: Best-in-class encryption and authentication, built for African realities.
              </li>
              <li>
                <span className="font-medium">Privacy</span>: Strict adherence to Nigeria's NDPR and global data protection standards.
              </li>
              <li>
                <span className="font-medium">Interoperability</span>: Open APIs and standards powering seamless integration across providers and platforms.
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 px-6 md:px-0 bg-white flex justify-center">
          <div className="max-w-2xl w-full text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to build a health system that works?
            </h2>
            <p className="mb-6 text-zinc-700 text-base">
              Partner with HealthFuse to upgrade your digital health capabilities or help drive the future of African healthcare.
            </p>
            <a
              href="mailto:correspondence@healthfuse.ng"
              className="inline-block bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition hover:bg-blue-800"
            >
              Partner with HealthFuse
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t py-8 mt-auto">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl text-blue-700">HealthFuse</span>
            <span className="hidden md:block text-zinc-400">|</span>
            <span className="text-zinc-600">Lagos, Nigeria</span>
          </div>
          <a
            href="mailto:correspondence@healthfuse.ng"
            className="text-blue-700 underline decoration-blue-300"
          >
            correspondence@healthfuse.ng
          </a>
        </div>
      </footer>
    </div>
  );
}
