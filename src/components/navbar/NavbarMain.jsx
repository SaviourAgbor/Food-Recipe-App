import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  const {searchParams, setSearchParams, handleSubmit} = useContext(GlobalContext);
  

  return (
    <nav className="py-2 backdrop-blur-xl fixed bg-white/50 w-full flex flex-col md:flex-row items-center justify-around md:gap-4 ">
      <h2 className="sm:text-md md:text-2xl font-semibold">
        <NavLink to={"/"}>Food Recipes</NavLink>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Items"
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
          name="search"
          className=" rounded-full  py-3 px-8 bg-white/75 outline-none md:w-96 shadow-md shadow-red-200 focus:shado00 "
        />
      </form>
      <ul className="flex gap-2 text-black mt-2">
        <li className=" hover:text-red-700 duration-3">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <br/>
        <li className="hover:text-red-700 duration-3">
          <NavLink to={"/favorites"}>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}
