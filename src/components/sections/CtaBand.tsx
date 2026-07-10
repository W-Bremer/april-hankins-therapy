import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand({
  heading = "You matter too.",
  sub = "Book a free 15-minute consult and see if we're a fit. No pressure, no script — just a real conversation about where you are and where you'd like to go.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-clay-500 py-20 text-cream-50 sm:py-28">
      {/* playful dots */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FBF4EA 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-marigold-300/40 blur-2xl" />
      <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-berry-500/40 blur-2xl" />
      <div className="container-x relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream-50/90">
            {sub}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={SITE.booking}
              external
              variant="berry"
              arrow
              className="!bg-berry-500 hover:!bg-berry-600"
            >
              Book your free consult
            </Button>
            <Button
              href={SITE.phoneHref}
              variant="secondary"
              className="!bg-cream-50/10 !text-cream-50 !ring-cream-50/30 hover:!ring-cream-50"
            >
              Call {SITE.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
