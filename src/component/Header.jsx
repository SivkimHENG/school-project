import { NavLink} from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex py-9 bg-green-600 justify-around items-center">
        <h1 className="font-mono text-3xl text-white">Culinary Exchange</h1>
        <div className="flex justify-around items-center text-white space-x-36 font-mono font-bold text-lg">
          <NavLink to="/" className={`hover:text-slate-500`}>
            Home
          </NavLink>
          <NavLink to="/recipes" className="hover:text-slate-500">
            Recipe
          </NavLink>
          <NavLink to="/about" className="hover:text-slate-500">
            About
          </NavLink>
          <NavLink to="/shop" className="hover:text-slate-500">
            Shop
          </NavLink>
        </div>
        <div className="text-white">
        </div>
      </div>
    </>
  );
}
export default Header;
