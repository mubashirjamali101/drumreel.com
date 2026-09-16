"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setState("err");
        setMessage(data.error ?? "Could not join. Try again.");
        return;
      }
      setState("ok");
      setEmail("");
    } catch {
      setState("err");
      setMessage("Network error. Try again.");
    }
  }

  if (state === "ok") {
    return (
      <p className="rounded-md border border-line px-4 py-3 text-sm text-cream">
        You’re on the list. We’ll write when Studio opens.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="waitlist-email">
        Email
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11 flex-1 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-cream outline-none backdrop-blur-md placeholder:text-cream-dim focus:border-white/25"
      />
      <button
        type="submit"
        disabled={state === "sending"}
        className="h-11 rounded-md bg-cream px-5 text-sm font-medium text-ink hover:bg-white disabled:opacity-60"
      >
        {state === "sending" ? "Joining…" : "Join waitlist"}
      </button>
      {message ? <p className="w-full text-sm text-red-400 sm:col-span-2">{message}</p> : null}
    </form>
  );
}
