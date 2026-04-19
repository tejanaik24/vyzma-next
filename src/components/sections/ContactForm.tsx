'use client';

import { useState, useId } from "react";

const SERVICES = [
  "AI Chatbots",
  "Workflow Automation",
  "Answer Engine Optimisation",
  "R&D Systems",
  "Full AI Package",
  "Not Sure — Let's Talk",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

// ─── Input wrapper ─────────────────────────────────────────────────────────────

function Field({
  label,
  id,
  required,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[11px] font-mono tracking-widest uppercase text-white/40">
        {label}
        {required && <span className="text-[#007BFF] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg px-4 py-3 text-sm text-white bg-white/[0.04] border border-white/[0.08] placeholder:text-white/20 focus:outline-none focus:border-[#007BFF]/60 focus:bg-white/[0.06] transition-colors duration-200";

// ─── Main component ────────────────────────────────────────────────────────────

export default function ContactForm() {
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  const [form, setForm] = useState<FormState>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and email are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/vyzmaai.in@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          service: form.service,
          message: form.message,
          _subject: `[Vyzma.ai] New lead: ${form.name}`,
          _captcha: "false",
        }),
      });

      if (!res.ok) throw new Error("Network error");

      setSuccess(true);
      setForm(INITIAL);
    } catch {
      setError("Something went wrong. Please email us directly at vyzmaai.in@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-black py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* ── Left: copy ────────────────────────────────────────────── */}
        <div className="lg:sticky lg:top-24">
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-[#007BFF] mb-4">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            Let&apos;s Build
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #007BFF 0%, #00D4FF 40%, #C026D3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Something Smart
            </span>
          </h2>
          <p className="text-white/45 text-base leading-relaxed max-w-md mb-10">
            Tell us about your project and we&apos;ll reach out within 24 hours with a
            tailored plan — no generic proposals, just direct strategy.
          </p>

          <div className="flex flex-col gap-5">
            {[
              { label: "Email", value: "vyzmaai.in@gmail.com", href: "mailto:vyzmaai.in@gmail.com" },
              { label: "Bangalore", value: "Innovation Hub · Sarjapur Road" },
              { label: "Vizag", value: "Growth Hub · MVP Colony" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-[#007BFF] flex-shrink-0" />
                <div>
                  <p className="text-[10px] font-mono tracking-widest uppercase text-white/25 mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/70">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: form ───────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "rgba(255,255,255,0.025)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {success ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
              {/* Checkmark */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(0,123,255,0.12)",
                  border: "1px solid rgba(0,123,255,0.3)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#007BFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">We&apos;ll be in touch!</h3>
                <p className="text-sm text-white/45 max-w-xs">
                  Your email client has opened a draft. Hit send and expect a reply within 24 hours.
                </p>
              </div>
              <button
                onClick={() => setSuccess(false)}
                className="text-xs font-mono tracking-wider uppercase text-[#007BFF] hover:text-white transition-colors duration-200 mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Row: name + email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name" id={id("name")} required>
                  <input
                    id={id("name")}
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Aditya Kumar"
                    value={form.name}
                    onChange={set("name")}
                    className={inputCls}
                  />
                </Field>
                <Field label="Work Email" id={id("email")} required>
                  <input
                    id={id("email")}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={set("email")}
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Row: phone + company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Phone" id={id("phone")}>
                  <input
                    id={id("phone")}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputCls}
                  />
                </Field>
                <Field label="Company" id={id("company")}>
                  <input
                    id={id("company")}
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your Company"
                    value={form.company}
                    onChange={set("company")}
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Service */}
              <Field label="Service Interested In" id={id("service")}>
                <select
                  id={id("service")}
                  name="service"
                  value={form.service}
                  onChange={set("service")}
                  className={inputCls + " appearance-none cursor-pointer"}
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s} className="bg-[#111] text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Message */}
              <Field label="Tell us about your project" id={id("message")}>
                <textarea
                  id={id("message")}
                  name="message"
                  rows={4}
                  placeholder="We're looking to automate our support and reduce response times…"
                  value={form.message}
                  onChange={set("message")}
                  className={inputCls + " resize-none"}
                />
              </Field>

              {/* Error */}
              {error && (
                <p className="text-xs text-[#F43F5E] bg-[#F43F5E]/10 border border-[#F43F5E]/20 rounded-lg px-4 py-2">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="relative w-full py-3.5 px-6 rounded-lg font-semibold text-sm text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                style={{
                  background: loading
                    ? "rgba(0,123,255,0.5)"
                    : "linear-gradient(135deg, #007BFF 0%, #0052CC 100%)",
                  boxShadow: loading ? "none" : "0 0 24px rgba(0,123,255,0.35)",
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  "Send Message →"
                )}
              </button>

              <p className="text-[10px] text-white/20 text-center leading-relaxed">
                We respect your privacy. Your details are never shared with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
