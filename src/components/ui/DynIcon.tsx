import {
  Waves,
  Zap,
  Baby,
  Sprout,
  Feather,
  Flame,
  Heart,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Waves,
  Zap,
  Baby,
  Sprout,
  Feather,
  Flame,
  Heart,
};

export function DynIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? Heart;
  return <Icon className={className} aria-hidden="true" />;
}
