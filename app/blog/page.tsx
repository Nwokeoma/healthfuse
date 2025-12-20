import Image from "next/image";

export default function BlogIndex() {
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
                className="block px-3 py-1 text-zinc-800 rounded-lg hover:bg-zinc-100 transition"
              >
                Hospitals
              </a>
            </li>
            <li>
              <a
                href="/investors"
                className="block px-3 py-1 text-zinc-800 rounded-lg hover:bg-zinc-100 transition"
              >
                Investors
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="block px-3 py-1 text-white bg-blue-700 hover:bg-blue-800 rounded-full transition"
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

      {/* Main Page Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 flex-1 w-full">
        {/* Blog Header */}
        <header className="w-full py-14 bg-blue-50 text-center border-b rounded-lg mb-10">
          <div className="max-w-2xl mx-auto mb-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-blue-800 tracking-tight">
              HealthFuse Insights
            </h1>
            <p className="text-lg md:text-xl text-zinc-700">
              Exploring the future of healthcare infrastructure, systems, access, and interoperability in Africa.
            </p>
          </div>
        </header>

        {/* Blog Article Titles */}
        <section className="max-w-3xl w-full mx-auto">
          <h2 className="text-2xl font-semibold text-black mb-6">Sample Articles</h2>
          <ul className="space-y-6">
            <li className="border border-zinc-200 rounded-lg p-5 shadow-sm bg-white">
              <span className="text-xl font-medium text-blue-700">Why Interoperability is the Key to Modern African Healthcare</span>
              <p className="text-zinc-600 mt-1">A deep dive into how connected systems drive better patient care and efficiency.</p>
            </li>
            <li className="border border-zinc-200 rounded-lg p-5 shadow-sm bg-white">
              <span className="text-xl font-medium text-blue-700">Securing Patient Data: Infrastructure Challenges and Solutions</span>
              <p className="text-zinc-600 mt-1">Addressing data security, privacy, and compliance across the continent.</p>
            </li>
            <li className="border border-zinc-200 rounded-lg p-5 shadow-sm bg-white">
              <span className="text-xl font-medium text-blue-700">Bridging the Digital Divide in African Hospitals</span>
              <p className="text-zinc-600 mt-1">Practical steps for boosting digital health access in underserved regions.</p>
            </li>
            <li className="border border-zinc-200 rounded-lg p-5 shadow-sm bg-white">
              <span className="text-xl font-medium text-blue-700">Building Trust in Health Data Exchange</span>
              <p className="text-zinc-600 mt-1">Why transparency, standards, and governance matter for the future of care.</p>
            </li>
            <li className="border border-zinc-200 rounded-lg p-5 shadow-sm bg-white">
              <span className="text-xl font-medium text-blue-700">Health System Infrastructure: Learning from Around the World</span>
              <p className="text-zinc-600 mt-1">What global models can teach Africa about building resilient health systems.</p>
            </li>
          </ul>
          <div className="mt-12 text-zinc-500 text-center">
            <p>Check back soon for new articles and insight from the HealthFuse team.</p>
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

