import { cn } from "@/lib/utils";

// Decorative organic blob, purely visual, hidden from screen readers.
export function Blob({
  className,
  color = "#EFB49A",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className={cn("pointer-events-none absolute -z-10", className)}
      fill="none"
    >
      <path
        fill={color}
        d="M300 60c70 0 120 45 165 95s85 105 70 170-95 95-155 130-125 70-190 45-95-105-105-175-5-140 45-200S230 60 300 60Z"
      />
    </svg>
  );
}

// Wavy section divider that sits at the top or bottom of a colored band.
export function WaveDivider({
  className,
  color = "#FBF4EA",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={cn("block h-[60px] w-full sm:h-[90px]", flip && "rotate-180", className)}
    >
      <path
        fill={color}
        d="M0 64c120 24 280 40 480 24s360-64 540-64 320 40 420 48v72H0Z"
      />
    </svg>
  );
}
