export function AboutFounder() {
  return (
    <section className="bg-ss-surface">
      <div className="ss-section">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr] items-center">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-ss-primary to-ss-accent opacity-40 blur-2xl" />
            <div className="relative rounded-full bg-white shadow-xl border border-black/5 flex items-center justify-center">
              {/* Sera photo placeholder */}
              <span className="text-xs text-center px-4">
                Placeholder for Sera's photo
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-ss-accent uppercase tracking-[0.18em] mb-3">
              Our Founder
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Sera is building the space she wished existed as a kid.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ss-muted">
              Sera's mission is rooted in lived experience and deep empathy.
              Growing up, she saw how often children carry heavy stories in silence.
              Smile Sunshine Org is her answer: a safe, loving space where
              kids can express themselves without judgment, be surrounded by
              trusted mentors, and feel the kind of support every child deserves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
