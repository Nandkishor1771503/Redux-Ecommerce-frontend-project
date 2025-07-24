import { useEffect, useState } from "react";
import { fetchRequiredData } from "../fearures/cart/categorySlice.js";
import { useDispatch } from "react-redux";
import axios from "axios";

function Category() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const category = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    category();
  }, []);

  const handleFetchCategory = (reqCat) => {
    dispatch(fetchRequiredData(reqCat));
  };

  return (
    <div>
      {/* <div onClick={category}>click to fetch</div> */}
      <div className="w-full bg-white shadow-md py-4 px-4 overflow-x-auto scrollbar">
        <div className="flex gap-4 whitespace-nowrap">
          {data.map((e, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full cursor-pointer hover:bg-blue-200 transition"
              onClick={() => handleFetchCategory(e.slug)}
            >
              {e.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
