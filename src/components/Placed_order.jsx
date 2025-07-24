import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function Placed_order() {
  const product = useSelector((state) => state.buy.product);
  // const dispatch = useDispatch()
  const fakeOrderId = Math.floor(100000 + Math.random() * 900000); // 6-digit random order ID

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          🎉 Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order details are below.
        </p>

        <div className="text-left bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
          <p className="text-sm text-gray-500">Order ID:</p>
          <p className="text-base font-medium text-gray-800 mb-3">
            #{fakeOrderId}
          </p>

          <div className="flex items-center gap-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-24 h-24 object-cover rounded-md border"
            />
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {product.title}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Category: {product.category}
              </p>
              <p className="text-sm text-gray-600">Price: ₹{product.price}</p>
              <p className="text-sm text-gray-600">
                In Stock: {product.stock} items
              </p>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-700 space-y-1">
            <p>
              <span className="font-medium">Brand:</span> {product.brand}
            </p>
            <p>
              <span className="font-medium">Shipping:</span>{" "}
              {product.shippingInformation}
            </p>
            <p>
              <span className="font-medium">Return Policy:</span>{" "}
              {product.returnPolicy}
            </p>
            <p>
              <span className="font-medium">Warranty:</span>{" "}
              {product.warrantyInformation}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Link to="/">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Back to Home
            </button>
          </Link>
          <Link to="/myOrders">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
              View Orders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Placed_order;
