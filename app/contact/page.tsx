"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  // Track page view
  useEffect(() => {
    trackEvent("contact_form_viewed");
  }, []);

  return (
    <main style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
      <h1>Partner with HealthFuse</h1>

      <p className="mt-4 text-sm">
        This form is used to initiate pilot discussions and exploratory
        conversations. There is no obligation or commitment.
      </p>

      <p style={{ marginTop: 20 }}>
        HealthFuse works with hospitals, HMOs, laboratories, pharmacies,
        regulators, and ecosystem partners through structured pilots and
        partnerships.
      </p>

      <form
        action="https://formspree.io/f/abcdwxyz" // 🔁 replace with real Formspree ID
        method="POST"
        style={{ marginTop: 40 }}
        onSubmit={() => trackEvent("contact_form_submitted")}
      >
        {/* Hidden metadata */}
        <input type="hidden" name="source" value="healthfuse-website" />
        <input type="hidden" name="page" value="contact" />

        {/* Name */}
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

        {/* Organization */}
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

        {/* Email */}
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

        {/* Stakeholder type */}
        <div style={{ marginBottom: 20 }}>
          <label>
            I am contacting HealthFuse as a:
            <br />
            <select
              name="stakeholder_type"
              required
              style={{ width: "100%", padding: 8 }}
              onChange={(e) =>
                trackEvent("stakeholder_selected", {
                  stakeholder: e.target.value,
                })
              }
            >
              <option value="">Select one</option>
              <option value="hospital">Hospital / Clinic</option>
              <option value="hmo">HMO / Payer</option>
              <option value="laboratory">Laboratory</option>
              <option value="pharmacy">Pharmacy</option>
              <option value="regulator">Regulator / Government</option>
              <option value="investor">Investor / Partner</option>
            </select>
          </label>
        </div>

        {/* Primary interest */}
        <div style={{ marginBottom: 20 }}>
          <label>
            Primary area of interest:
            <br />
            <select
              name="primary_interest"
              required
              style={{ width: "100%", padding: 8 }}
            >
              <option value="">Select one</option>
              <option value="verification">Verification</option>
              <option value="claims">Claims</option>
              <option value="data">Data sharing</option>
              <option value="pilot">Pilot exploration</option>
              <option value="other">Other / Not sure yet</option>
            </select>
          </label>
        </div>

        {/* Message */}
        <div style={{ marginBottom: 20 }}>
          <label>
            Briefly describe what you’d like to discuss
            <br />
            <textarea
              name="message"
              rows={4}
              required
              style={{ width: "100%", padding: 8 }}
            />
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            border: "1px solid #000",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Request pilot discussion
        </button>
      </form>

      <p style={{ marginTop: 30 }}>
        Prefer email? Reach us directly at{" "}
        <a href="mailto:correspondence@healthfuse.ng">
          correspondence@healthfuse.ng
        </a>
      </p>

      {/* Pilot flow explanation */}
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
