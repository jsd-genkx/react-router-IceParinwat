import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-around bg-blue-500 p-4 text-white">
      <Link className="hover:text-yellow-300" to="/">
        Home
      </Link>
      <Link className="hover:text-yellow-300" to="/about">
        About
      </Link>
      <Link className="hover:text-yellow-300" to="/contact">
        Contact
      </Link>
      <Link className="hover:text-yellow-300" to="/products">
        Products
      </Link>
      <Link className="hover:text-yellow-300" to="/profile">
        Profile
      </Link>
    </nav>
  );
};
