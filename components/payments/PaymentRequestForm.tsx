"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import {
  paymentForm,
  paymentOptions,
  type PaymentOptionId,
} from "@/data/payment-options";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  invitingLeader: string;
  selectedOption: PaymentOptionId | "";
  bankTransferMethod: string;
  paymentStatus: string;
  amountAlreadySent: string;
  paymentDate: string;
  transactionReference: string;
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
  country: "",
  invitingLeader: "",
  selectedOption: "",
  bankTransferMethod: "",
  paymentStatus: "",
  amountAlreadySent: "",
  paymentDate: "",
  transactionReference: "",
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
  if (!values.country.trim()) errors.country = "Country is required.";
  if (!values.invitingLeader.trim()) {
    errors.invitingLeader = "Please name the Retreat Leader who invited you.";
  }
  if (!values.selectedOption) {
    errors.selectedOption = "Please select a payment option.";
  }
  if (!values.paymentStatus) {
    errors.paymentStatus = "Please select your payment status.";
  }
  if (!values.consent) {
    errors.consent = "Please acknowledge the enrollment statements to continue.";
  }
  return errors;
}

export function PaymentRequestForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const selectedIsBank = useMemo(() => {
    const option = paymentOptions.find((item) => item.id === values.selectedOption);
    return Boolean(option?.isBank);
  }, [values.selectedOption]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setFormError(null);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    if (
      selectedIsBank &&
      !values.bankTransferMethod.trim()
    ) {
      nextErrors.bankTransferMethod =
        "Please select your preferred bank-transfer method.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("/api/payment-selection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok) {
        setFormError(
          data.error ||
            "Something went wrong while sending your payment selection. Please try again.",
        );
        return;
      }
      router.push("/payments/success");
    } catch {
      setFormError(
        "Unable to reach the server. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="payment-request" className="section-pad bg-cream-dark">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            heading={paymentForm.heading}
            description={paymentForm.copy}
            className="mb-12"
          />
        </Reveal>

        <Reveal delay={0.06}>
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
                id="country"
                label="Country"
                value={values.country}
                error={errors.country}
                onChange={(value) => update("country", value)}
                autoComplete="country-name"
                required
              />
              <Field
                id="invitingLeader"
                label="Name of the Retreat Leader who invited you"
                value={values.invitingLeader}
                error={errors.invitingLeader}
                onChange={(value) => update("invitingLeader", value)}
                required
              />
            </div>

            <div className="mt-7 space-y-7">
              <SelectField
                id="selectedOption"
                label="Selected payment option"
                value={values.selectedOption}
                error={errors.selectedOption}
                required
                onChange={(value) => {
                  update("selectedOption", value as PaymentOptionId | "");
                  if (
                    !paymentOptions.find((item) => item.id === value)?.isBank
                  ) {
                    update("bankTransferMethod", "");
                  }
                }}
                options={paymentOptions.map((option) => ({
                  value: option.id,
                  label: option.formLabel,
                }))}
              />

              {selectedIsBank ? (
                <SelectField
                  id="bankTransferMethod"
                  label="Preferred bank-transfer method"
                  value={values.bankTransferMethod}
                  error={errors.bankTransferMethod}
                  required
                  onChange={(value) => update("bankTransferMethod", value)}
                  options={paymentForm.bankMethodOptions.map((option) => ({
                    value: option,
                    label: option,
                  }))}
                />
              ) : null}

              <SelectField
                id="paymentStatus"
                label="Payment status"
                value={values.paymentStatus}
                error={errors.paymentStatus}
                required
                onChange={(value) => update("paymentStatus", value)}
                options={paymentForm.paymentStatusOptions.map((option) => ({
                  value: option,
                  label: option,
                }))}
              />

              <div className="grid gap-7 sm:grid-cols-2">
                <Field
                  id="amountAlreadySent"
                  label="Amount already sent (optional)"
                  value={values.amountAlreadySent}
                  error={errors.amountAlreadySent}
                  onChange={(value) => update("amountAlreadySent", value)}
                />
                <Field
                  id="paymentDate"
                  label="Payment date (optional)"
                  type="date"
                  value={values.paymentDate}
                  error={errors.paymentDate}
                  onChange={(value) => update("paymentDate", value)}
                />
              </div>

              <Field
                id="transactionReference"
                label="Transaction or confirmation reference (optional)"
                value={values.transactionReference}
                error={errors.transactionReference}
                onChange={(value) => update("transactionReference", value)}
              />

              <TextAreaField
                id="questions"
                label="Questions or notes"
                value={values.questions}
                error={errors.questions}
                onChange={(value) => update("questions", value)}
              />

              <div
                className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                aria-hidden="true"
              >
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

              <fieldset>
                <legend className="mb-3 text-[0.9375rem] font-semibold text-ink">
                  Please acknowledge the following{" "}
                  <span className="text-coral">*</span>
                </legend>
                <ul className="mb-4 space-y-2 text-sm leading-relaxed text-ink-soft">
                  {paymentForm.acknowledgments.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <label className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                  <input
                    type="checkbox"
                    checked={values.consent}
                    onChange={(event) =>
                      update("consent", event.target.checked)
                    }
                    className="mt-1 size-4 min-h-4 min-w-4 accent-coral"
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={
                      errors.consent ? "payment-consent-error" : undefined
                    }
                  />
                  <span>
                    I understand and acknowledge the statements above.
                  </span>
                </label>
                {errors.consent ? (
                  <p
                    id="payment-consent-error"
                    className="mt-2 text-sm text-coral"
                    role="alert"
                  >
                    {errors.consent}
                  </p>
                ) : null}
              </fieldset>
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
                className="btn-primary min-h-11 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Sending…" : paymentForm.submitLabel}
              </button>
              <p className="mt-4 text-sm text-muted">
                Submitting this form does not by itself secure your place.
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
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2.5 block text-[0.9375rem] font-semibold text-ink"
      >
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
        <p
          id={`${id}-error`}
          className="mt-2 text-[0.9375rem] text-coral"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  error,
  options,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options: Array<{ value: string; label: string }>;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2.5 block text-[0.9375rem] font-semibold text-ink"
      >
        {label} {required ? <span className="text-coral">*</span> : null}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass(Boolean(error))}
        required={required}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-2 text-[0.9375rem] text-coral"
          role="alert"
        >
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
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2.5 block text-[0.9375rem] font-semibold text-ink"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={5}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputClass(Boolean(error)), "min-h-[8rem] resize-y")}
      />
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-2 text-[0.9375rem] text-coral"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
