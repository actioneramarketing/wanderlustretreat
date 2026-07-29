import {
  formatLeaderCurrency,
  getLeadershipMilestone,
  leaderCommitment,
  leaderFinancials,
  leadershipMilestones,
} from "@/data/leader-opportunity";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ExampleRow = [string, string];
type PathExample = { title: string; rows: ExampleRow[] };

function pathOneExamples(): PathExample[] {
  const one = getLeadershipMilestone(1);
  const two = getLeadershipMilestone(2);
  const three = getLeadershipMilestone(3);

  return [
    {
      title: "With One Enrolled Participant",
      rows: [
        [
          "Retreat participation value",
          formatLeaderCurrency(leaderFinancials.baseRetreatCost),
        ],
        ["Leadership credit earned", formatLeaderCurrency(one.credits)],
        ["Your final retreat cost", formatLeaderCurrency(one.leaderCost)],
        [
          "Deposit already paid",
          formatLeaderCurrency(leaderFinancials.depositAmount),
        ],
        ["Remaining amount due", formatLeaderCurrency(one.depositAppliedRemaining)],
      ],
    },
    {
      title: "With Two Enrolled Participants",
      rows: [
        [
          "Retreat participation value",
          formatLeaderCurrency(leaderFinancials.baseRetreatCost),
        ],
        ["Leadership credits earned", formatLeaderCurrency(two.credits)],
        ["Your final retreat cost", formatLeaderCurrency(two.leaderCost)],
        [
          "Your original deposit covers that cost",
          formatLeaderCurrency(leaderFinancials.depositAmount),
        ],
        ["Additional retreat payment due", "None"],
      ],
    },
    {
      title: "With Three Enrolled Participants",
      rows: [
        [
          "Retreat participation value",
          formatLeaderCurrency(leaderFinancials.baseRetreatCost),
        ],
        ["Leadership credits earned", formatLeaderCurrency(three.credits)],
        ["Your retreat participation", "Fully covered"],
        ["Your original deposit", "Deposit returned"],
        [
          "Future Villa week",
          `Valued at nearly ${formatLeaderCurrency(leaderFinancials.villaWeekValueAmount)}`,
        ],
      ],
    },
  ];
}

function pathTwoExamples(): PathExample[] {
  const one = getLeadershipMilestone(1);
  const two = getLeadershipMilestone(2);
  const three = getLeadershipMilestone(3);

  return [
    {
      title: "With One Enrolled Participant",
      rows: [
        ["Upfront leader deposit", "Waived"],
        ["Leadership credit earned", formatLeaderCurrency(one.credits)],
        ["Your final retreat cost", formatLeaderCurrency(one.leaderCost)],
        ["Amount due from the leader", formatLeaderCurrency(one.leaderCost)],
      ],
    },
    {
      title: "With Two Enrolled Participants",
      rows: [
        ["Upfront leader deposit", "Waived"],
        ["Leadership credits earned", formatLeaderCurrency(two.credits)],
        ["Your final retreat cost", formatLeaderCurrency(two.leaderCost)],
        ["Amount due from the leader", formatLeaderCurrency(two.leaderCost)],
      ],
    },
    {
      title: "With Three Enrolled Participants",
      rows: [
        ["Upfront leader deposit", "Waived"],
        ["Leadership credits earned", formatLeaderCurrency(three.credits)],
        ["Your retreat participation", "Fully covered"],
        ["Leader retreat payment due", "None"],
        [
          "Future Villa week",
          `Valued at nearly ${formatLeaderCurrency(leaderFinancials.villaWeekValueAmount)}`,
        ],
      ],
    },
  ];
}

