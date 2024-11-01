import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-6 bg-gray-100 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <nav className="w-full flex justify-around mb-4 ">
        <Link
          to="info"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          Profile Info
        </Link>
        <Link
          to="orders"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          Orders
        </Link>
        <Link
          to="settings"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          Settings
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
