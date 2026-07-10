import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-semibold text-clay-500">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
        This page wandered off
      </h1>
      <p className="mt-3 max-w-md text-lg text-ink-soft">
        The page you&apos;re looking for isn&apos;t here — but healing is still
        just a click away.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" arrow>
          Back home
        </Button>
        <Button href="/services" variant="secondary">
          Explore services
        </Button>
      </div>
    </section>
  );
}
