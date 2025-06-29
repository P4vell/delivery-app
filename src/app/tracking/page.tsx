"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/map/map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function CartPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Order tracking</h1>

      <div className="relative h-[400px] mt-4 overflow-hidden">
        <Map />
      </div>

      <p className="text-3xl font-semibold mt-4">
        Estimated delivery time: 20 minutes
      </p>
    </div>
  );
}
