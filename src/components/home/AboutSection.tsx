export default function AboutSection() {
  const text = `At Kismet Finance Group, we help individuals and families navigate
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
            <p className="text-gray-700">{text}</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary">
        <div className="page-container py-24">
          <h2 className="w-full text-white md:w-2/3">
            We specialize in aligning individuals with vetted professionals who
            can offer support tailored to their needs. Every connection is made
            with care, ensuring you are introduced to the right people to
            explore options confidently.
          </h2>
        </div>
      </div>
    </>
  );
}
