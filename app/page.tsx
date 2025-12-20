export default function HomePage() {
  return (
    <>
      <section style={{ marginBottom: 80 }}>
        <h1 style={{ marginBottom: 20 }}>
          Healthcare runs on trust. Infrastructure makes it scale.
        </h1>

        <p style={{ fontSize: 18, marginTop: 15 }}>
          HealthFuse is becoming the unifying digital infrastructure that connects
          hospitals, HMOs, laboratories, pharmacies, and regulators across Africa —
          enabling secure verification, interoperability, and system-wide efficiency.
        </p>
      </section>

      <section>
        <h2 style={{ marginTop: 50, marginBottom: 15 }}>
          The problem
        </h2>

        <p style={{ marginTop: 15 }}>
          Healthcare systems across Africa operate on fragmented digital tools.
          Verification, claims, diagnostics, and reimbursement workflows are often
          disconnected — creating delays, inefficiencies, and loss of trust.
        </p>
      </section>

      <section>
        <h2 style={{ marginTop: 50, marginBottom: 15 }}>
          The HealthFuse approach
        </h2>

        <p style={{ marginTop: 15 }}>
          HealthFuse provides a neutral infrastructure layer that enables healthcare
          institutions to interact securely, consistently, and at scale — without
          replacing existing systems.
        </p>
      </section>

      <section>
        <h2 style={{ marginTop: 50, marginBottom: 15 }}>
          Who HealthFuse serves
        </h2>

        <ul style={{ marginTop: 15 }}>
          <li>Hospitals and clinics</li>
          <li>HMOs and payers</li>
          <li>Laboratories and diagnostics providers</li>
          <li>Pharmacies</li>
          <li>Regulators and government agencies</li>
        </ul>
      </section>

      <section>
        <h2 style={{ marginTop: 50, marginBottom: 15 }}>
          Built for trust
        </h2>

        <p style={{ marginTop: 15 }}>
          HealthFuse is designed with governance, auditability, and data protection
          as first-class concerns — ensuring institutional confidence from day one.
        </p>
      </section>

      <p style={{ marginTop: 40 }}>
        While HealthFuse operates behind the scenes, patients benefit from faster
        access to care, improved coordination, and stronger data protection across
        the healthcare system.
      </p>

      <section style={{ marginTop: 60 }}>
        <a
          href="/contact"
          style={{
            display: "inline-block",
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
