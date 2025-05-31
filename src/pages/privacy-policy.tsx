import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Kismet Finance Group</title>
      </Head>
      <div className="min-h-screen bg-gray-100 p-5">
        <div className="mx-auto h-full max-w-7xl rounded-md bg-white p-8 shadow">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Privacy Policy
          </h1>
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Kismet Finance Group ACN 665 148 390 and the Privacy Act 1988
          </h2>
          <p className="mb-4 text-gray-600">
            Statement on the Use of Your Personal Information Privacy Act 1988
            Kismet Finance Group ACN 665 148 390 collects information about you
            for the purpose you agree to in this privacy disclosure statement
            and consent form. Kismet Finance Group is covered by the Privacy Act
            1988. In accordance with the obligations under the privacy act 1988,
            this document advises you of the manner in which your personal
            information is handled by us and by our partners, which we may use
            from time to time.
          </p>
          <h2>We respect the privacy of your personal information.</h2>
          <p className="mb-4 text-gray-600">
            Kismet Finance Group will keep your personal information on file for
            the sole purpose of communicating with you about the services
            available to you through our partnership platform. Under the Privacy
            Act, you have the right to access this information. To exercise this
            right, please contact our office. Rest assured that the information
            held by Kismet Finance Group can be accessed by you in accordance
            with the Privacy Act of 1988.
            {/* Add more content sections here */}
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
