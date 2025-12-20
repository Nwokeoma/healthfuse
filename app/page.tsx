import Button from "@/components/Button";

export default function HomePage() {
  return (
    <>
      <section className="mb-20">
        <h1 className="mb-5">
          Healthcare runs on trust. Infrastructure makes it scale.
        </h1>

        <p className="text-lg mt-4">
          HealthFuse is becoming the unifying digital infrastructure that connects
          hospitals, HMOs, laboratories, pharmacies, and regulators across Africa —
          enabling secure verification, interoperability, and system-wide efficiency.
        </p>
      </section>

      <section>
        <h2 className="mt-12 mb-4">The problem</h2>
        <p className="mt-4">
          Healthcare systems across Africa operate on fragmented digital tools.
          Verification, claims, diagnostics, and reimbursement workflows are often
          disconnected — creating delays, inefficiencies, and loss of trust.
        </p>
      </section>

      <section>
        <h2 className="mt-12 mb-4">The HealthFuse approach</h2>
        <p className="mt-4">
          HealthFuse provides a neutral infrastructure layer that enables healthcare
          institutions to interact securely, consistently, and at scale — without
          replacing existing systems.
        </p>
      </section>

      <section>
        <h2 className="mt-12 mb-4">Who HealthFuse serves</h2>
        <ul className="mt-4 list-disc pl-5">
          <li>Hospitals and clinics</li>
          <li>HMOs and payers</li>
          <li>Laboratories and diagnostics providers</li>
          <li>Pharmacies</li>
          <li>Regulators and government agencies</li>
        </ul>
      </section>

      <section>
        <h2 className="mt-12 mb-4">Built for trust</h2>
        <p className="mt-4">
          HealthFuse is designed with governance, auditability, and data protection
          as first-class concerns — ensuring institutional confidence from day one.
        </p>
      </section>

      <p className="mt-10">
        While HealthFuse operates behind the scenes, patients benefit from faster
        access to care, improved coordination, and stronger data protection across
        the healthcare system.
      </p>

      <section className="mt-14">
        <Button href="/contact">Request a pilot</Button>
      </section>
    </>
  );
}