export function LeaderCommitment() {
  const pathOne = pathOneExamples();
  const pathTwo = pathTwoExamples();

  return (
    <section id="leader-commitment" className="section-pad bg-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow={leaderCommitment.eyebrow}
            heading={leaderCommitment.heading}
            className="mb-8 max-w-4xl"
          />
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft">
            {leaderCommitment.opening.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 max-w-3xl border-l-2 border-coral/50 pl-5 text-lg leading-relaxed text-ink">
            {leaderCommitment.sharedOutcome}
          </p>
        </Reveal>

        {/* Credit milestone pathway */}
        <Reveal delay={0.06}>
          <div className="mt-16 rounded-sm border border-[var(--line)] bg-cream-dark/50 p-6 sm:p-10">
            <h3 className="font-serif text-[clamp(1.75rem,3.2vw,2.4rem)] leading-tight text-ink">
              {leaderCommitment.creditModel.heading}
            </h3>
            <div className="mt-8 flex flex-col items-start gap-2 border-b border-[var(--line)] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="eyebrow text-teal">
                {leaderCommitment.creditModel.baseLabel}
              </p>
              <p className="font-serif text-5xl tracking-tight text-jungle sm:text-6xl">
                {leaderCommitment.creditModel.baseAmount}
              </p>
            </div>

            <ol className="mt-10 grid gap-6 lg:grid-cols-3">
              {leadershipMilestones.map((milestone) => (
                <li
                  key={milestone.participants}
                  className="relative border-t border-coral/40 pt-6 lg:border-t-0 lg:border-l lg:border-coral/40 lg:pl-6 lg:pt-0"
                >
                  <p className="eyebrow mb-3 text-coral">
                    {String(milestone.participants).padStart(2, "0")}
                  </p>
                  <p className="font-serif text-2xl leading-tight text-ink">
                    {milestone.participants} enrolled participant
                    {milestone.participants === 1 ? "" : "s"}
                  </p>
                  <p className="mt-3 text-base text-ink-soft">
                    {formatLeaderCurrency(milestone.credits)} leadership credit
                    {milestone.participants === 1 ? "" : "s"}
                  </p>
                  <p className="mt-4 font-serif text-3xl text-jungle">
                    {milestone.fullyCovered
                      ? "Fully covered"
                      : formatLeaderCurrency(milestone.leaderCost)}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {milestone.fullyCovered
                      ? "Your retreat participation is fully covered"
                      : "Your retreat cost becomes"}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-10 border border-gold/30 bg-cream px-5 py-5 text-base leading-relaxed text-ink sm:text-lg">
              {leaderCommitment.creditModel.villaUnlockNote}
            </p>
          </div>
        </Reveal>

        {/* Two paths */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.04}>
            <PathCard
              label={leaderCommitment.pathOne.label}
              heading={leaderCommitment.pathOne.heading}
              copy={leaderCommitment.pathOne.copy}
              examples={pathOne}
              idealFor={leaderCommitment.pathOne.idealFor}
              ctaLabel={leaderCommitment.pathOne.ctaLabel}
              ctaHref={leaderCommitment.pathOne.ctaHref}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <PathCard
              label={leaderCommitment.pathTwo.label}
              heading={leaderCommitment.pathTwo.heading}
              copy={leaderCommitment.pathTwo.copy}
              examples={pathTwo}
              idealFor={leaderCommitment.pathTwo.idealFor}
              ctaLabel={leaderCommitment.pathTwo.ctaLabel}
              ctaHref={leaderCommitment.pathTwo.ctaHref}
            />
          </Reveal>
        </div>

        {/* Side-by-side summary */}
        <Reveal delay={0.06}>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <SummaryPanel
              title="Path One"
              rows={[
                ["Start with", leaderCommitment.pathOne.summaryStart],
                ["Best for", leaderCommitment.pathOne.summaryBestFor],
                ["Deposit treatment", leaderCommitment.pathOne.summaryDeposit],
              ]}
            />
            <SummaryPanel
              title="Path Two"
              rows={[
                ["Start with", leaderCommitment.pathTwo.summaryStart],
                ["Best for", leaderCommitment.pathTwo.summaryBestFor],
                ["Deposit treatment", leaderCommitment.pathTwo.summaryDeposit],
              ]}
            />
            <SummaryPanel
              title="Both Paths"
              rows={[
                ["Require", leaderCommitment.bothPaths.require],
                ["Unlock", leaderCommitment.bothPaths.unlock],
              ]}
              tone="dark"
            />
          </div>
        </Reveal>

        {/* Why commitment matters */}
        <Reveal delay={0.06}>
          <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h3 className="font-serif text-[clamp(1.85rem,3.2vw,2.5rem)] leading-tight text-ink">
                {leaderCommitment.whyMatters.heading}
              </h3>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
                {leaderCommitment.whyMatters.copy.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <aside className="rounded-sm bg-jungle px-7 py-9 text-cream sm:px-9">
              <p className="eyebrow mb-4 text-gold">Shared commitment</p>
              <p className="font-serif text-2xl leading-snug sm:text-[1.85rem]">
                {leaderCommitment.whyMatters.highlight}
              </p>
            </aside>
          </div>
        </Reveal>

        {/* Value stack */}
        <Reveal delay={0.06}>
          <div className="mt-16 overflow-hidden rounded-sm bg-jungle text-cream">
            <div className="border-b border-white/10 px-6 py-8 sm:px-10 sm:py-10">
              <h3 className="font-serif text-[clamp(1.85rem,3.5vw,2.75rem)] leading-tight">
                {leaderCommitment.valueStack.heading}
              </h3>
            </div>
            <ul className="divide-y divide-white/10">
              {leaderCommitment.valueStack.items.map((item) => (
                <li
                  key={item.label}
                  className="grid gap-2 px-6 py-5 sm:grid-cols-[1.2fr_0.8fr] sm:items-center sm:gap-8 sm:px-10"
                >
                  <p className="text-base text-cream/80 sm:text-lg">
                    {item.label}
                  </p>
                  <p className="font-serif text-xl text-cream sm:text-right sm:text-2xl">
                    {item.result}
                  </p>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/10 bg-white/5 px-6 py-10 text-center sm:px-10">
              <p className="eyebrow mb-3 text-gold">
                {leaderCommitment.valueStack.combinedLabel}
              </p>
              <p className="font-serif text-[clamp(2.75rem,8vw,4.5rem)] leading-none tracking-tight">
                Nearly {leaderCommitment.valueStack.combinedAmount}
              </p>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-cream/70 sm:text-base">
                {leaderCommitment.valueStack.combinedNote}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Enrollment definition */}
        <Reveal delay={0.06}>
          <div className="mt-12 rounded-sm border border-[var(--line)] bg-cream-dark/40 p-6 sm:p-9">
            <h3 className="font-serif text-2xl text-ink sm:text-3xl">
              {leaderCommitment.enrollmentDefinition.heading}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {leaderCommitment.enrollmentDefinition.copy}
            </p>
            <p className="mt-6 text-base font-semibold text-ink">
              Do not count:
            </p>
            <ul className="mt-3 space-y-2">
              {leaderCommitment.enrollmentDefinition.doesNotCount.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-ink-soft before:mt-2 before:block before:size-1.5 before:shrink-0 before:rounded-full before:bg-coral before:content-['']"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
              {leaderCommitment.enrollmentDefinition.closing}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {leaderCommitment.termsNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PathCard({
  label,
  heading,
  copy,
  examples,
  idealFor,
  ctaLabel,
  ctaHref,
}: {
  label: string;
  heading: string;
  copy: string[];
  examples: Array<{ title: string; rows: Array<[string, string]> }>;
  idealFor: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <article className="flex h-full flex-col border border-[var(--line)] bg-cream-dark/35 p-6 sm:p-8">
      <p className="eyebrow mb-3 text-coral">{label}</p>
      <h3 className="font-serif text-[clamp(1.7rem,2.8vw,2.15rem)] leading-tight text-ink">
        {heading}
      </h3>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
        {copy.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 space-y-5">
        {examples.map((example) => (
          <div
            key={example.title}
            className="rounded-sm border border-[var(--line)] bg-cream p-5"
          >
            <p className="mb-4 text-sm font-semibold tracking-[0.08em] text-teal uppercase">
              {example.title}
            </p>
            <dl className="space-y-3">
              {example.rows.map(([term, value]) => (
                <div
                  key={`${example.title}-${term}`}
                  className="grid gap-1 border-b border-[var(--line-light)] pb-3 last:border-b-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:gap-4"
                >
                  <dt className="text-sm text-muted">{term}</dt>
                  <dd className="text-base font-medium text-ink sm:text-right">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <p className="mt-6 text-base leading-relaxed text-ink-soft">{idealFor}</p>
      <div className="mt-8">
        <ButtonLink href={ctaHref} className="w-full sm:w-auto">
          {ctaLabel}
        </ButtonLink>
      </div>
    </article>
  );
}

function SummaryPanel({
  title,
  rows,
  tone = "light",
}: {
  title: string;
  rows: Array<[string, string]>;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={
        isDark
          ? "rounded-sm bg-jungle px-6 py-7 text-cream"
          : "rounded-sm border border-[var(--line)] bg-cream px-6 py-7"
      }
    >
      <p className={`eyebrow mb-5 ${isDark ? "text-gold" : "text-teal"}`}>
        {title}
      </p>
      <dl className="space-y-5">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt
              className={`text-xs tracking-[0.14em] uppercase ${isDark ? "text-cream/55" : "text-muted"}`}
            >
              {label}
            </dt>
            <dd
              className={`mt-2 text-base leading-relaxed ${isDark ? "text-cream/90" : "text-ink-soft"}`}
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
