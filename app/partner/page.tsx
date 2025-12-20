"use client";

import { useState } from "react";

export default function PartnerPage() {
  const [form, setForm] = useState({
    orgName: "",
    orgType: "",
    contact: "",
    email: "",
    problem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // You can replace this with any submission logic, e.g., API call
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen w-full bg-white text-black flex flex-col justify-between">
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 md:px-0 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
          Partner with HealthFuse
        </h1>
        <p className="text-zinc-700 mb-8 text-lg">
          HealthFuse is building secure, interoperable health infrastructure for Africa. We believe in working collaboratively with organizations across the healthcare ecosystem—hospitals, payers, healthtech, NGOs, and government—who want to solve real operational, connectivity, and data challenges. Let’s unlock possibilities together.
        </p>
        <section className="bg-blue-50 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Partner Intake Form
          </h2>
          {!submitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="orgName"
                  className="block text-base font-medium text-zinc-900 mb-1"
                >
                  Organization Name
                </label>
                <input
                  id="orgName"
                  name="orgName"
                  type="text"
                  required
                  value={form.orgName}
                  onChange={handleChange}
                  className="w-full border border-zinc-300 rounded-lg px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label
                  htmlFor="orgType"
                  className="block text-base font-medium text-zinc-900 mb-1"
                >
                  Organization Type
                  <span className="block text-xs text-zinc-500">
                    (e.g., Hospital, Healthtech, Insurance, NGO, Government)
                  </span>
                </label>
                <input
                  id="orgType"
                  name="orgType"
                  type="text"
                  required
                  value={form.orgType}
                  onChange={handleChange}
                  className="w-full border border-zinc-300 rounded-lg px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label
                  htmlFor="contact"
                  className="block text-base font-medium text-zinc-900 mb-1"
                >
                  Contact Person
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  value={form.contact}
                  onChange={handleChange}
                  className="w-full border border-zinc-300 rounded-lg px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-zinc-900 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-zinc-300 rounded-lg px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label
                  htmlFor="problem"
                  className="block text-base font-medium text-zinc-900 mb-1"
                >
                  Problem Description
                  <span className="block text-xs text-zinc-500">
                    Briefly describe your current challenge or what you hope to accomplish with HealthFuse.
                  </span>
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  required
                  rows={4}
                  value={form.problem}
                  onChange={handleChange}
                  className="w-full border border-zinc-300 rounded-lg px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition hover:bg-blue-800"
              >
                Submit Partnership Request
              </button>
            </form>
          ) : (
            <div className="text-green-700 text-lg font-medium text-center py-8">
              Thank you for reaching out! <br />
              Our team will review your submission and contact you to explore partnership opportunities.
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t py-8 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-2">
            <img
              src="/logo-healthfuse.svg"
              alt="HealthFuse Logo"
              width={28}
              height={28}
              className="h-7 w-7"
              loading="eager"
            />
            <span className="font-semibold text-zinc-600">
              HealthFuse © {new Date().getFullYear()}
            </span>
          </div>
          <div className="text-zinc-500 text-sm text-center md:text-right">
            Built for secure, connected healthcare in Africa.
          </div>
        </div>
      </footer>
    </div>
  );
}
