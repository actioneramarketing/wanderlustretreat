"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  leaderApplication,
  leaderOpportunity,
} from "@/data/leader-opportunity";
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
  website: string;
  socialLinks: string;
  currentRole: string;
  workYouLead: string;
  communityAudience: string;
  audienceSize: string;
  workshopIdea: string;
  workConnection: string;
  priorLeadership: string;
  leadershipExperience: string;
  canEnrollThree: string;
  potentialParticipants: string;
  commitmentPath: string;
  firstParticipantNote: string;
  futureRetreatVision: string;
  participantsAsLeaders: string;
  whyAligned: string;
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
  website: "",
  socialLinks: "",
  currentRole: "",
  workYouLead: "",
  communityAudience: "",
  audienceSize: "",
  workshopIdea: "",
  workConnection: "",
  priorLeadership: "",
  leadershipExperience: "",
  canEnrollThree: "",
  potentialParticipants: "",
  commitmentPath: "",
  firstParticipantNote: "",
  futureRetreatVision: "",
  participantsAsLeaders: "",
  whyAligned: "",
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
  if (!values.currentRole.trim()) {
    errors.currentRole = "Current role or business is required.";
  }
  if (!values.workYouLead.trim() || values.workYouLead.trim().length < 20) {
    errors.workYouLead =
      "Please share more about the work you lead (at least 20 characters).";
  }
  if (!values.communityAudience.trim()) {
    errors.communityAudience = "Please describe your community or audience.";
  }
  if (!values.audienceSize.trim()) {
    errors.audienceSize = "Please share an approximate audience or network size.";
  }
  if (!values.workshopIdea.trim() || values.workshopIdea.trim().length < 20) {
    errors.workshopIdea =
      "Please describe the workshop or experience you would like to lead.";
  }
  if (!values.workConnection.trim()) {
    errors.workConnection =
      "Please share how your work connects to transformation or the retreat themes.";
  }
  if (!values.priorLeadership.trim()) {
    errors.priorLeadership = "Please tell us whether you have led before.";
  }
  if (!values.canEnrollThree.trim()) {
    errors.canEnrollThree =
      "Please share whether you feel confident enrolling three participants.";
  }
  if (!values.commitmentPath) {
    errors.commitmentPath = "Please select a commitment path option.";
  }
  if (!values.futureRetreatVision.trim() || values.futureRetreatVision.trim().length < 20) {
    errors.futureRetreatVision =
      "Please share more about the future retreat you would like to host.";
  }
  if (!values.whyAligned.trim() || values.whyAligned.trim().length < 20) {
    errors.whyAligned =
      "Please share why this opportunity feels aligned for you now.";
  }
  if (!values.consent) {
    errors.consent = "Please acknowledge the application terms to continue.";
  }

  return errors;
}

