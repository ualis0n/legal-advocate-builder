export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
        <p className="eyebrow animate-rise text-bronze">{eyebrow}</p>
        <h1 className="animate-rise mt-6 max-w-3xl text-[2.25rem] leading-[1.1] md:text-[3.5rem]">
          {title}
        </h1>
        {intro && (
          <p className="animate-rise mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
