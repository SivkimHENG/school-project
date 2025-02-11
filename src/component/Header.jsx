import { NavLink} from "react-router-dom";

function Header() {
    return (
        <>
            <header className="bg-green-800 py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <h1 className="font-mono text-xl text-white mb-4 sm:mb-0">Culinary Exchange</h1>
                    <nav className="flex items-center space-x-6 sm:space-x-8 font-mono font-bold text-white text-sm">
                      <NavLink
                                to="/"
                                className={({ isActive }) =>
                                  `hover:text-slate-300 transition duration-150 ease-in-out pb-1  ${
                                    isActive ? "border-b-2 border-white" : ""
                                  }`
                                }
                              >
                                Home
                              </NavLink>

                      <NavLink
                                to="/recipes"
                                className={({ isActive }) =>
                                  `hover:text-slate-300 transition duration-150 ease-in-out pb-1 ${
                                    isActive ? "border-b-2 border-white" : ""
                                  }`
                                }
                              >
                               Recipes
                              </NavLink>

                      <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                  `hover:text-slate-300 transition duration-150 ease-in-out pb-1 ${
                                    isActive ? "border-b-2 border-white" : ""
                                  }`
                                }
                              >
                                About
                              </NavLink>
                    </nav>
                </div>
            </header>
        </>
    );
}
export default Header;
