export default function ContactPage() {
    return (
      <main style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
        <h1>Partner with HealthFuse</h1>
  
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
      </main>
    );
  }
  