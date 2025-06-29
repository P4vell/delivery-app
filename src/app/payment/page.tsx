import { DUMMY_CART } from "@/constants";

export default function PaymentPage() {
  const cartTotalPrice = DUMMY_CART.reduce(
    (acc, i) => acc + i.price * i.quantity,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Payment</h1>

      <form className="flex flex-col my-4">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="h-10 border rounded-lg mb-4" />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="h-10 border rounded-lg mb-4"
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          className="h-10 border rounded-lg mb-4"
        />
      </form>

      <h2 className="text-3xl font-bold">Payment options</h2>

      <div className="flex flex-col gap-4 my-4">
        <button className="w-full h-12 border rounded-lg text-xl font-semibold">
          Credit card
        </button>
        <button className="w-full h-12 border rounded-lg text-xl font-semibold">
          Cash
        </button>
        <button className="w-full h-12 border rounded-lg text-xl font-semibold">
          BLIK
        </button>
        <button className="w-full h-12 border rounded-lg text-xl font-semibold">
          Google Pay
        </button>
      </div>

      <p className="text-2xl font-bold mt-20">Total price: ${cartTotalPrice}</p>

      <button className="w-full h-10 bg-orange-500 text-white font-semibold rounded-lg mt-4">
        Continue
      </button>
    </div>
  );
}