export function LeaderApplicationForm() {
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
      const response = await fetch("/api/leader-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok) {
        setFormError(
          data.error ||
            "Something went wrong while sending your application. Please try again.",
        );
        return;
      }

      router.push("/leaders/success");
    } catch {
      setFormError(
        "Unable to reach the server. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="leader-application" className="section-pad bg-cream-dark">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            heading={leaderApplication.heading}
            description={leaderApplication.copy}
            className="mb-12"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="relative rounded-sm border border-[var(--line)] bg-cream p-6 sm:p-10 lg:p-12"
          >
            <fieldset className="grid gap-7 sm:grid-cols-2">
              <legend className="sr-only">Applicant details</legend>
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
                required
              />
              <Field
                id="website"
                label="Website"
                type="url"
                value={values.website}
                error={errors.website}
                onChange={(value) => update("website", value)}
                autoComplete="url"
              />
              <Field
                id="socialLinks"
                label="Social-media links"
                value={values.socialLinks}
                error={errors.socialLinks}
                onChange={(value) => update("socialLinks", value)}
                className="sm:col-span-2"
              />
              <Field
                id="currentRole"
                label="Current role or business"
                value={values.currentRole}
                error={errors.currentRole}
                onChange={(value) => update("currentRole", value)}
                className="sm:col-span-2"
                required
              />
            </fieldset>

            <div className="mt-10 space-y-7">
              <TextAreaField
                id="workYouLead"
                label="Tell us about the work you lead"
                value={values.workYouLead}
                error={errors.workYouLead}
                onChange={(value) => update("workYouLead", value)}
                required
              />
              <TextAreaField
                id="communityAudience"
                label="Who is your current community or audience?"
                value={values.communityAudience}
                error={errors.communityAudience}
                onChange={(value) => update("communityAudience", value)}
                required
              />
              <Field
                id="audienceSize"
                label="Approximately how large is your active audience, network, client base, or community?"
                value={values.audienceSize}
                error={errors.audienceSize}
                onChange={(value) => update("audienceSize", value)}
                required
              />
              <TextAreaField
                id="workshopIdea"
                label="What workshop, session, or experience would you like to lead?"
                value={values.workshopIdea}
                error={errors.workshopIdea}
                onChange={(value) => update("workshopIdea", value)}
                required
              />
              <TextAreaField
                id="workConnection"
                label="How does your work connect to life, health, relationships, business, purpose, contribution, creativity, or transformation?"
                value={values.workConnection}
                error={errors.workConnection}
                onChange={(value) => update("workConnection", value)}
                required
              />
              <Field
                id="priorLeadership"
                label="Have you led workshops, groups, retreats, events, or communities before?"
                value={values.priorLeadership}
                error={errors.priorLeadership}
                onChange={(value) => update("priorLeadership", value)}
                required
              />
              <TextAreaField
                id="leadershipExperience"
                label="Tell us about that leadership experience"
                value={values.leadershipExperience}
                error={errors.leadershipExperience}
                onChange={(value) => update("leadershipExperience", value)}
              />
              <Field
                id="canEnrollThree"
                label="Do you feel confident that you can enroll three aligned participants?"
                value={values.canEnrollThree}
                error={errors.canEnrollThree}
                onChange={(value) => update("canEnrollThree", value)}
                required
              />
              <TextAreaField
                id="potentialParticipants"
                label="Who might those participants be?"
                value={values.potentialParticipants}
                error={errors.potentialParticipants}
                onChange={(value) => update("potentialParticipants", value)}
              />
              <div>
                <label
                  htmlFor="commitmentPath"
                  className="mb-2.5 block text-[0.9375rem] font-semibold text-ink"
                >
                  {leaderApplication.commitmentPathLabel}{" "}
                  <span className="text-coral">*</span>
                </label>
                <select
                  id="commitmentPath"
                  name="commitmentPath"
                  value={values.commitmentPath}
                  onChange={(event) =>
                    update("commitmentPath", event.target.value)
                  }
                  aria-invalid={Boolean(errors.commitmentPath)}
                  aria-describedby={
                    errors.commitmentPath ? "commitmentPath-error" : undefined
                  }
                  className={inputClass(Boolean(errors.commitmentPath))}
                  required
                >
                  <option value="">Select an option</option>
                  {leaderApplication.commitmentPathOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.commitmentPath ? (
                  <p
                    id="commitmentPath-error"
                    className="mt-2 text-[0.9375rem] text-coral"
                    role="alert"
                  >
                    {errors.commitmentPath}
                  </p>
                ) : null}
              </div>
              <TextAreaField
                id="firstParticipantNote"
                label={leaderApplication.firstParticipantLabel}
                value={values.firstParticipantNote}
                error={errors.firstParticipantNote}
                onChange={(value) => update("firstParticipantNote", value)}
                hint={leaderApplication.firstParticipantHint}
              />
              <TextAreaField
                id="futureRetreatVision"
                label="What kind of retreat would you like to host at Villa Wanderlust in the future?"
                value={values.futureRetreatVision}
                error={errors.futureRetreatVision}
                onChange={(value) => update("futureRetreatVision", value)}
                required
              />
              <TextAreaField
                id="participantsAsLeaders"
                label="Would your three Wanderlust participants potentially become guests, ambassadors, support leaders, or co-leaders for that future retreat?"
                value={values.participantsAsLeaders}
                error={errors.participantsAsLeaders}
                onChange={(value) => update("participantsAsLeaders", value)}
              />
              <TextAreaField
                id="whyAligned"
                label="Why does this opportunity feel aligned for you now?"
                value={values.whyAligned}
                error={errors.whyAligned}
                onChange={(value) => update("whyAligned", value)}
                required
              />
              <TextAreaField
                id="questions"
                label="What questions do you have?"
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

              <div>
                <fieldset>
                  <legend className="mb-3 text-[0.9375rem] font-semibold text-ink">
                    Please acknowledge the following{" "}
                    <span className="text-coral">*</span>
                  </legend>
                  <ul className="mb-4 space-y-2 text-sm leading-relaxed text-ink-soft">
                    {leaderApplication.consentItems.map((item) => (
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
                        errors.consent ? "leader-consent-error" : undefined
                      }
                    />
                    <span>
                      I understand and acknowledge the statements above.
                    </span>
                  </label>
                </fieldset>
                {errors.consent ? (
                  <p
                    id="leader-consent-error"
                    className="mt-2 text-sm text-coral"
                    role="alert"
                  >
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
                className="btn-primary min-h-11 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Sending…" : leaderApplication.submitLabel}
              </button>
              <p className="mt-4 text-[0.9375rem] text-muted">
                Applying begins a conversation. It does not reserve a leader
                position or guarantee acceptance.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                {leaderOpportunity.pageDisclaimer}
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

function TextAreaField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2.5 block text-[0.9375rem] font-semibold text-ink"
      >
        {label} {required ? <span className="text-coral">*</span> : null}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mb-2.5 text-sm text-muted">
          {hint}
        </p>
      ) : null}
      <textarea
        id={id}
        name={id}
        rows={5}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        className={cn(inputClass(Boolean(error)), "min-h-[8rem] resize-y")}
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
