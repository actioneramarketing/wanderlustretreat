import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "secondaryDark";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  secondaryDark: "btn-secondary-dark",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: ButtonLinkProps) {
  const isHash = href.startsWith("#");

  if (isHash) {
    return (
      <a
        href={href}
        className={cn(variants[variant], className)}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn(variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
