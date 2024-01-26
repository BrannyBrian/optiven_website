import { HiStar } from "react-icons/hi";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <HiStar key={index} size={28} className="text-yellow-500" />
  ));

  return <div className="flex">{stars}</div>;
};

export default StarRating;
