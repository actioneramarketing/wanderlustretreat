"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { inquirySection } from "@/data/content";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  stateRegion: string;
  country: string;
  drawing: string;
  revivalArea: string;
  attendingWith: string;
  questions: string;
  consent: boolean;
  company: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  stateRegion: "",
  country: "",
  drawing: "",
  revivalArea: "",
  attendingWith: "",
  questions: "",
  consent: false,
  company: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (!values.city.trim()) errors.city = "City is required.";
  if (!values.stateRegion.trim()) {
    errors.stateRegion = "State or region is required.";
  }
  if (!values.country.trim()) errors.country = "Country is required.";
  if (!values.drawing.trim() || values.drawing.trim().length < 20) {
    errors.drawing = "Please share a bit more about what is drawing you (at least 20 characters).";
  }
  if (!values.revivalArea) {
    errors.revivalArea = "Please select an area.";
  }
  if (!values.attendingWith.trim()) {
    errors.attendingWith =
      "Please tell us whether you are considering attending alone or with someone.";
  }
  if (!values.consent) {
    errors.consent =
      "Please acknowledge that this form is an inquiry, not a reservation.";
  }

  return errors;
}

export function InquiryForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setFormError(null);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        configured?: boolean;
      };

      if (!response.ok) {
        setFormError(
          data.error ||
            "Something went wrong while sending your request. Please try again.",
        );
        return;
      }

      router.push("/inquiry/success");
    } catch {
      setFormError(
        "Unable to reach the server. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="invitation" className="section-pad bg-cream-dark">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            heading={inquirySection.heading}
            description={inquirySection.copy}
            className="mb-12"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="relative rounded-sm border border-[var(--line)] bg-cream p-6 sm:p-10 lg:p-12"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <Field
                id="firstName"
                label="First name"
                value={values.firstName}
                error={errors.firstName}
                onChange={(value) => update("firstName", value)}
                autoComplete="given-name"
                required
              />
              <Field
                id="lastName"
                label="Last name"
                value={values.lastName}
                error={errors.lastName}
                onChange={(value) => update("lastName", value)}
                autoComplete="family-name"
                required
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={values.email}
                error={errors.email}
                onChange={(value) => update("email", value)}
                autoComplete="email"
                required
              />
              <Field
                id="phone"
                label="Phone"
                type="tel"
                value={values.phone}
                error={errors.phone}
                onChange={(value) => update("phone", value)}
                autoComplete="tel"
                required
              />
              <Field
                id="city"
                label="City"
                value={values.city}
                error={errors.city}
                onChange={(value) => update("city", value)}
                autoComplete="address-level2"
                required
              />
              <Field
                id="stateRegion"
                label="State or region"
                value={values.stateRegion}
                error={errors.stateRegion}
                onChange={(value) => update("stateRegion", value)}
                autoComplete="address-level1"
                required
              />
              <Field
                id="country"
                label="Country"
                value={values.country}
                error={errors.country}
                onChange={(value) => update("country", value)}
                autoComplete="country-name"
                className="sm:col-span-2"
                required
              />
            </div>

            <div className="mt-7 space-y-7">
              <TextAreaField
                id="drawing"
                label="What is drawing you to The Wanderlust Revival Retreat?"
                value={values.drawing}
                error={errors.drawing}
                onChange={(value) => update("drawing", value)}
                required
              />

              <div>
                <label
                  htmlFor="revivalArea"
                  className="mb-2.5 block text-[0.9375rem] font-semibold text-ink"
                >
                  Which area feels most ready for revival?{" "}
                  <span className="text-coral">*</span>
                </label>
                <select
                  id="revivalArea"
                  name="revivalArea"
                  value={values.revivalArea}
                  onChange={(event) => update("revivalArea", event.target.value)}
                  aria-invalid={Boolean(errors.revivalArea)}
                  aria-describedby={
                    errors.revivalArea ? "revivalArea-error" : undefined
                  }
                  className={inputClass(Boolean(errors.revivalArea))}
                  required
                >
                  <option value="">Select an option</option>
                  {inquirySection.revivalAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
                {errors.revivalArea ? (
                  <p id="revivalArea-error" className="mt-2 text-[0.9375rem] text-coral" role="alert">
                    {errors.revivalArea}
                  </p>
                ) : null}
              </div>

              <Field
                id="attendingWith"
                label="Are you considering attending alone or with someone?"
                value={values.attendingWith}
                error={errors.attendingWith}
                onChange={(value) => update("attendingWith", value)}
                required
              />

              <TextAreaField
                id="questions"
                label="What questions do you have?"
                value={values.questions}
                error={errors.questions}
                onChange={(value) => update("questions", value)}
              />

              {/* Honeypot — hidden from users */}
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company}
                  onChange={(event) => update("company", event.target.value)}
                />
              </div>

              <div>
                <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                  <input
                    type="checkbox"
                    checked={values.consent}
                    onChange={(event) => update("consent", event.target.checked)}
                    className="mt-1 size-4 accent-coral"
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                  />
                  <span>
                    I understand that submitting this form is an inquiry and not a
                    confirmed reservation.{" "}
                    <span className="text-coral">*</span>
                  </span>
                </label>
                {errors.consent ? (
                  <p id="consent-error" className="mt-2 text-sm text-coral" role="alert">
                    {errors.consent}
                  </p>
                ) : null}
              </div>
            </div>

            {formError ? (
              <div
                className="mt-6 rounded-sm border border-coral/40 bg-coral/10 px-4 py-3 text-sm text-cacao-deep"
                role="alert"
              >
                {formError}
              </div>
            ) : null}

            <div className="mt-8">
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Sending…" : "Request Your Invitation"}
              </button>
              <p className="mt-4 text-[0.9375rem] text-muted">
                Submitting an inquiry does not obligate you to enroll.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "min-h-[3rem] w-full rounded-sm border bg-cream-dark/40 px-4 py-3.5 text-base text-ink outline-none transition-colors focus:border-teal focus:bg-cream",
    hasError ? "border-coral" : "border-[var(--line)]",
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  required,
  className,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2.5 block text-[0.9375rem] font-semibold text-ink">
        {label} {required ? <span className="text-coral">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass(Boolean(error))}
        required={required}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-[0.9375rem] text-coral" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function TextAreaField({
  id,
  label,
  value,
  onChange,
  error,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2.5 block text-[0.9375rem] font-semibold text-ink">
        {label} {required ? <span className="text-coral">*</span> : null}
      </label>
      <textarea
        id={id}
        name={id}
        rows={6}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputClass(Boolean(error)), "min-h-[9rem] resize-y")}
        required={required}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-[0.9375rem] text-coral" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
