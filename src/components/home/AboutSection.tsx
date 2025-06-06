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
        <div className="page-container flex flex-col-reverse items-center gap-12 py-16 md:flex-row md:gap-20 md:py-24">
          {/* Left side: Single large image */}
          <div className="w-full overflow-hidden rounded-xl shadow-xl transition-shadow duration-300 hover:shadow-2xl md:w-1/2">
            <img
              src="https://i.ibb.co/Q7jx9DVB/DSC01518.jpg"
              alt="Finance professional"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right side: Text content */}
          <div className="flex w-full flex-col justify-center md:w-1/2">
            <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary">
              Connecting you with trusted professionals to help{" "}
              <span className="text-secondary">
                you make informed financial decisions
              </span>
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-gray-700">
              {text}
            </p>
          </div>
        </div>
      </section>

      {/* Colored background section */}
      <section
        className="h-[60vh] w-full overflow-hidden"
        style={{
          backgroundImage: `
      linear-gradient(
        to right,
        rgba(30,58,95, 1) 0%,
        rgba(30,58,95, 0.7) 50%,
        rgba(30,58,95, 0.4) 100%,
        transparent 100%
      ),
      url('/images/DSC01741.webp')
    `,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="page-container py-24 text-center md:text-left">
          <h2 className="relative z-10 mx-auto max-w-3xl font-semibold leading-snug tracking-tight text-white md:mx-0">
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
