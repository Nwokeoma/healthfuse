import Button from "@/components/Button";

export default function HospitalsPage() {
  return (
    <>
      <h1 className="mb-5">For Hospitals & Clinics</h1>

      <p className="italic mt-4">
        This page is for hospital administrators, operations leaders, and clinical
        managers responsible for patient verification, claims processing, and
        system coordination.
      </p>

      <p className="mt-4">
        Hospitals today operate across multiple verification portals, manual claim
        processes, and fragmented data systems — creating delays, errors, and
        revenue leakage.
      </p>

      <h2 className="mt-12 mb-4">How HealthFuse helps</h2>

      <ul className="mt-4 list-disc pl-5">
        <li>Single point of patient verification</li>
        <li>Reduced administrative overhead</li>
        <li>Faster claims processing</li>
        <li>Improved patient throughput</li>
      </ul>

      <section className="mt-14">
        <h2 className="mb-4">Start with a pilot</h2>
        <p className="mt-4">
          Hospitals engage with HealthFuse through structured pilots designed to
          validate workflows and demonstrate operational value before wider rollout.
        </p>

        <Button href="/contact">Request a pilot</Button>
      </section>
    </>
  );
}
