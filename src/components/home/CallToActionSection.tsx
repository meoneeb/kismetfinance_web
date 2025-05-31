export default function CallToActionSection() {
  return (
    <div className="relative h-auto w-full bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-home bg-cover bg-bottom opacity-10" />

      {/* Overlay Content */}
      <div className="page-container relative z-10 flex min-h-[40vh] items-center justify-center py-12">
        <h2 className="text-center text-white">
          Facilitating access to financial solutions through trusted
          partnerships.
        </h2>
      </div>
    </div>
  );
}
