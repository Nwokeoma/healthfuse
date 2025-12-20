import Button from "@/components/Button";

export default function HMOsPage() {
  return (
    <>
      <h1 className="mb-5">For HMOs & Payers</h1>

      <p className="italic mt-4">
        This page is for HMO executives, claims managers, and payer operations teams
        responsible for authorization, reimbursement, and cost control.
      </p>

      <p className="mt-4">
        Managing claims across disconnected providers increases fraud risk, slows
        reimbursements, and limits operational visibility.
      </p>

      <h2 className="mt-12 mb-4">How HealthFuse helps</h2>

      <ul className="mt-4 list-disc pl-5">
        <li>Real-time verification and authorization</li>
        <li>Cleaner, standardized claims data</li>
        <li>Improved fraud detection</li>
        <li>Better cost visibility and forecasting</li>
      </ul>

      <section className="mt-14">
        <h2 className="mb-4">Start with a pilot</h2>
        <p className="mt-4">
          HMOs engage with HealthFuse through pilots focused on verification
          workflows, claims flow, and data visibility.
        </p>

        <Button href="/contact">Request a pilot</Button>
      </section>
    </>
  );
}
