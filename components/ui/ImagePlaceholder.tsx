import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
  aspect?: "video" | "square" | "portrait" | "wide";
};

const aspectClasses = {
  video: "aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[21/9]",
};

export function ImagePlaceholder({
  label,
  className,
  aspect = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex items-end overflow-hidden rounded-sm border border-[var(--line)] bg-gradient-to-br from-forest/90 via-jungle to-jungle-deep p-6 sm:p-8",
        aspectClasses[aspect],
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(184,160,106,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(74,124,122,0.35), transparent 45%)",
        }}
      />
      <div className="relative">
        <p className="eyebrow mb-2 text-gold/80">Photo forthcoming</p>
        <p className="max-w-xs font-serif text-2xl leading-snug text-cream">
          {label}
        </p>
      </div>
    </div>
  );
}
