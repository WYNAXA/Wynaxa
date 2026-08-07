"use client";

import { useState } from "react";

const interestOptions = [
  "Yes, count me in",
  "Yes, but I'd like to talk first",
  "Not this time",
] as const;

const amountOptions = [
  "£100",
  "£250",
  "£500",
  "£1,000",
  "£2,500",
  "£5,000",
  "£10,000",
  "Other",
] as const;

type FormData = {
  name: string;
  email: string;
  phone: string;
  interested: string;
  amount: string;
  customAmount: string;
  questions: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.interested) errors.interested = "Please select an option.";
  if (data.amount === "Other") {
    if (!data.customAmount.trim()) {
      errors.customAmount = "Enter an amount.";
    } else if (Number(data.customAmount) < 100) {
      errors.customAmount = "Minimum amount is £100.";
    }
  }
  return errors;
}

export default function InterestForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    interested: "",
    amount: "",
    customAmount: "",
    questions: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function selectAmount(value: string) {
    if (value !== "Other") {
      setForm((prev) => ({ ...prev, amount: value, customAmount: "" }));
      if (errors.customAmount) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.customAmount;
          return next;
        });
      }
    } else {
      update("amount", value);
    }
  }

  function resolveAmount(): string | null {
    if (!form.amount) return null;
    if (form.amount === "Other") {
      const num = Number(form.customAmount);
      return num >= 100 ? String(num) : null;
    }
    return form.amount;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/founding-supporters/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          interested: form.interested,
          amount: resolveAmount(),
          questions: form.questions.trim() || null,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setSubmitError(
          data?.error ??
            "Something went wrong. Please try again or email investors@wynaxa.com directly."
        );
        setSubmitting(false);
        return;
      }
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or email investors@wynaxa.com directly."
      );
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 px-6 py-12 text-center">
        <p className="text-xl font-semibold text-foreground">
          Thank you. We&rsquo;ll be in touch personally before anything is
          finalised.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="mt-1.5 block w-full rounded-lg border border-gray-300 px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="mt-1.5 block w-full rounded-lg border border-gray-300 px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground"
        >
          Phone{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className="mt-1.5 block w-full rounded-lg border border-gray-300 px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="+353 or +44"
        />
      </div>

      {/* Interest */}
      <fieldset>
        <legend className="block text-sm font-medium text-foreground">
          Are you interested in supporting this round?{" "}
          <span className="text-red-500">*</span>
        </legend>
        <div className="mt-3 space-y-3">
          {interestOptions.map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="interested"
                value={option}
                checked={form.interested === option}
                onChange={(e) => update("interested", e.target.value)}
                className="h-4 w-4 border-gray-300 text-accent focus:ring-accent"
              />
              <span className="text-foreground">{option}</span>
            </label>
          ))}
        </div>
        {errors.interested && (
          <p className="mt-1.5 text-sm text-red-600">{errors.interested}</p>
        )}
      </fieldset>

      {/* Amount — pill buttons */}
      <fieldset>
        <legend className="block text-sm font-medium text-foreground">
          If yes, roughly what amount are you thinking?{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </legend>
        <p className="mt-1 text-sm text-gray-500">
          Anything from &pound;100 upwards. This is indicative only — nothing is
          committed.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {amountOptions.map((option) => (
            <label key={option} className="cursor-pointer">
              <input
                type="radio"
                name="amount"
                value={option}
                checked={form.amount === option}
                onChange={(e) => selectAmount(e.target.value)}
                className="peer sr-only"
              />
              <span className="flex items-center justify-center rounded-lg border-2 border-gray-200 px-4 py-3 text-sm font-semibold text-foreground transition-all peer-checked:border-accent peer-checked:bg-accent/10 peer-checked:text-accent hover:border-gray-300">
                {option}
              </span>
            </label>
          ))}
        </div>

        {/* Custom amount input — revealed when "Other" is selected */}
        {form.amount === "Other" && (
          <div className="mt-4">
            <label
              htmlFor="customAmount"
              className="block text-sm font-medium text-foreground"
            >
              Amount you have in mind (&pound;)
            </label>
            <input
              id="customAmount"
              type="number"
              min={100}
              step={50}
              required
              value={form.customAmount}
              onChange={(e) => update("customAmount", e.target.value)}
              className="mt-1.5 block w-full rounded-lg border border-gray-300 px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:w-48"
              placeholder="750"
            />
            {errors.customAmount && (
              <p className="mt-1.5 text-sm text-red-600">
                {errors.customAmount}
              </p>
            )}
          </div>
        )}
      </fieldset>

      {/* Questions */}
      <div>
        <label
          htmlFor="questions"
          className="block text-sm font-medium text-foreground"
        >
          Anything you&rsquo;d like to know before we come back to you?{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="questions"
          rows={4}
          value={form.questions}
          onChange={(e) => update("questions", e.target.value)}
          className="mt-1.5 block w-full rounded-lg border border-gray-300 px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="Questions, concerns, or anything we should know…"
        />
      </div>

      {/* Submit error */}
      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-lg bg-accent px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-[#0a7a6e] disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
      >
        {submitting ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
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
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Submitting…
          </span>
        ) : (
          "Register My Interest"
        )}
      </button>
    </form>
  );
}
