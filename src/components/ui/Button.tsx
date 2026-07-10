import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "berry";

const variants: Record<Variant, string> = {
  primary:
    "bg-clay-500 text-cream-50 hover:bg-clay-600 shadow-soft hover:shadow-lift",
  berry:
    "bg-berry-500 text-cream-50 hover:bg-berry-600 shadow-soft hover:shadow-lift",
  secondary:
    "bg-cream-50 text-ink ring-2 ring-ink/10 hover:ring-clay-400 hover:text-clay-600",
  ghost: "bg-transparent text-ink hover:text-clay-600",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  arrow = false,
  external = false,
}: Props) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-300",
    variants[variant],
    className
  );
  const inner = (
    <>
      {children}
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
