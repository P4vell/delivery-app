import { RESTAURANTS } from "@/constants";
import Filters from "./components/filters/filters";
import RestaurantCard from "./components/restaurant-card/restaurant-card";

export default function Home() {
  return (
    <div className="pt-4">
      <Filters />

      <ul className="p-4 space-y-6">
        {RESTAURANTS.map((restaurant) => (
          <RestaurantCard key={restaurant.name} restaurant={restaurant} />
        ))}
      </ul>
    </div>
  );
}
