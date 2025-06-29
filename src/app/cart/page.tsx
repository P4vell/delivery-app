import { DUMMY_CART } from "@/constants";
import { SquarePen, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const cartTotalPrice = DUMMY_CART.reduce(
    (acc, i) => acc + i.price * i.quantity,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Your order</h1>

      <ul className="py-8 space-y-4">
        {DUMMY_CART.map((item) => (
          <li
            key={item.name}
            className="flex mb-4 border border-gray-500 rounded-lg p-1"
          >
            <div className="relative w-20 h-20 mr-4">
              <Image
                src={item.image}
                alt={item.name}
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">
                {item.name} x{item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>

            <div className="flex justify-center gap-2 ml-18">
              <button>
                <SquarePen />
              </button>
              <button>
                <Trash />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-2xl font-bold mt-92">Total price: ${cartTotalPrice}</p>

      <Link
        href="/payment"
        className="w-full h-10 flex justify-center items-center bg-orange-500 text-white font-semibold rounded-lg mt-4"
      >
        Continue
      </Link>
    </div>
  );
}
