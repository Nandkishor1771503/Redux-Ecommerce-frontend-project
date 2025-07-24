import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../fearures/cart/cartSlice";
import { productDetails } from "../fearures/cart/buynowSlice.js";
import { addOrder } from "../fearures/cart/myOrdersSlice.js";
import { addReview } from "../fearures/cart/reviewSlice.js";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";

function Buynow() {
  const reviewRef = useRef();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.buy.product);
  const { review } = useSelector((state) => state.reviews);
  console.log(review)

  const handleOrder = (order) => {
    dispatch(productDetails(order));
    dispatch(addOrder(order));
  };

  const handleCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleReview = () => {
    if (reviewRef.current.value != "") {
      console.log(reviewRef.current.value)
      dispatch(addReview(reviewRef.current.value));
    }else{
      alert("review cant be empty...")
    }
  };

  if (!product) return <p>Loading...</p>;
  return (
    <div>
      <Navbar />
      <h1> your product</h1>

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="w-full md:w-72 h-72 object-cover rounded-xl shadow"
          />

          {/* Product Info */}
          <div className="flex-1 space-y-3">
            <h2 className="text-3xl font-bold text-gray-800">
              {product?.title}
            </h2>
            <p className="text-gray-600">{product?.description}</p>

            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-green-600">
                ${product?.price}
              </span>
              <span className="text-sm line-through text-gray-400">
                $
                {(
                  product?.price +
                  (product?.price * product?.discountPercentage) / 100
                ).toFixed(2)}
              </span>
              <span className="text-sm text-red-500 font-medium">
                -{product?.discountPercentage}%
              </span>
            </div>

            <p className="text-sm text-gray-500">
              Category: {product?.category}
            </p>
            <p className="text-sm text-gray-500">Brand: {product?.brand}</p>
            <p className="text-sm text-gray-500">Stock: {product?.stock}</p>
            <p className="text-sm text-gray-500">
              Warranty: {product?.warrantyInformation}
            </p>
            <p className="text-sm text-gray-500">
              Shipping: {product?.shippingInformation}
            </p>
            <p className="text-sm text-gray-500">
              Return Policy: {product?.returnPolicy}
            </p>

            <div className="flex gap-2 mt-4">
              {product?.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <Link to="/order">
            <button
              className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-5 py-2 rounded-xl transition"
              onClick={() => {
                handleOrder(product);
              }}
            >
              Place Order
            </button>
          </Link>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-xl transition"
            onClick={() => {
              handleCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>

        {/* Reviews */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
          <div
            className="flex
          "
          >
            <input
              type="text"
              id="userInput"
              placeholder="Your review..."
              className="w-[85%] px-4 py-2 mb-5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              ref={reviewRef}
            />
            <button
              className="w-[12%] mx-5 mb-5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
              onClick={handleReview}
            >
              Add Review
            </button>
          </div>
          <div className="space-y-3 my-3">
            {review.map((review, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-xl border">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-800">
                    Anonymous
                  </p>
                  <p className="text-sm text-yellow-600">
                    Rating: ⭐
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-1">{review}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {product?.reviews?.map((review, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-xl border">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-800">
                    {review.reviewerName}
                  </p>
                  <p className="text-sm text-yellow-600">
                    Rating: {review.rating}⭐
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buynow;
