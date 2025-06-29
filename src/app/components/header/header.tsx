import { Search } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-16 flex justify-between items-center bg-orange-500 px-4">
      <Link href="/" className="text-lg text-white font-semibold">
        Delivery App
      </Link>

      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-white border rounded-lg px-4 py-1 w-54"
        />
        <Search
          size="20"
          className="absolute right-4 top-1/2 -translate-y-1/2"
        />
      </div>
    </header>
  );
};

export default Header;
