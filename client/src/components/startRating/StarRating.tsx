import { useState } from "react";
import Star from "../star/Star";
function StarRating({ getRating }: any) {
  const [rating, setRating] = useState(0);
  console.log(rating);

  const changeRating = (newRating: any) => {
    setRating(newRating);
    getRating(newRating);
  };
  return (
    <span className="flex">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))}
    </span>
  );
}
export default StarRating;
