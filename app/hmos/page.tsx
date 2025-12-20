export default function HMOsPage() {
    return (
      <>
        <h1 style={{ marginBottom: 20 }}>
          For HMOs & Payers
        </h1>
  
        <p style={{ marginTop: 15, fontStyle: "italic" }}>
          This page is for HMO executives, claims managers, and payer
          operations teams responsible for authorization, reimbursement,
          and cost control.
        </p>
  
        <p style={{ marginTop: 15 }}>
          Managing claims across disconnected providers increases fraud risk,
          slows reimbursements, and limits operational visibility.
        </p>
  
        <h2 style={{ marginTop: 50, marginBottom: 15 }}>
          How HealthFuse helps
        </h2>
  
        <ul style={{ marginTop: 15 }}>
          <li>Real-time verification and authorization</li>
          <li>Cleaner, standardized claims data</li>
          <li>Improved fraud detection</li>
          <li>Better cost visibility and forecasting</li>
        </ul>
  
        <section style={{ marginTop: 60 }}>
          <h2 style={{ marginBottom: 15 }}>
            Start with a pilot
          </h2>
  
          <p style={{ marginTop: 15 }}>
            HMOs engage with HealthFuse through pilots focused on
            verification workflows, claims flow, and data visibility.
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
  