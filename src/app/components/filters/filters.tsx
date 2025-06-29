"use client";

import { useState } from "react";

const FILTERS = [
  {
    id: 0,
    label: "Pizza",
  },
  {
    id: 1,
    label: "Burger",
  },
  {
    id: 2,
    label: "Sushi",
  },
  {
    id: 3,
    label: "Thai",
  },
] as const;

const Filters = () => {
  const [currentFilter, setCurrentFilter] = useState<number | null>(null);

  return (
    <ul className="flex justify-center items-center gap-4">
      {FILTERS.map(({ id, label }) => {
        const isActive = id === currentFilter;

        const handleClick = () => {
          if (isActive) {
            setCurrentFilter(null);
            return;
          }
          setCurrentFilter(id);
        };

        return (
          <li key={id}>
            <button
              className={`border px-6 py-2 rounded-2xl ${
                isActive && "bg-orange-500 text-white"
              }`}
              aria-current={id === currentFilter}
              onClick={handleClick}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
