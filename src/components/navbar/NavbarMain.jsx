import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="py-2 px-5 backdrop-blur-xl fixed bg-white/50 w-full flex flex-col md:flex-row items-center justify-around md:gap-15 lg:gap-20">
      {/* Top section (h2 + nav links) only stacked on small screens */}
      <div className=" w-full flex justify-between gap-5">
        <h2 className="sm:text-md md:text-2xl font-semibold leading-5  ">
          <NavLink to={"/"}>Food Recipes</NavLink>
        </h2>

        <ul className="flex gap-2 md:gap-5 items-center   text-black md:mt-0">
          <li className="hover:text-red-700 duration-300">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <span>|</span>
          <li className="hover:text-red-700 duration-300">
            <NavLink to={"/favorites"}>Favorites</NavLink>
          </li>
        </ul>
      </div>

      {/* Form moves below only on small screens */}
      <form onSubmit={handleSubmit} className="w-full mt-1 md:mt-0 flex tiems-center justify-center md:flex-col">
        <input
          type="text"
          placeholder="Search Items"
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
          name="search"
          className="rounded-full py-2 md:py-3 px-4 md:px-8 bg-white/75 outline-none md:w-96 shadow-md shadow-red-200 :shadow-none"
        />
      </form>
    </nav>
  );
}
