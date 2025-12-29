import Link from "next/link";

export default function InsightsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Insights
        </h1>
        <p className="text-lg text-gray-600">
          Long-form thinking on healthcare infrastructure, digital systems,
          policy, and capital deployment in Africa.
        </p>
      </header>

      {/* Essays */}
      <section className="space-y-10">
        {/* Essay 1 */}
        <article className="border-b border-gray-200 pb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Why Africa’s Healthcare Infrastructure Fails at the System Level
          </h2>
          <p className="text-gray-600 mb-4">
            Healthcare in Africa does not fail because of lack of effort.
            It fails because systems were never designed to scale,
            interoperate, or survive real-world constraints.
          </p>
          <Link
            href="/insights/infrastructure"
            className="text-blue-600 font-medium hover:underline"
          >
            Read essay →
          </Link>
        </article>

        {/* Essay 2 */}
        <article className="border-b border-gray-200 pb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Digital Health Is Not Software — It’s Infrastructure
          </h2>
          <p className="text-gray-600 mb-4">
            Treating digital health as a “product” instead of infrastructure
            is why most deployments collapse after pilot stages.
          </p>
          <span className="text-sm text-gray-400">
            Coming soon
          </span>
        </article>

        {/* Essay 3 */}
        <article>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Why Capital Avoids African Healthcare (and How to Fix It)
          </h2>
          <p className="text-gray-600 mb-4">
            Investors don’t avoid healthcare because of risk —
            they avoid it because signals, data, and exits are unclear.
          </p>
          <span className="text-sm text-gray-400">
            Coming soon
          </span>
        </article>
      </section>
    </main>
  );
}
