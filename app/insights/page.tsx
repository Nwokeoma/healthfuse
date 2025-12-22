export default function InsightsPage() {
    return (
      <>
        <h1 className="mb-6">Insights</h1>
  
        <p className="text-lg mt-4">
          Reflections on healthcare infrastructure, system design, and the realities
          of building interoperable healthcare systems in emerging markets.
        </p>
  
        <ul className="mt-10 space-y-6">
          <li>
            <a href="/insights/infrastructure" className="underline">
              Healthcare Doesn’t Need More Apps — It Needs Infrastructure
            </a>
            <p className="mt-2 text-sm">
              Why fragmentation, not innovation, is the real bottleneck.
            </p>
          </li>
          <li>
  <a href="/insights/pilots" className="underline">
    Why Healthcare Pilots Fail — And How to Design Them Properly
  </a>
  <p className="mt-2 text-sm">
    What pilots should actually test — and why most fail.
  </p>
</li>

        </ul>
      </>
    );
  }
  