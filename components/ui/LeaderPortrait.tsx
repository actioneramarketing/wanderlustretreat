import Image from "next/image";
import { cn } from "@/lib/utils";

type LeaderPortraitProps = {
  name: string;
  initials: string;
  image?: string | null;
  alt?: string;
  objectPosition?: string;
  status?: "confirmed" | "tba" | "host";
  className?: string;
};

/**
 * Shared 4:5 editorial portrait frame for leaders and host.
 */
export function LeaderPortrait({
  name,
  initials,
  image,
  alt,
  objectPosition = "center 18%",
  status = "tba",
  className,
}: LeaderPortraitProps) {
  const placeholderTone =
    status === "confirmed" || status === "host"
      ? "bg-gradient-to-br from-forest to-jungle"
      : "bg-gradient-to-br from-sand to-cream-dark";

  const initialsTone =
    status === "confirmed" || status === "host"
      ? "text-cream/90"
      : "text-cacao/50";

  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden rounded-sm",
        className,
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={alt || name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 45vw, 280px"
          className="object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <div
          className={cn(
            "flex h-full w-full items-center justify-center",
            placeholderTone,
          )}
          aria-hidden="true"
        >
          <span className={cn("font-serif text-5xl", initialsTone)}>
            {initials}
          </span>
        </div>
      )}
    </div>
  );
}
