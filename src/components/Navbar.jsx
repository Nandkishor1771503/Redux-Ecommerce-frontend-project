import { searchProduct } from "../fearures/cart/searchSlice.js";
import { PackageCheck, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const { cartProduct } = useSelector((state) => state.cart);

  const onSearch = (e) => {
    dispatch(searchProduct(e.target.value));
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
          <div className="text-2xl font-bold text-blue-600">MyBrand</div>
          </Link>

          {/* Search */}
          <div className="w-full px-4 flex justify-center">
            <div className="w-full max-w-2xl flex items-center border border-gray-300 rounded-xl overflow-hidden">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-3 text-gray-700 outline-none"
                onChange={onSearch}
              />
            </div>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/myOrders">
              <button className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-semibold py-2 px-6 rounded-2xl shadow-md border border-gray-300">
                <PackageCheck className="w-5 h-5" />
                Orders
              </button>
            </Link>
            <Link to="/cart">
              <div className="relative">
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow-md">
                  {cartProduct.length}
                </div>
                <ShoppingCart size={30} className="text-gray-700 hover:text-blue-600 transition cursor-pointer" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
