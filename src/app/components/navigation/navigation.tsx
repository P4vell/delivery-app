import { Home, Settings, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="h-16 fixed bottom-0 inset-x-0 bg-white z-10 shadow-2xl border-t border-gray-200 flex justify-center">
      <ul className="flex justify-center items-center gap-8">
        <li>
          <Link href="/">
            <Home />
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <User />
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <Settings />
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <ShoppingCart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
