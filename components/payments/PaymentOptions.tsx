"use client";

import { Building2, CreditCard } from "lucide-react";
import { useId, useState } from "react";
import {
  achInstructions,
  bankPaymentExtras,
  bankPlanPlaceholders,
  cardFullWorkflow,
  cardPlanPlaceholders,
  getPaymentOption,
  isPlaceholderValue,
  paymentOptions,
  paymentPage,
  type PaymentOptionId,
  wireInstructions,
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
                      isSelected && "ring-2 ring-coral/40 ring-offset-2 ring-offset-cream",
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

                {option.id === "bank-full" ? <BankFullInstructions /> : null}
                {option.id === "bank-plan" ? <BankPlanInstructions /> : null}
                {option.id === "card-full" ? <CardFullInstructions /> : null}
                {option.id === "card-plan" ? <CardPlanInstructions /> : null}
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

function BankFullInstructions() {
  return (
    <div className="mt-8 space-y-8">
      {!paymentPage.bankDetailsFinalized ? (
        <BankPendingNotice />
      ) : null}
      <InstructionBlock
        title={achInstructions.label}
        amount="$7,500 USD"
        fields={achInstructions.fields}
      />
      <InstructionBlock
        title={wireInstructions.label}
        amount="$7,500 USD"
        fields={wireInstructions.fields}
      />
      <p className="text-sm leading-relaxed text-muted sm:text-base">
        {bankPaymentExtras.feeNote}
      </p>
    </div>
  );
}

function BankPlanInstructions() {
  return (
    <div className="mt-8 space-y-8">
      <div className="border border-[var(--line)] bg-cream px-5 py-5">
        <p className="eyebrow text-teal">{bankPlanPlaceholders.totalLabel}</p>
        <p className="mt-2 font-serif text-4xl text-jungle">
          {bankPlanPlaceholders.totalAmount}
        </p>
      </div>
      <DetailList fields={bankPlanPlaceholders.fields} />
      {!paymentPage.bankDetailsFinalized ? <BankPendingNotice /> : null}
      <InstructionBlock
        title={achInstructions.label}
        amount={bankPlanPlaceholders.totalAmount}
        fields={achInstructions.fields}
      />
      <InstructionBlock
        title={wireInstructions.label}
        amount={bankPlanPlaceholders.totalAmount}
        fields={wireInstructions.fields}
      />
      <p className="text-base leading-relaxed text-ink-soft">
        {bankPlanPlaceholders.officialNote}
      </p>
      <p className="text-sm leading-relaxed text-muted sm:text-base">
        {bankPaymentExtras.feeNote}
      </p>
    </div>
  );
}

function CardFullInstructions() {
  return (
    <div className="mt-8 space-y-8">
      <div className="border border-[var(--line)] bg-cream px-5 py-5">
        <p className="eyebrow text-teal">Payment recipient</p>
        <p className="mt-2 font-serif text-2xl text-ink sm:text-3xl">
          {paymentPage.paypalRecipientEmail}
        </p>
      </div>
      <div>
        <p className="eyebrow mb-3 text-coral">Important</p>
        <ul className="space-y-2">
          {cardFullWorkflow.important.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-base leading-relaxed text-ink-soft before:mt-2 before:block before:size-1.5 before:shrink-0 before:rounded-full before:bg-coral before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <ol className="space-y-3 border-l border-[var(--line)] pl-5">
        {cardFullWorkflow.steps.map((step, index) => (
          <li key={step} className="text-base leading-relaxed text-ink-soft">
            <span className="mr-2 font-semibold text-coral">
              {index + 1}.
            </span>
            {step}
          </li>
        ))}
      </ol>
      <ButtonLink href="#payment-request">{cardFullWorkflow.buttonLabel}</ButtonLink>
    </div>
  );
}

function CardPlanInstructions() {
  return (
    <div className="mt-8 space-y-8">
      <div className="border border-[var(--line)] bg-cream px-5 py-5">
        <p className="eyebrow text-teal">{cardPlanPlaceholders.totalLabel}</p>
        <p className="mt-2 font-serif text-4xl text-jungle">
          {cardPlanPlaceholders.totalAmount}
        </p>
      </div>
      <DetailList fields={cardPlanPlaceholders.fields} />
      <div className="border border-[var(--line)] bg-cream px-5 py-5">
        <p className="eyebrow text-teal">Payment recipient</p>
        <p className="mt-2 font-serif text-2xl text-ink sm:text-3xl">
          {paymentPage.paypalRecipientEmail}
        </p>
      </div>
      <ol className="space-y-3 border-l border-[var(--line)] pl-5">
        {cardPlanPlaceholders.steps.map((step, index) => (
          <li key={step} className="text-base leading-relaxed text-ink-soft">
            <span className="mr-2 font-semibold text-coral">
              {index + 1}.
            </span>
            {step}
          </li>
        ))}
      </ol>
      <ButtonLink href="#payment-request">
        {cardPlanPlaceholders.buttonLabel}
      </ButtonLink>
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

function InstructionBlock({
  title,
  amount,
  fields,
}: {
  title: string;
  amount: string;
  fields: Array<{ label: string; value: string }>;
}) {
  const canCopy = paymentPage.bankDetailsFinalized;

  return (
    <div className="rounded-sm border border-[var(--line)] bg-cream p-5 sm:p-6">
      <h4 className="font-serif text-2xl text-ink">{title}</h4>
      <DetailList
        fields={[
          ...fields,
          { label: "Payment amount", value: amount },
          {
            label: "Payment reference",
            value: bankPaymentExtras.paymentReference,
          },
        ]}
        canCopy={canCopy}
      />
    </div>
  );
}

function DetailList({
  fields,
  canCopy = false,
}: {
  fields: Array<{ label: string; value: string }>;
  canCopy?: boolean;
}) {
  return (
    <dl className="mt-5 space-y-4">
      {fields.map((field) => {
        const placeholder = isPlaceholderValue(field.value);
        return (
          <div
            key={`${field.label}-${field.value}`}
            className="grid gap-1 border-b border-[var(--line-light)] pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[0.9fr_1.1fr] sm:items-start sm:gap-4"
          >
            <dt className="text-sm text-muted">{field.label}</dt>
            <dd className="flex flex-col gap-2 sm:items-end sm:text-right">
              <span
                className={cn(
                  "text-base font-medium break-words",
                  placeholder ? "text-muted" : "text-ink",
                )}
              >
                {field.value}
              </span>
              {canCopy && !placeholder ? (
                <CopyButton value={field.value} label={field.label} />
              ) : null}
            </dd>
          </div>
        );
      })}
    </dl>
  );
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
