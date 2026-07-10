const PHRASES = [
  "You aren't broken",
  "Break the cycle",
  "You matter too",
  "Find your spark again",
  "Reclaim your badass self",
  "This is hard because it is hard",
  "Rest is not a reward",
  "Healing at the root",
];

export function Marquee() {
  const loop = [...PHRASES, ...PHRASES];
  return (
    <div className="relative overflow-hidden border-y border-berry-500/15 bg-berry-500 py-4">
      <div className="flex w-max animate-marquee gap-6 whitespace-nowrap will-change-transform">
        {loop.map((phrase, i) => (
          <span
            key={i}
            className="flex items-center gap-6 font-display text-lg font-medium text-cream-50/90 sm:text-2xl"
          >
            {phrase}
            <span className="text-marigold-300">✿</span>
          </span>
        ))}
      </div>
    </div>
  );
}
