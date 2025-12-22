export default function ContactPage() {
    return (
      <main style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
        <h1>Partner with HealthFuse</h1>
        <p className="mt-4 text-sm">
  This form is used to initiate pilot discussions and exploratory conversations.
  There is no obligation or commitment.
</p>

  
        <p style={{ marginTop: 20 }}>
          HealthFuse works with hospitals, HMOs, laboratories, pharmacies,
          and ecosystem partners through structured pilots and partnerships.
        </p>
  
        <form
          action="https://formspree.io/f/abcdwxyz" // 👈 replace with your real link
          method="POST"
          style={{ marginTop: 40 }}
        >
          <div style={{ marginBottom: 20 }}>
            <label>
              Name
              <br />
              <input
                type="text"
                name="name"
                required
                style={{ width: "100%", padding: 8 }}
              />
            </label>
          </div>
  
          <div style={{ marginBottom: 20 }}>
            <label>
              Organization
              <br />
              <input
                type="text"
                name="organization"
                required
                style={{ width: "100%", padding: 8 }}
              />
            </label>
          </div>
  
          <div style={{ marginBottom: 20 }}>
            <label>
              Email
              <br />
              <input
                type="email"
                name="email"
                required
                style={{ width: "100%", padding: 8 }}
              />
            </label>
          </div>
  
          <div style={{ marginBottom: 20 }}>
            <label>
              I’m interested as a:
              <br />
              <select
                name="interest"
                required
                style={{ width: "100%", padding: 8 }}
              >
                <option value="">Select one</option>
                <option value="Hospital">Hospital / Clinic</option>
                <option value="HMO">HMO / Payer</option>
                <option value="Laboratory">Laboratory</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Investor">Investor</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
  
          <div style={{ marginBottom: 20 }}>
            <label>
              Message
              <br />
              <textarea
                name="message"
                rows={4}
                style={{ width: "100%", padding: 8 }}
              />
            </label>
          </div>
  
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              border: "1px solid #000",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
  
        <p style={{ marginTop: 30 }}>
          Prefer email? Reach us directly at{" "}
          <a href="mailto:correspondence@healthfuse.ng">
            correspondence@healthfuse.ng
          </a>
        </p>

        <section style={{ marginTop: 60 }}>
  <h2>How pilots work</h2>

  <ol>
    <li>Initial conversation to understand workflows and objectives</li>
    <li>Definition of a limited-scope pilot</li>
    <li>Technical and operational onboarding</li>
    <li>Pilot execution and evaluation</li>
    <li>Decision on expansion or next steps</li>
  </ol>

  <p style={{ marginTop: 20 }}>
    Pilots are designed to be collaborative, low-risk, and focused on
    real operational outcomes.
  </p>
</section>

      </main>
    );
  }
  