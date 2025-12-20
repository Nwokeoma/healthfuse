export default function HospitalsPage() {
  return (
    <main style={{ padding: 40, maxWidth: 1000, margin: "0 auto" }}>
      <h1>For Hospitals & Clinics</h1>

      <p style={{ marginTop: 20 }}>
        Hospitals today operate across multiple verification portals, manual
        claim processes, and fragmented data systems — creating delays, errors,
        and revenue leakage.
      </p>

      <h2 style={{ marginTop: 40 }}>How HealthFuse helps</h2>
      <ul>
        <li>Single point of patient verification</li>
        <li>Reduced administrative overhead</li>
        <li>Faster claims processing</li>
        <li>Improved patient throughput</li>
      </ul>

      {/* 👇 PILOT SECTION MUST BE INSIDE THE RETURN */}
      <section style={{ marginTop: 60 }}>
        <h2>Start with a pilot</h2>
        <p>
          HealthFuse works with hospitals and clinics through structured pilot
          programs designed to validate workflows, reduce administrative friction,
          and demonstrate operational value before wider rollout.
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: 20,
            padding: "10px 20px",
            border: "1px solid #000",
          }}
        >
          Request a pilot
        </a>
      </section>
    </main>
  );
}
