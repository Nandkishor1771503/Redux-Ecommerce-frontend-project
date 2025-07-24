import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Cart from "./components/Cart.jsx";
import Buynow from "./components/Buynow.jsx";
import Placed_order from "./components/Placed_order.jsx"
import Myorders from "./components/Myorders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buy" element={<Buynow />} />
          <Route path="/order" element={<Placed_order />} />
          <Route path="/myOrders" element={<Myorders />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
