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
}
