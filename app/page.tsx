export default function HomePage() {
  return (
    <main style={{ padding: 40, maxWidth: 1000, margin: "0 auto" }}>
      
      {/* Hero */}
      <section style={{ marginBottom: 60 }}>
        <h1>Healthcare runs on trust. Africa’s systems don’t.</h1>
        <p style={{ fontSize: 18, marginTop: 10 }}>
          HealthFuse is building the digital infrastructure that connects hospitals,
          HMOs, laboratories, pharmacies, and regulators on one secure, unified layer.
        </p>
      </section>

      {/* Problem */}
      <section style={{ marginBottom: 60 }}>
        <h2>The problem</h2>
        <p>
          Healthcare delivery across Africa is fragmented. Hospitals juggle multiple
          verification portals, HMOs rely on manual claims, patients face delayed care,
          and data lives in disconnected silos.
        </p>
      </section>

      {/* Solution */}
      <section style={{ marginBottom: 60 }}>
        <h2>The HealthFuse solution</h2>
        <p>
          HealthFuse provides a single infrastructure layer for patient verification,
          data exchange, claims processing, and system interoperability — built for
          scale, compliance, and reliability.
        </p>
      </section>

      {/* Who we serve */}
      <section style={{ marginBottom: 60 }}>
        <h2>Who we serve</h2>
        <ul>
          <li>Hospitals & Clinics</li>
          <li>Health Maintenance Organizations (HMOs)</li>
          <li>Laboratories</li>
          <li>Pharmacies</li>
          <li>Government & Regulators</li>
        </ul>
      </section>

      {/* Trust */}
      <section style={{ marginBottom: 60 }}>
        <h2>Built for trust</h2>
        <p>
          HealthFuse is designed with security, auditability, and regulatory alignment
          at its core — ensuring patient data integrity and system accountability.
        </p>
      </section>

      {/* CTA */}
      <section>
        <h2>Build the future of healthcare infrastructure</h2>
        <p>
          Whether you’re a provider, payer, or partner — HealthFuse is your gateway
          to a connected healthcare system.
        </p>
      </section>

    </main>
  );
}
