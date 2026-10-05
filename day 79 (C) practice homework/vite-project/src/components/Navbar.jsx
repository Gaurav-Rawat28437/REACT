import { useNavigate, NavLink } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">

      <h3 className="text-xl font-bold">UV</h3>

      <div className="flex gap-6">

        <button
          onClick={() => navigate("/home")}
          className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600"
        >
          HOME
        </button>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "text-red-500 underline"
              : "text-white hover:text-red-400"
          }
        >
          SEARCH
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;