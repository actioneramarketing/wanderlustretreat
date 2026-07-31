"use client";

import { Building2, CreditCard } from "lucide-react";
import { useId, useState } from "react";
import {
  achBankTransfer,
  bankPaymentConfirmation,
  bankPaymentExtras,
  bankPaymentReference,
  beforeSendingChecklist,
  domesticWireTransfer,
  getPaymentOption,
  internationalPaymentNotice,
  manualPaymentResponsibility,
  paymentOptions,
  paymentPage,
  paymentRequiredThisWeek,
  type BankDetailField,
  type PaymentOptionId,
} from "@/data/payment-options";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function PaymentOptions() {
  const [selected, setSelected] = useState<PaymentOptionId | null>(null);
  const instructionsId = useId();
  const option = getPaymentOption(selected);

  const selectOption = (id: PaymentOptionId) => {
    setSelected(id);
    window.requestAnimationFrame(() => {
      document
        .getElementById("payment-instructions")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section className="section-pad bg-cream !pt-4">
      <div className="container-editorial">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {paymentOptions.map((item) => {
              const isSelected = selected === item.id;
              return (
                <article
                  key={item.id}
                  className={cn(
                    "flex h-full flex-col border bg-cream-dark/35 p-6 transition-colors sm:p-8",
                    isSelected
                      ? "border-coral shadow-[0_0_0_1px_rgba(196,120,90,0.35)]"
                      : "border-[var(--line)]",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="eyebrow text-coral">{item.badge}</p>
                    {item.isBank ? (
                      <Building2
                        className="size-5 shrink-0 text-teal"
                        aria-hidden="true"
                      />
                    ) : (
                      <CreditCard
                        className="size-5 shrink-0 text-teal"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="mt-5 font-serif text-5xl tracking-tight text-jungle sm:text-6xl">
                    {item.amountDisplay}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold tracking-[0.08em] text-teal uppercase">
                    {item.method}
                  </p>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    aria-controls={instructionsId}
                    className={cn(
                      "btn-primary mt-8 min-h-11 w-full sm:w-auto",
                      isSelected &&
                        "ring-2 ring-coral/40 ring-offset-2 ring-offset-cream",
                    )}
                    onClick={() => selectOption(item.id)}
                  >
                    {isSelected ? "Selected" : "Select This Option"}
                  </button>
                </article>
              );
            })}
          </div>
        </Reveal>

        <div
          id="payment-instructions"
          className="scroll-mt-[calc(var(--site-header-height)+1rem)]"
        >
          {option ? (
            <Reveal>
              <div
                id={instructionsId}
                className="mt-14 rounded-sm border border-[var(--line)] bg-cream-dark/40 p-6 sm:p-10"
                role="region"
                aria-live="polite"
                aria-label={`Instructions for ${option.title}`}
              >
                <p className="eyebrow mb-3 text-teal">Selected option</p>
                <h3 className="font-serif text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight text-ink">
                  {option.instructionsHeading}
                </h3>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
                  {option.instructionsCopy}
                </p>

                {option.isBank ? (
                  <>
                    <ManualResponsibilityNotice />
                    <BankInstructions showPlanNote={option.isPlan} />
                  </>
                ) : (
                  <>
                    <PaypalPrimaryInstructions />
                    <ManualResponsibilityNotice />
                    <BeforeSendingChecklist />
                    <div className="mt-8">
                      <ButtonLink href={paymentRequiredThisWeek.ctaHref}>
                        {paymentRequiredThisWeek.ctaLabel}
                      </ButtonLink>
                    </div>
                  </>
                )}
              </div>
            </Reveal>
          ) : (
            <p className="mt-10 text-center text-base text-muted">
              Select a payment option above to view matching instructions.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function PaypalPrimaryInstructions() {
  return (
    <div className="mt-8 rounded-sm border border-[var(--line)] bg-cream px-5 py-6 sm:px-7">
      <h4 className="font-serif text-2xl text-ink sm:text-3xl">
        {paymentRequiredThisWeek.heading}
      </h4>
      <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
        {paymentRequiredThisWeek.intro}
      </p>
      <p className="eyebrow mt-6 text-teal">
        {paymentRequiredThisWeek.recipientLabel}
      </p>
      <p className="mt-2 font-serif text-2xl text-ink sm:text-3xl">
        {paymentRequiredThisWeek.recipientEmail}
      </p>
      <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
        {paymentRequiredThisWeek.amountCopy}
      </p>
      <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
        {paymentRequiredThisWeek.uncertainCopy}
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
        {paymentRequiredThisWeek.hostNote}
      </p>
    </div>
  );
}

function ManualResponsibilityNotice() {
  return (
    <div className="mt-6 rounded-sm border border-gold/35 bg-cream px-5 py-6 sm:px-7">
      <h4 className="font-serif text-2xl text-ink">
        {manualPaymentResponsibility.heading}
      </h4>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
        {manualPaymentResponsibility.copy.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function BeforeSendingChecklist() {
  return (
    <div className="mt-6 rounded-sm border border-[var(--line)] bg-cream px-5 py-6 sm:px-7">
      <h4 className="font-serif text-2xl text-ink">
        {beforeSendingChecklist.heading}
      </h4>
      <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
        {beforeSendingChecklist.intro}
      </p>
      <ul className="mt-4 space-y-3">
        {beforeSendingChecklist.items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-base leading-relaxed text-ink-soft before:mt-2 before:block before:size-1.5 before:shrink-0 before:rounded-full before:bg-coral before:content-['']"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BankInstructions({ showPlanNote }: { showPlanNote: boolean }) {
  return (
    <div className="mt-8 space-y-8">
      {!paymentPage.bankDetailsFinalized ? <BankPendingNotice /> : null}

      <BankTransferOption
        optionLabel={domesticWireTransfer.optionLabel}
        heading={domesticWireTransfer.heading}
        amountHeading={domesticWireTransfer.amount.heading}
        amountValue={domesticWireTransfer.amount.value}
        fields={domesticWireTransfer.fields}
        note={domesticWireTransfer.note}
      />

      <BankTransferOption
        optionLabel={achBankTransfer.optionLabel}
        heading={achBankTransfer.heading}
        amountHeading={achBankTransfer.amount.heading}
        amountValue={achBankTransfer.amount.value}
        fields={achBankTransfer.fields}
        note={achBankTransfer.note}
      />

      <div className="rounded-sm border border-gold/40 bg-cream px-5 py-6 sm:px-7">
        <h4 className="font-serif text-2xl text-ink">
          {internationalPaymentNotice.heading}
        </h4>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          {internationalPaymentNotice.copy}
        </p>
      </div>

      <div className="rounded-sm border border-[var(--line)] bg-cream px-5 py-6 sm:px-7">
        <h4 className="font-serif text-2xl text-ink">
          {bankPaymentReference.heading}
        </h4>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          {bankPaymentReference.copy}
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-base font-medium tracking-wide text-ink sm:text-lg">
            {bankPaymentReference.value}
          </p>
          <CopyButton
            value={bankPaymentReference.value}
            label="payment reference"
          />
        </div>
      </div>

      <div className="rounded-sm border border-[var(--line)] bg-cream px-5 py-6 sm:px-7">
        <h4 className="font-serif text-2xl text-ink">
          {bankPaymentConfirmation.heading}
        </h4>
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          {bankPaymentConfirmation.copy}
        </p>
        <ul className="mt-4 space-y-2">
          {bankPaymentConfirmation.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-base leading-relaxed text-ink-soft before:mt-2 before:block before:size-1.5 before:shrink-0 before:rounded-full before:bg-coral before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {bankPaymentConfirmation.privacyNote}
        </p>
      </div>

      {showPlanNote ? (
        <p className="text-base leading-relaxed text-ink-soft">
          {bankPaymentExtras.officialNote}
        </p>
      ) : null}
      <p className="text-sm leading-relaxed text-muted sm:text-base">
        {bankPaymentExtras.feeNote}
      </p>
      <ButtonLink href="#payment-request">Confirm My Payment Choice</ButtonLink>
    </div>
  );
}

function BankTransferOption({
  optionLabel,
  heading,
  amountHeading,
  amountValue,
  fields,
  note,
}: {
  optionLabel: string;
  heading: string;
  amountHeading: string;
  amountValue: string;
  fields: BankDetailField[];
  note: string;
}) {
  return (
    <div className="rounded-sm border border-[var(--line)] bg-cream p-5 sm:p-7">
      <p className="eyebrow text-coral">{optionLabel}</p>
      <h4 className="mt-3 font-serif text-2xl text-ink sm:text-3xl">{heading}</h4>

      <div className="mt-6 border-b border-[var(--line-light)] pb-5">
        <p className="text-sm text-muted">{amountHeading}</p>
        <p className="mt-2 font-serif text-3xl tracking-tight text-jungle">
          {amountValue}
        </p>
      </div>

      <DetailList fields={fields} />

      <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
        {note}
      </p>
    </div>
  );
}

function BankPendingNotice() {
  return (
    <div
      className="rounded-sm border border-gold/40 bg-cream px-5 py-4 text-base leading-relaxed text-cacao-deep"
      role="status"
    >
      {paymentPage.bankDetailsPendingMessage}
    </div>
  );
}

function DetailList({ fields }: { fields: BankDetailField[] }) {
  return (
    <dl className="mt-5 space-y-4">
      {fields.map((field) => (
        <div
          key={`${field.label}-${field.value}`}
          className="grid gap-1 border-b border-[var(--line-light)] pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[0.85fr_1.15fr] sm:items-start sm:gap-4"
        >
          <dt className="text-sm text-muted">{field.label}</dt>
          <dd className="flex flex-col gap-2 sm:items-end sm:text-right">
            <BankDetailValue field={field} />
            {field.copyable ? (
              <CopyButton value={field.value} label={field.label} />
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function BankDetailValue({ field }: { field: BankDetailField }) {
  if (field.multiline) {
    return (
      <span className="whitespace-pre-line text-base font-medium text-ink">
        {field.value}
      </span>
    );
  }

  if (field.numeric) {
    return (
      <span
        className="font-mono text-base font-semibold tracking-[0.12em] text-ink tabular-nums"
        // Discourage iOS/Safari from turning routing/account digits into tel links.
        data-nosnippet
      >
        {formatNumericDisplay(field.value)}
      </span>
    );
  }

  return (
    <span className="text-base font-medium break-words text-ink">
      {field.value}
    </span>
  );
}

/** Insert zero-width spaces so browsers are less likely to auto-link as phone numbers. */
function formatNumericDisplay(value: string) {
  return value.split("").join("\u200B");
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="meta-label text-teal transition-colors hover:text-coral"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        } catch {
          setCopied(false);
        }
      }}
    >
      {copied ? "Copied" : `Copy ${label.toLowerCase()}`}
    </button>
  );
}
