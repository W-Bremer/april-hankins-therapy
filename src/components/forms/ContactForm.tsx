"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "EMDR Therapy",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend in this preview, hand off to the user's email client.
    const subject = encodeURIComponent(
      `New inquiry from ${form.name || "the website"}, ${form.topic}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nInterested in: ${form.topic}\n\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] border border-sage-200 bg-sage-50 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-sage-500" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
          Your email is ready to send
        </h3>
        <p className="mt-2 max-w-sm text-ink-soft">
          Your message opened in your email app, hit send and I&apos;ll get back
          to you within two business days. Prefer to book right now? Use the free
          consult button anytime.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-2xl border border-ink/10 bg-cream-50 px-5 py-3.5 text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-clay-400";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
            Your name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={field}
            placeholder="First name is perfect"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={field}
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-semibold text-ink">
          What&apos;s on your heart?
        </label>
        <select
          id="topic"
          value={form.topic}
          onChange={(e) => setForm({ ...form, topic: e.target.value })}
          className={field}
        >
          {[
            "EMDR Therapy",
            "EMDR Intensives",
            "Perinatal / Maternal Mental Health",
            "Childhood Trauma",
            "Spiritual Trauma & Deconstruction",
            "Sexual Desire & Intimacy",
            "Not sure yet",
          ].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          Anything you&apos;d like me to know
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={field}
          placeholder="A sentence or two is plenty, we'll go deeper on our consult."
        />
      </div>
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay-500 px-7 py-4 text-base font-bold text-cream-50 shadow-soft transition-all hover:bg-clay-600 hover:shadow-lift sm:w-auto"
      >
        Send message
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
      <p className="text-xs text-ink-muted">
        This form opens your email app. Prefer email directly? Reach me at{" "}
        <a href={`mailto:${SITE.email}`} className="font-semibold text-clay-600 underline">
          {SITE.email}
        </a>
        .
      </p>
    </form>
  );
}
