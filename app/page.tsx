export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <section className="mb-20">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Healthcare works only when infrastructure works.
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          HealthFuse is building the digital infrastructure that connects patients,
          hospitals, HMOs, labs, pharmacies, and government into one interoperable system.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-semibold mb-2">Fragmented Systems</h3>
          <p className="text-gray-600">
            Disconnected portals, manual verification, and slow claims break care delivery.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Infrastructure Gap</h3>
          <p className="text-gray-600">
            Healthcare apps exist, but shared digital rails do not.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">HealthFuse</h3>
          <p className="text-gray-600">
            A neutral infrastructure layer enabling access, verification, and payment.
          </p>
        </div>
      </section>
    </main>
  );
}
