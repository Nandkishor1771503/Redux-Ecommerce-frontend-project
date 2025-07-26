import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-400 mb-2">E-Shop</h2>
          <p className="text-gray-400">
            Your one-stop destination for quality products. Shop smart, live better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-indigo-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/myOrders" className="hover:text-white">Orders</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-indigo-300">Categories</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Fragrances</a></li>
            <li><a href="#" className="hover:text-white">Skincare</a></li>
            <li><a href="#" className="hover:text-white">Electronics</a></li>
            <li><a href="#" className="hover:text-white">Groceries</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-indigo-300">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white"><Facebook /></a>
            <a href="#" className="hover:text-white"><Instagram /></a>
            <a href="#" className="hover:text-white"><Twitter /></a>
            <a href="https://github.com/your-username" target="_blank" className="hover:text-white"><Github /></a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
