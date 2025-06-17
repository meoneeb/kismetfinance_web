export default function AboutSection() {
  const text = `At Kismet Finance Group, we help individuals and families navigate
financial opportunities by connecting them with licensed
professionals. We don't offer financial advice or sell financial
products - our role is to introduce you to experts who can help you
take the next step with confidence.`;

  return (
    <>
      {/* White background section */}
      <section className="w-full bg-white">
        <div className="page-container flex flex-col-reverse items-center py-16 md:flex-row md:py-24">
          <div className="w-full overflow-hidden md:w-1/2 md:px-12">
            <img
              src="/images/kfg-about.png"
              alt="Finance professional"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right side: Text content */}
          <div className="flex w-full flex-col justify-center md:w-1/2 md:px-12">
            <h2 className="mb-6 font-extrabold leading-tight tracking-tight text-primary">
              Connecting you with trusted professionals to help{" "}
              <span className="text-secondary">
                you make informed financial decisions.
              </span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">{text}</p>
          </div>
        </div>
      </section>

      {/* Colored background section */}
      <section className="w-full bg-primary">
        <div className="page-container py-24 text-center md:text-left">
          <h2 className="mx-auto max-w-3xl text-2xl font-semibold leading-snug tracking-wide text-white md:mx-0 md:text-3xl">
            We specialize in aligning individuals with vetted professionals who
            can offer support tailored to their needs. Every connection is made
            with care, ensuring you are introduced to the right people to
            explore options confidently.
          </h2>
        </div>
      </section>
    </>
  );
}
