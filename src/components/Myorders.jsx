import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cancelOrder } from "../fearures/cart/myOrdersSlice.js";

function MyOrders() {
  const { ordersList, ordersCount } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const handleCancel = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
          Your Orders
        </h1>
        <div className="text-center text-lg text-gray-600">
          Total Orders:{" "}
          <span className="font-semibold text-black">{ordersCount}</span>
        </div>
      </div>

      {ordersList.length === 0 ? (
        <p className="text-center text-gray-600">You have no orders yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ordersList.map((order, idx) => (
            <div
              key={idx}
              className="bg-white text-black p-4 rounded-2xl shadow-md border border-gray-200"
            >
              <img
                src={order.thumbnail}
                alt={order.title}
                className="w-full h-52 object-contain mb-4 rounded-lg"
              />
              <h2 className="text-xl font-semibold">{order.title}</h2>
              <p className="text-sm text-gray-700 mt-1">{order.description}</p>
              <p className="mt-2 font-bold">Price: ${order.price}</p>
              <p className="text-sm mt-1">Brand: {order.brand}</p>
              <p className="text-sm mt-1">Category: {order.category}</p>
              <p className="text-sm mt-1">Rating: ⭐ {order.rating}</p>
              <p className="text-sm mt-1">
                Warranty: {order.warrantyInformation}
              </p>
              <p className="text-sm mt-1">
                Shipping: {order.shippingInformation}
              </p>
              <p className="text-sm mt-1 font-medium">
                Status:{" "}
                <span className="text-green-600">
                  {order.availabilityStatus}
                </span>
              </p>
              <div className="flex gap-3 mt-4">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition duration-300 shadow-sm">
                  Track Order
                </button>

                <button
                  onClick={() => handleCancel(order.id)}
                  className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition duration-300 shadow-sm"
                >
                  Cancel Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default MyOrders;
