import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../fearures/cart/cartSlice.js";
import { Link } from "react-router-dom";
import { productDetails } from "../fearures/cart/buynowSlice.js";

function Cart() {
  const { cartProduct } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearAll = () => {
    dispatch(clearCart());
  };
  const handleBuy = (details) => {
    console.log(details);
    dispatch(productDetails(details));
  };
  return (
    <>
      <div className="flex">
        <h1 className="m-5 underline">Cart Items: {cartProduct.length}</h1>
        <button onClick={clearAll}>Clear cart</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {cartProduct &&
          cartProduct.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Link
                to="/buy"
                onClick={() => {
                  handleBuy(product);
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover shadow-md rounded-lg mb-3"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-green-600 font-bold mt-2">
                  ${product.price}
                </p>
              </Link>

              <div className="flex gap-5 m-4">
                <Link to="/buy">
                  <button
                    className="sm:w-auto p-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 shadow-sm"
                    onClick={() => {
                      handleBuy(product);
                    }}
                  >
                    Buy now
                  </button>
                </Link>
                <button
                  className="sm:w-auto p-2 rounded-xl bg-red-100 text-red-700 border border-red-300 hover:bg-red-200 transition duration-300 shadow-sm"
                  onClick={() => handleRemoveCart(product.id)}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Cart;
