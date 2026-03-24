import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-xl font-semibold tracking-light text-gray-200">
        ICG Capital Africa
      </h1>

      <div className="flex gap-8 text-sm font-medium">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/services" className="hover:text-blue-400">Services</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      
        
      </div>

    </nav>
  );
}

export default Navbar;