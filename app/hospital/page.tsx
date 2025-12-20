import Image from "next/image";

export default function HospitalLandingPage() {
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
              <a
                href="/"
                className="block px-3 py-1 text-zinc-800 rounded-lg hover:bg-zinc-100 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/trust"
                className="block px-3 py-1 text-zinc-800 rounded-lg hover:bg-zinc-100 transition"
              >
                Trust
              </a>
            </li>
            <li>
              <a
                href="/hospitals"
                className="block px-3 py-1 text-blue-700 font-semibold rounded-lg bg-blue-50 transition"
              >
                Hospitals
              </a>
            </li>
            <li>
              <a
                href="/partner"
                className="block px-3 py-1 text-white bg-blue-700 hover:bg-blue-800 rounded-full transition"
              >
                Partner
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16 w-full flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 flex flex-col items-center bg-white">
          <div className="max-w-3xl text-center mx-auto">
            <Image
              src="/hospital-hero.svg"
              alt="Hospitals Illustration"
              width={76}
              height={76}
              className="mx-auto mb-5"
              priority
            />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Built for Hospitals, Ready for Africa
            </h1>
            <p className="text-lg md:text-xl text-zinc-700 mb-6 max-w-2xl mx-auto">
              HealthFuse streamlines hospital administration, speeds up insurance processing, and simplifies payments—all so you can focus on quality patient care, not paperwork.
            </p>
          </div>
        </section>

        {/* Pain Points & Solutions */}
        <section className="w-full py-12 md:px-0 bg-zinc-50 border-y">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-black">Reduce Administrative Headaches</h2>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 mb-4">
                <li>
                  <span className="font-medium">No more duplicate data entry:</span> Connect your hospital software to HealthFuse and sync patient, billing, and clinical data automatically.
                </li>
                <li>
                  <span className="font-medium">Digital paperwork:</span> Eliminate missing files, chasing authorizations, and endless emails.
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-black">Faster Insurance Verification</h2>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Instant policy checks:</span> Verify HMO plan coverage in real-time, without waiting days for callbacks.
                </li>
                <li>
                  <span className="font-medium">Clear authorizations:</span> Get approvals and communicate with insurers—all from one platform.
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-black">Improved Claims & Payments</h2>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 mb-4">
                <li>
                  <span className="font-medium">Fast, accurate claims:</span> Submit digital claims, avoid errors, and resolve rejections quickly.
                </li>
                <li>
                  <span className="font-medium">Track payments:</span> Monitor payouts, reduce delays, and reconcile accounts with confidence.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Operational Trust Block */}
        <section className="w-full py-12 md:px-0 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-4">
            <h2 className="text-2xl font-semibold text-black mb-3">Trusted Infrastructure—For Nigerian Hospitals</h2>
            <p className="text-base md:text-lg text-zinc-700 mb-2">
              We know every hospital in Africa juggles heavy admin loads, stretched teams and fast-changing payer requirements. HealthFuse is built for these realities—from plug-and-play APIs for your IT team to human support that responds like a partner, not a vendor.
            </p>
            <ul className="list-disc list-inside text-zinc-700 text-left max-w-lg mx-auto space-y-2 mt-3">
              <li>Secure: Encrypted, compliant, and respects patient privacy</li>
              <li>Interoperable: Works with existing software—no rip-and-replace required</li>
              <li>Local support: African-owned, Africa-focused, ready for your real-world challenges</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 md:px-0 bg-blue-50 flex justify-center border-t">
          <div className="max-w-2xl w-full text-center">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">
              Ready to see HealthFuse in action at your hospital?
            </h2>
            <p className="mb-6 text-zinc-700 text-base">
              Book a demo, ask operational questions, or talk to us about integrating with your workflows. We’re here to help you deliver frictionless patient care.
            </p>
            <a
              href="mailto:correspondence@healthfuse.ng?subject=Hospital%20Demo%20Request"
              className="inline-block bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition hover:bg-blue-800"
            >
              Book a Demo
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t py-8 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-healthfuse.svg"
              alt="HealthFuse Logo"
              width={28}
              height={28}
              className="h-7 w-7"
              priority
            />
            <span className="font-semibold text-zinc-600">HealthFuse © {new Date().getFullYear()}</span>
          </div>
          <div className="text-zinc-500 text-sm text-center md:text-right">
            Built for secure, connected healthcare in Africa.
          </div>
        </div>
      </footer>
    </div>
  );
}

