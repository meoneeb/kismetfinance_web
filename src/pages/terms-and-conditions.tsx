import Head from "next/head";

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Kismet Finance Group</title>
      </Head>
      <div className="min-h-screen bg-gray-100 p-5">
        <div className="mx-auto h-full max-w-7xl rounded-md bg-white p-8  shadow">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Terms and Conditions
          </h1>
          <p className="mb-4 text-gray-700">
            Kismet Finance Group offers property information and education to
            clients, as well as an introductory Discovery Session and access to
            our partnership platform, which features third-party professionals
            and financial service providers (known as affiliates, referral
            partners, or partners). Our website and marketing materials display
            these partners, but please note that Kismet Finance Group does not
            provide financial advice, products, or services. The information we
            provide is general and factual, and does not consider your personal
            or financial objectives. Therefore, it is not intended as a
            recommendation or opinion on any financial product, nor should it be
            relied upon as a substitute for professional advice. We strongly
            recommend seeking your own independent, professional, and legal
            advice before making any decisions related to your personal
            circumstances. Kismet Finance Group reserves the right to update or
            change the partners and their products and services displayed on our
            platform at any time. Please note that Home Loan Solutions,
            Australian Credit License 389510 CRN 104943142, provides financial
            services. Any engagement with Kismet Finance Group or our
            partners/affiliates is solely based on your individual decision to
            do so. While we conduct limited due diligence in the selection of
            our referral partners, we do not take responsibility for their
            conduct, actions, representation, products, or advice provided to
            you. Any agreement between you and our referral partners is strictly
            between you and the referral partner. In some cases, Kismet Finance
            Group may receive a commission for a referral or introduction.
          </p>
          {/* Add more content sections here */}
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
