import Button from "@/components/Button";

export default function InvestorsPage() {
  return (
    <>
      <h1 className="mb-5">Investors</h1>

      <p className="italic mt-4">
        This page is for long-term investors interested in healthcare infrastructure,
        system-level platforms, and durable network effects.
      </p>

      <p className="mt-4">
        Healthcare in Africa is expanding rapidly, yet its digital infrastructure
        remains fragmented. HealthFuse is being built as a unifying layer that enables
        scale, trust, and coordination.
      </p>

      <h2 className="mt-12 mb-4">Why HealthFuse</h2>

      <ul className="mt-4 list-disc pl-5">
        <li>Large, underserved healthcare markets</li>
        <li>Infrastructure-first approach</li>
        <li>Multi-stakeholder network effects</li>
        <li>High switching costs once embedded</li>
      </ul>

      <h2 className="mt-12 mb-4">Why now</h2>

      <p className="mt-4">
        Policy reform, insurance penetration, and provider digitization are creating
        the conditions for shared healthcare infrastructure.
      </p>

      <section className="mt-14">
        <h2 className="mb-4">Engage with HealthFuse</h2>
        <p className="mt-4">
          We engage investors who understand the long-term nature of infrastructure
          and value disciplined execution.
        </p>

        <Button href="/contact">Request a pilot</Button>
      </section>
    </>
  );
}
