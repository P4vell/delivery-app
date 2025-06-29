import { Restaurant } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

type Props = {
  restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: Props) => {
  const { name, type, image, rating, ratingsCount } = restaurant;

  return (
    <li className="border rounded-lg p-4">
      <div className="relative w-full h-64 mb-4">
        <Image src={image} alt={name} className="rounded-lg" fill />
      </div>

      <p className="text-2xl font-semibold">{name}</p>
      <p>{type}</p>
      <div className="flex items-center gap-1 mt-2">
        <Star size="18" className="text-yellow-500" />
        <span className="text-yellow-500">{rating.toFixed(1)}</span>
        <span className="text-gray-500">({ratingsCount} ratings)</span>
      </div>
    </li>
  );
};

export default RestaurantCard;
