<<<<<<< HEAD
export default function ReviewsSection() {
  return (
    <div className="w-full bg-zinc-100">
      <div className="page-container py-12">
        <h2 className="mx-auto mb-8 text-center">Google Reviews</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviewsList.map((review, idx) => (
            <ReviewItem review={review} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ReviewItemProp {
  review?: any;
}

function ReviewItem({ review }: ReviewItemProp) {
  return (
    <div className="w-full border border-zinc-200 bg-white p-4 md:p-6">
      <p className="mb-2 text-center text-lg font-medium text-gray-900">
        {review.authorName}
      </p>
      <div className="text-center">{displayStarRating(review.rating)}</div>
      <p className="text-center text-gray-600">{review.review}</p>
    </div>
  );
}
const reviewsList = [
  {
    authorName: "Sarah J.",
    rating: 5,
    review: "Amazing experience! Highly recommend their services.",
  },
  {
    authorName: "Mike L.",
    rating: 4.4,
    review: "Good product, met my expectations. Shipping was a bit slow.",
  },
  {
    authorName: "Anonymous",
    rating: 5,
    review: "Fantastic service! Will definitely be a returning customer.",
  },
  {
    authorName: "Emily C.",
    rating: 3,
    review: "It was okay. Nothing spectacular, but it got the job done.",
  },
  {
    authorName: "David K.",
    rating: 4,
    review: "Very satisfied with the quality and customer support.",
  },
];

function displayStarRating(rating: number): string {
  const roundedRating = Math.round(rating);
  const clampedRating = Math.max(0, Math.min(5, roundedRating));
  const fullStars = "⭐".repeat(clampedRating);
  const emptyStars = "☆".repeat(5 - clampedRating);
  return fullStars + emptyStars;
=======
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Adam Walker",
    rating: 5,
    text:
      "A friend of mine referred us to Kismet to help us out with our interest rates. The process was nice and convenient, we had one of the fellas come out to our place and then we were visited by one of their Senior Specialists who also showed us some other strategies, me being FIFO and paying so much tax was a killer but Dan showed us some ways to tax minimise and helped with those interest rates... Cheers guys, you’re all really a good bunch of people! Looking forward to our next catch up.",
  },
  {
    name: "Riley-James Hogg",
    rating: 5,
    text:
      "I can not thank the team at Kismet enough for all their help. You have all been so supportive and have made me feel like a person and not a number lost in a system. Im not overly financially savvy but they have been there every step of the way. I wish there were more than 5 stars! Thanks again.",
  },
  {
    name: "Robyn Willers",
    rating: 5,
    text:
      "I honestly wish someone like Dan was around years ago to help educate the public about superannuation. He is very informative, patient and clearly outlines investment goals and procedures. My Self Managed Super Fund is actually working productively and I am very comfortable with my future retirement plans. Kismet has great customer service with regular check ups to ensure you understand that everything is ok and on track. I highly recommend the team Dan, Josh, Shane and Stuart to anyone who is seeking knowledgeable, experienced and trustworthy advisors to help plan and manage your financial future. It's a 5 star review and big thumbs up from me *****👍",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-[#b59d2d]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.965c.3.922-.755 1.688-1.54 1.118l-3.382-2.454a1 1 0 00-1.175 0l-3.382 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.965a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.286-3.966z" />
        </svg>
      ))}
    </div>
  );
}

const Arrow = ({ direction, onClick }: { direction: "left" | "right"; onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "left" ? "Previous review" : "Next review"}
      className={`absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#b59d2d] flex items-center justify-center shadow-lg hover:bg-[#a08825] transition-colors ${
        direction === "left" ? "-left-6" : "-right-6"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        {direction === "left" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
};

export default function ReviewsSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full bg-zinc-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#0f2b4e] mb-12">
          Client Testimonials
        </h2>

        <Slider {...settings} className="relative">
          {reviews.map((review, idx) => (
            <article
              key={idx}
              className="bg-white border border-[#b59d2d] rounded-xl p-6 mx-4 min-h-[360px] flex flex-col shadow-md"
            >
              <h3 className="text-lg font-semibold text-[#0f2b4e] mb-1 text-center">{review.name}</h3>
              <StarRating rating={review.rating} />
              <p className="text-sm text-[#0f2b4e] leading-relaxed text-left">{review.text}</p>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
>>>>>>> 04983d8 (Initial commit with updated logo and layout redesign)
}
