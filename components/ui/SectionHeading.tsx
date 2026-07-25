import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  headingAs?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  tone = "dark",
  className,
  headingAs: Tag = "h2",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-5",
            isLight ? "text-gold" : "text-teal",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "font-serif text-balance text-[clamp(2.1rem,4.2vw,3.35rem)] leading-[1.12] font-medium tracking-tight whitespace-pre-line",
          isLight ? "text-cream" : "text-ink",
        )}
      >
        {heading}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-lg leading-relaxed sm:text-xl",
            isLight ? "text-cream/85" : "text-ink-soft",
            isCenter && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
