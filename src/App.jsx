import Products from "./components/Products.jsx";
import Navbar from "./components/Navbar.jsx";
import Category from "./components/Category.jsx";
import Dispaly_category from "./components/Dispaly_category.jsx";
import { useSelector } from "react-redux";
import SearchedData from "./components/SearchedData.jsx";
import Footer from "./components/Footer.jsx";
import Test from "./components/Test.jsx";
function App() {
  const { category } = useSelector((state) => state.category);
    const { searchReq } = useSelector((state) => state.search);
  

  return (
    <>
      {/* <Test /> */}
      <Navbar />
      <Category />
      {searchReq?<SearchedData />:category.length > 0 ? <Dispaly_category /> : <Products />}
      <Footer />
    </>
  );
}

export default App;
