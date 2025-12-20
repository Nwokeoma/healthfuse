export default function LabsPage() {
    return (
      <main style={{ padding: 40, maxWidth: 1000, margin: "0 auto" }}>
        <h1>For Laboratories</h1>
  
        <p style={{ marginTop: 20, fontStyle: "italic" }}>
          This page is for diagnostic laboratories, lab managers, and laboratory
          networks responsible for test processing, results delivery, and system
          integration with providers and payers.
        </p>
  
        <p style={{ marginTop: 20 }}>
          Laboratories are central to diagnosis and care decisions, yet many
          operate on disconnected systems that delay results, increase manual
          work, and limit integration with hospitals and payers.
        </p>
  
        <h2 style={{ marginTop: 40 }}>How HealthFuse helps</h2>
        <ul>
          <li>Secure exchange of test orders and results</li>
          <li>Integration with hospitals and HMOs</li>
          <li>Reduced manual reporting and follow-ups</li>
          <li>Improved turnaround times and data traceability</li>
        </ul>
  
        <section style={{ marginTop: 60 }}>
          <h2>Start with a pilot</h2>
          <p>
            Laboratories engage with HealthFuse through structured pilots focused
            on results integration, workflow efficiency, and interoperability
            with existing hospital and payer systems.
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
  