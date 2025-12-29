"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function InfrastructureInsightPage() {
  // Track insight view
  useEffect(() => {
    trackEvent("insight_opened", {
      article: "healthcare_infrastructure",
    });
  }, []);

  return (
    <main style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <article>
        <h1>Healthcare Needs Infrastructure, Not Just Software</h1>

        <p style={{ marginTop: 20, fontStyle: "italic" }}>
          Why verification, claims, and data exchange must be treated as shared
          infrastructure — not isolated tools.
        </p>

        <p style={{ marginTop: 30 }}>
          Across many healthcare systems, especially in emerging markets,
          digital transformation has focused heavily on applications: hospital
          management systems, HMO portals, pharmacy tools, and lab software.
          Each system solves a local problem — but collectively, they introduce
          fragmentation.
        </p>

        <p style={{ marginTop: 20 }}>
          Hospitals verify patients on one platform, submit claims on another,
          exchange data manually, and reconcile payments weeks or months later.
          The result is operational friction, delayed care, revenue leakage,
          and distrust across the ecosystem.
        </p>

        <h2 style={{ marginTop: 40 }}>The infrastructure gap</h2>

        <p style={{ marginTop: 20 }}>
          What’s missing is not more software — it’s shared infrastructure.
          Infrastructure is what allows independent actors to interoperate
          securely, consistently, and at scale.
        </p>

        <p style={{ marginTop: 20 }}>
          In healthcare, this means common rails for identity verification,
          eligibility checks, claims flow, and trusted data exchange — regardless
          of which hospital, HMO, laboratory, or pharmacy is involved.
        </p>

        <h2 style={{ marginTop: 40 }}>Why infrastructure thinking matters</h2>

        <ul style={{ marginTop: 20 }}>
          <li>It reduces duplicated integrations across institutions</li>
          <li>It standardizes workflows without forcing uniform software</li>
          <li>It lowers operational cost while improving trust</li>
          <li>It enables regulation, oversight, and analytics by design</li>
        </ul>

        <p style={{ marginTop: 20 }}>
          Most healthcare systems fail to scale digitally because they attempt
          to connect institutions pair-by-pair. Infrastructure flips this
          model — each participant integrates once, and interoperability
          follows.
        </p>

        <h2 style={{ marginTop: 40 }}>HealthFuse’s approach</h2>

        <p style={{ marginTop: 20 }}>
          HealthFuse is designed as infrastructure first. We focus on the
          connective tissue: verification, claims coordination, and secure data
          exchange — allowing hospitals and payers to keep their existing
          systems while gaining interoperability.
        </p>

        <p style={{ marginTop: 20 }}>
          By starting with pilots, we validate workflows in real environments,
          align incentives across stakeholders, and build trust before scale.
        </p>

        <h2 style={{ marginTop: 40 }}>Looking ahead</h2>

        <p style={{ marginTop: 20 }}>
          Healthcare transformation will not be driven by the next standalone
          application. It will be driven by infrastructure that quietly,
          reliably, and securely enables collaboration across the ecosystem.
        </p>

        <p style={{ marginTop: 20 }}>
          The question is no longer whether infrastructure is needed — but who
          will build it thoughtfully, inclusively, and sustainably.
        </p>
      </article>
    </main>
  );
}
