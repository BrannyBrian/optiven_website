import { HiStar } from "react-icons/hi";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <HiStar key={index} size={28} className="text-yellow-500 -mt-4 md:-mt-5 lg:-mt-6" />
  ));

  return <div className="flex">{stars}</div>;
};

export default StarRating;
