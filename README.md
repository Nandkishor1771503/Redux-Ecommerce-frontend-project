

## 🧱 State Management (Redux Toolkit)

This app uses Redux Toolkit's `createSlice` and `createAsyncThunk`.

| Slice            | Responsibility                              |
|------------------|----------------------------------------------|
| `productSlice`   | Load all product data                        |
| `categorySlice`  | Manage selected category & data              |
| `searchSlice`    | Stores real-time search input                |
| `cartSlice`      | Manages cart state                           |
| `buynowSlice`    | Handles single product selected to buy       |


- Updates Redux state and renders products for the selected category.

## 🔧 Technologies Used

| Tech             | Purpose                                  |
|------------------|------------------------------------------|
| React            | Component-based frontend UI              |
| Redux Toolkit    | Centralized state management             |
| React Router DOM | Page navigation                          |
| Tailwind CSS     | Fast utility-first CSS styling           |
| Axios            | HTTP client to fetch API data            |
| Lucide Icons     | Clean icons for UI                       |
| DummyJSON API    | Fake backend for real-world testing      |

---

## 📦 API Endpoints Used

| Endpoint Type     | URL                                             |
|--------------------|--------------------------------------------------|
| All Products       | `https://dummyjson.com/products`                |
| All Categories     | `https://dummyjson.com/products/categories`     |
| Products by Category | `https://dummyjson.com/products/category/:slug` |

---

### 🔍 Real-Time Search with Redux
- Search input synced with Redux via `searchSlice`.
- Filters products from either:
- All Products
- OR filtered Category Products

### 🛒 Add to Cart + Buy Now
- Adds product to a separate cart slice.
- Sends selected product to "Buy Now" page using Redux state.
- Persisted and accessible on every route.

### 🔄 Dynamic View Rendering
- App intelligently decides what to render:
- `SearchedData` > `CategoryData` > `AllProducts`

### 💅 Tailwind Styled UI
- Fully responsive using Tailwind CSS
- Designed for mobile, tablet, and desktop views.

---



## 🧠 Project Structure

src/
├──app
│  ├──store.js
│ 
├── components/
│ ├── Navbar.jsx
│ ├── Products.jsx
│ ├── Category.jsx
│ ├── Display_category.jsx
│ └── SearchedData.jsx
│
├── features/
│ └── cart/
│ ├── productSlice.js // Fetch all products
│ ├── categorySlice.js // Category filter + endpoint
│ ├── cartSlice.js // Add to cart
│ ├── buynowSlice.js // Buy now single product
│ └── searchSlice.js // Search query state
│
├── App.jsx
└── main.jsx

⭐ Show Some Love
If you found this project helpful or interesting:
👉 Give it a star on GitHub
👉 Follow me for more frontend content

Thanks for reading! 😊
