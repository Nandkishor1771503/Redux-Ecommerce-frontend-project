import { useEffect } from "react";
import { fetchData } from "../fearures/cart/productSlice.js";
import { addToCart } from "../fearures/cart/cartSlice.js";
import { productDetails } from "../fearures/cart/buynowSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const { searchReq } = useSelector((state) => state.search.searchReq);
  //   console.log(products);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleBuy = (details) => {
    dispatch(productDetails(details));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {error ? error : ""}
        {loading ? <p>loading....</p> : ""}
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => {
                handleBuy(product);
              }}
            >
              <Link to="/buy">
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
                  className="sm:w-auto p-2 rounded-xl bg-indigo-100 text-indigo-700 border border-indigo-300 hover:bg-indigo-200 transition duration-300 shadow-sm"
                  onClick={() => {
                    // e.preventDefault();
                    // e.stopPropagation();
                    handleCart(product);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* <div className="m-5 mt-10 flex flex-col gap-2">
        <h1>E-Com project with redux</h1>
        <h2>Search Products /products?search=mascara❓</h2>

        <h2>Filter by Categoryawait "api.get(`/category/categorySlug"`✅</h2>
        <h2>Add to Cart ✅ Yes Global & persistent state</h2>
        <h2>Orders ✅ Yes Shared across user/admin</h2>
        <h2>User Auth Info ✅ Yes Required globally</h2>
        <h2>Wishlist ✅ Yes Shared across pages</h2>
        <h2>Filters/Sorting 🟡 Optional Depends on scope</h2>
      </div> */}
    </>
  );
}

export default Products;
