import { CartItem, Restaurant } from "@/types";

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Pizza Place",
    type: "Pizza",
    image:
      "https://images.unsplash.com/photo-1672596467694-65f215f9b5fa?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    ratingsCount: 120,
  },
  {
    name: "Burger Joint",
    type: "Burger",
    image:
      "https://images.unsplash.com/photo-1593462386344-bc7ffba51a1e?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.2,
    ratingsCount: 95,
  },
  {
    name: "Sushi Spot",
    type: "Sushi",
    image:
      "https://images.unsplash.com/photo-1554502078-ef0fc409efce?q=80&w=1684&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    ratingsCount: 200,
  },
  {
    name: "Thai Delight",
    type: "Thai",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.0,
    ratingsCount: 80,
  },
];

export const DUMMY_CART: CartItem[] = [
  {
    name: "Pizza Margherita",
    image:
      "https://images.unsplash.com/photo-1702716059239-385baacdabdc?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 2,
    price: 15.99,
  },
  {
    name: "Pizza Pepperoni",
    image:
      "https://images.unsplash.com/photo-1692737580547-b45bb4a02356?q=80&w=1215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 1,
    price: 19.99,
  },
];
