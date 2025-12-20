import Image from "next/image";

export default function Investors() {
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
            <span className="font-bold text-lg text-blue-700 tracking-tight">
              HealthFuse
            </span>
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
                className="block px-3 py-1 text-zinc-800 rounded-lg hover:bg-zinc-100 transition"
              >
                Hospitals
              </a>
            </li>
            <li>
              <a
                href="/investors"
                className="block px-3 py-1 text-zinc-800 rounded-lg bg-blue-50 font-semibold"
              >
                Investors
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="block px-3 py-1 text-zinc-800 rounded-lg hover:bg-zinc-100 transition"
              >
                Blog
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

      <main className="max-w-6xl mx-auto px-6 py-16 flex-1 w-full bg-white flex justify-center">
        <div className="max-w-3xl w-full flex flex-col gap-10">
          <header className="mb-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              Investing in HealthFuse
            </h1>
            <p className="text-lg text-zinc-700">
              Infrastructure is destiny. HealthFuse is building the foundation needed for modern healthcare in Africa: secure, reliable, and open rails connecting every part of the ecosystem.
            </p>
          </header>

          {/* Why Healthcare Infrastructure is Inevitable in Africa */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-black">
              Why Healthcare Infrastructure is Inevitable
            </h2>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 mb-2">
              <li>
                <span className="font-medium">Fragmentation Limits Care:</span> Most healthcare providers, payers, and suppliers operate in disconnected silos. This results in lost data, inefficiencies, and poor outcomes.
              </li>
              <li>
                <span className="font-medium">Digital Transformation Is Underway:</span> Digital health is advancing, but cannot reach scale without foundational rails—secure APIs, shared standards, and reliable identity/data layers.
              </li>
              <li>
                <span className="font-medium">Regulatory Pressures:</span> Governments are demanding improved data stewardship, privacy, and interoperability, making robust infrastructure a basic requirement.
              </li>
              <li>
                <span className="font-medium">Global Precedent:</span> In every mature health system, sustainable growth has followed the creation of connective rails, not stand-alone apps.
              </li>
            </ul>
            <p className="text-zinc-700">
              Systems built in isolation stall; collaborative infrastructure endures.
            </p>
          </section>

          {/* Why Now */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-black">Why Now</h2>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 mb-2">
              <li>
                <span className="font-medium">Demand for Interoperability:</span> Stakeholders across the ecosystem—hospitals, HMOs, labs, government—are recognizing the cost of fragmentation and seeking solutions.
              </li>
              <li>
                <span className="font-medium">Uptake of Digital Health:</span> Clinics and health plans are rapidly digitizing workflows, but face integration barriers.
              </li>
              <li>
                <span className="font-medium">African Context, Global Timing:</span> With urbanization and a rising burden of chronic disease, the need for scalable, efficient health infrastructure is only accelerating.
              </li>
              <li>
                <span className="font-medium">Policy Alignment:</span> Recent policy shifts create a mandate for secure data exchange and compliance, opening a window for native infrastructure platforms.
              </li>
            </ul>
            <p className="text-zinc-700">
              The underlying rails must be built as digital health activities surge—retrofitting after mass adoption will be costly and disruptive.
            </p>
          </section>

          {/* Why HealthFuse */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-black">Why HealthFuse</h2>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 mb-2">
              <li>
                <span className="font-medium">Purpose-Built for African Realities:</span> HealthFuse is engineered for the unique regulatory, connectivity, and workflow demands of African healthcare.
              </li>
              <li>
                <span className="font-medium">Neutral and Secure:</span> We operate as an infrastructure provider, not a competitor to customers—focused on trust, compliance, and seamless integration.
              </li>
              <li>
                <span className="font-medium">Long-Term Partnership:</span> Our model enables health ecosystem stakeholders to innovate on top of shared rails, reducing duplication and promoting sector-wide progress.
              </li>
              <li>
                <span className="font-medium">Experienced Leadership:</span> Our team blends healthcare, technology, and policy expertise to execute on both strategic vision and local details.
              </li>
            </ul>
            <p className="text-zinc-700">
              HealthFuse is committed to enabling gradual, practical change—creating lasting value for patients, providers, and investors.
            </p>
          </section>
        </div>
      </main>

      {/* Investor Call to Action */}
      <section className="w-full py-16 px-6 bg-blue-50 flex justify-center border-t">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Connect with our team
          </h2>
          <p className="mb-6 text-zinc-700 text-base">
            If you share our belief in foundational healthcare infrastructure, let’s explore how you can participate in HealthFuse’s journey.
          </p>
          <a
            href="mailto:invest@healthfuse.ng"
            className="inline-block bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition hover:bg-blue-800"
          >
            Contact Investor Relations
          </a>
        </div>
      </section>

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
            <span className="font-semibold text-zinc-600">
              HealthFuse © {new Date().getFullYear()}
            </span>
          </div>
          <div className="text-zinc-500 text-sm">
            Built for secure, connected healthcare in Africa.
          </div>
        </div>
      </footer>
    </div>
  );
}


