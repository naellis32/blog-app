import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This form is for demonstration only — nothing is sent to a backend.
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
        Get in touch
      </p>
      <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight">
        Contact
      </h1>
      <p className="mt-3 max-w-xl" style={{ color: "var(--ink-soft)" }}>
        This form doesn't send anywhere — it's here to demonstrate form handling.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-lg rounded-xl border p-6"
        style={{ borderColor: "var(--line)", backgroundColor: "var(--paper-raised)" }}
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-xs font-medium" style={{ color: "var(--ink-soft)" }}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
              style={{ borderColor: "var(--line)", backgroundColor: "var(--paper)", color: "var(--ink)" }}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-medium" style={{ color: "var(--ink-soft)" }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 text-sm outline-none"
              style={{ borderColor: "var(--line)", backgroundColor: "var(--paper)", color: "var(--ink)" }}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-xs font-medium" style={{ color: "var(--ink-soft)" }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border px-3 py-2 text-sm outline-none"
              style={{ borderColor: "var(--line)", backgroundColor: "var(--paper)", color: "var(--ink)" }}
            />
          </div>

          <button
            type="submit"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Send message
          </button>

          {submitted && (
            <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
              Thanks, {formData.name || "friend"} — this is a demo, so nothing was actually sent.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
