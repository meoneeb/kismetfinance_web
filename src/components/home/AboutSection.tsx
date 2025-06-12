export default function AboutSection() {
  const text = `At Kismet Finance Group, we help individuals and families navigate
<<<<<<< HEAD
            financial opportunites by connecting them with licensed
            professionals. We don't offer financial advice or sell financial
            products - our role is to introduce you to experts who can help you
            take the next step with confidence.`;
  return (
    <>
      <div className="w-full bg-white">
        <div className="page-container flex flex-col items-center py-12 md:flex-row">
          <div className="w-full md:w-1/2">IMAGE HERE</div>
          <div className="w-full md:w-1/2">
            <h2 className="mb-2 text-primary">
              Connecting you with trusted professionals to help{" "}
              <span className="text-secondary">
                you make informed financial decisions
              </span>
            </h2>
            <p className="text-gray-600">{text}</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary">
        <div className="page-container py-24">
          <h2 className="w-full text-white md:w-2/3">
=======
financial opportunities by connecting them with licensed
professionals. We don't offer financial advice or sell financial
products - our role is to introduce you to experts who can help you
take the next step with confidence.`;

  return (
    <>
      {/* White background section */}
      <section className="w-full bg-white">
        <div className="page-container flex flex-col-reverse md:flex-row items-center py-16 md:py-24 gap-12 md:gap-20">
          {/* Left side: Single large image */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://i.ibb.co/Q7jx9DVB/DSC01518.jpg"
              alt="Finance professional"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Right side: Text content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="mb-6 text-primary text-4xl font-extrabold leading-tight tracking-tight">
              Connecting you with trusted professionals to help{" "}
              <span className="text-secondary">you make informed financial decisions</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
              {text}
            </p>
          </div>
        </div>
      </section>

      {/* Colored background section */}
      <section className="w-full bg-primary">
        <div className="page-container py-24 text-center md:text-left">
          <h2 className="text-white max-w-3xl mx-auto md:mx-0 text-2xl md:text-3xl font-semibold leading-snug tracking-wide">
>>>>>>> 04983d8 (Initial commit with updated logo and layout redesign)
            We specialize in aligning individuals with vetted professionals who
            can offer support tailored to their needs. Every connection is made
            with care, ensuring you are introduced to the right people to
            explore options confidently.
          </h2>
        </div>
<<<<<<< HEAD
      </div>
=======
      </section>
>>>>>>> 04983d8 (Initial commit with updated logo and layout redesign)
    </>
  );
}
