export default function ApproachSection() {
  const intro = `Kismet Finance Group was created to simplify the process of exploring financial strategies by acting as a bridge between everyday Australians and licensed professionals. We don't provide financial advice or charge for our service - our role is purely to facilitate referrals to specialists based on your goals and needs.`;
  return (
    <div className="w-full bg-white">
      <div className="page-container py-12">
        <h2 className="mb-4 text-center text-primary">Our Approach</h2>
        <p className="mx-auto text-center text-gray-600 text-lg">{intro}</p>
      </div>
    </div>
  );
}
