import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../fearures/cart/cartSlice.js";
import { productDetails } from "../fearures/cart/buynowSlice.js";
import { Link } from "react-router-dom";
 fd 
function SearchedData() {
  const dispatch = useDispatch();

  const { category } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.products);
  const { searchReq } = useSelector((state) => state.search);

  const currentList = category.length > 0 ? category : products;

  const searchedData = currentList.filter((product) =>
    product.title.toLowerCase().includes(searchReq.toLowerCase())
  );

  const handleCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleBuy = (details) => {
    dispatch(productDetails(details));
  };

  return (
    <div className="p-4">
      {searchedData.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchedData.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <Link to="/buy" onClick={() => handleBuy(product)}>
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

              <div className="flex gap-4 mt-4">
                <Link to="/buy">
                  <button
                    onClick={() => handleBuy(product)}
                    className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
                  >
                    Buy now
                  </button>
                </Link>
                <button
                  onClick={() => handleCart(product)}
                  className="px-4 py-2 rounded-xl bg-indigo-100 text-indigo-700 border border-indigo-300 hover:bg-indigo-200 transition"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchedData;
