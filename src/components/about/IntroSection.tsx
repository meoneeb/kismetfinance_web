export default function IntroSection() {
  const intro = `Kismet Finance Group was created to simplify the process of exploring financial strategies by acting as a bridge between everyday Australians and licensed professionals. We don't provide financial advice or charge for our service - our role is purely to facilitate referrals to specialists based on your goals and needs.`;
  return (
    <div className="w-full bg-white">
      <div className="page-container py-12">
        <p className="mx-auto max-w-5xl text-center text-lg md:text-xl text-gray-600">
          {intro}
        </p>
      </div>
    </div>
  );
}
