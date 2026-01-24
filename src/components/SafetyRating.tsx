import { Star } from 'lucide-react';

interface SafetyRatingProps {
  rating: number;
  maxRating?: number;
  label?: string;
  reviewCount?: number;
}

const SafetyRating = ({ rating, maxRating = 5, label, reviewCount }: SafetyRatingProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? 'text-accent fill-accent'
                : 'text-muted-foreground/30'
            }`}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-foreground">{rating.toFixed(1)}</span>
        {label && <span className="text-muted-foreground text-sm">{label}</span>}
        {reviewCount && (
          <span className="text-muted-foreground text-sm">
            ({reviewCount.toLocaleString()} reviews)
          </span>
        )}
      </div>
    </div>
  );
};

export default SafetyRating;
