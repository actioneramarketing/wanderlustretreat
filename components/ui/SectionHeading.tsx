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
            "eyebrow mb-4",
            isLight ? "text-gold" : "text-teal",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "font-serif text-balance text-[2.15rem] leading-[1.12] font-medium tracking-tight whitespace-pre-line sm:text-5xl lg:text-[3.35rem]",
          isLight ? "text-cream" : "text-ink",
        )}
      >
        {heading}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed sm:text-xl",
            isLight ? "text-cream/80" : "text-ink-soft",
            isCenter && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
