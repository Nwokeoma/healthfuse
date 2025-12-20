export default function HospitalsPage() {
  return (
    <>
      <h1 style={{ marginBottom: 20 }}>
        For Hospitals & Clinics
      </h1>

      <p style={{ marginTop: 15, fontStyle: "italic" }}>
        This page is for hospital administrators, operations leaders,
        and clinical managers responsible for patient verification,
        claims processing, and system coordination.
      </p>

      <p style={{ marginTop: 15 }}>
        Hospitals today operate across multiple verification portals,
        manual claim processes, and fragmented data systems — creating
        delays, errors, and revenue leakage.
      </p>

      <h2 style={{ marginTop: 50, marginBottom: 15 }}>
        How HealthFuse helps
      </h2>

      <ul style={{ marginTop: 15 }}>
        <li>Single point of patient verification</li>
        <li>Reduced administrative overhead</li>
        <li>Faster claims processing</li>
        <li>Improved patient throughput</li>
      </ul>

      <section style={{ marginTop: 60 }}>
        <h2 style={{ marginBottom: 15 }}>
          Start with a pilot
        </h2>

        <p style={{ marginTop: 15 }}>
          Hospitals engage with HealthFuse through structured pilots
          designed to validate workflows and demonstrate operational
          value before wider rollout.
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: 20,
            padding: "12px 24px",
            border: "1px solid #000",
            textDecoration: "none",
          }}
        >
          Request a pilot
        </a>
      </section>
    </>
  );
}
