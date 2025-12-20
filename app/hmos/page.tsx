export default function HMOsPage() {
    return (
      <main style={{ padding: 40, maxWidth: 1000, margin: "0 auto" }}>
        <h1>For HMOs & Payers</h1>
  
        <p style={{ marginTop: 20, fontStyle: "italic" }}>
          This page is for HMO executives, claims managers, and payer operations
          teams responsible for authorization, reimbursement, and cost control.
        </p>
  
        <p style={{ marginTop: 20 }}>
          Managing claims across disconnected providers increases fraud risk,
          slows reimbursements, and limits operational visibility.
        </p>
  
        <h2 style={{ marginTop: 40 }}>How HealthFuse helps</h2>
        <ul>
          <li>Real-time patient verification and authorization</li>
          <li>Cleaner, standardized claims data</li>
          <li>Improved fraud detection and auditability</li>
          <li>Better cost visibility and forecasting</li>
        </ul>
  
        <section style={{ marginTop: 60 }}>
          <h2>Start with a pilot</h2>
          <p>
            HMOs engage with HealthFuse through structured pilots focused on
            verification workflows, claims flow, and data visibility —
            enabling rapid validation before broader adoption.
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
  