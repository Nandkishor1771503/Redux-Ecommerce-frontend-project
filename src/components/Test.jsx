import React from "react";

function Test() {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center gap-4 m-5 p-4 bg-gray-100 rounded-xl shadow-inner">
        <div className="bg-blue-600 text-white px-6 py-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
          One
        </div>
        <div className="bg-red-600 text-white px-6 py-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
          Two
        </div>
        <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
          Three
        </div>
        <div className="bg-yellow-500 text-black px-6 py-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
          Four
        </div>
      </div>
    </div>
  );
}

export default Test;
