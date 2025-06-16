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
          {/* <div className="w-full overflow-hidden rounded-xl shadow-xl transition-shadow duration-300 hover:shadow-2xl md:w-1/2">
           
          </div> */}
          <div className="w-full overflow-hidden md:w-1/2">
            <img
              src="/images/kfg-about.png"
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

interface MaskedImageProps {
  imageUrl: string;
  width?: number;
  height?: number;
}

const MaskedImage: React.FC<MaskedImageProps> = ({
  imageUrl,
  width = 200,
  height = 200,
}) => {
  return (
    <div style={{ width, height }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="customMask">
            <path d="M0 800H260V0H0V800Z" fill="#D9D9D9" />
            <path d="M280 880H540V80H280V880Z" fill="#D9D9D9" />
            <path d="M560 840H820V40H560V840Z" fill="#D9D9D9" />
          </mask>
        </defs>

        <image
          x="0"
          y="0"
          width={width}
          height={height}
          href={imageUrl}
          mask="url(#customMask)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
};

// <svg width="820" height="880" viewBox="0 0 820 880" fill="none" xmlns="http://www.w3.org/2000/svg">

// </svg>
