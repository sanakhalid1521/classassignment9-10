import React from "react";
import Image from "next/image";

function ProductCard() {
  return (
    <div className="flex flex-wrap justify-center sm:space-x-0 md:space-x-4 lg:space-x-6">
      {/* Product 1 */}
      <div className="bg-blue-300 shadow-lg rounded-lg p-6 w-full sm:w-80 md:w-80 lg:w-80 mb-6 flex flex-col items-center text-center">
        <div className="relative w-full h-56 mb-4">
          <Image
            src="/product1.webp"
            alt="Product One"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Product One</h3>
        <p className="text-gray-600 mt-2">Description of product one.</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Buy Now
        </button>
      </div>

      {/* Product 2 */}
      <div className="bg-green-400 shadow-lg rounded-lg p-6 w-full sm:w-80 md:w-80 lg:w-80 mb-6 flex flex-col items-center text-center">
        <div className="relative w-full h-56 mb-4">
          <Image
            src="/product2.jpg"
            alt="Product Two"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Product Two</h3>
        <p className="text-gray-600 mt-2">Description of product two.</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Buy Now
        </button>
      </div>

      {/* Product 3 */}
      <div className="bg-yellow-300 shadow-lg rounded-lg p-6 w-full sm:w-80 md:w-80 lg:w-80 mb-6 flex flex-col items-center text-center">
        <div className="relative w-full h-56 mb-4">
          <Image
            src="/product3.webp"
            alt="Product Three"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Product Three</h3>
        <p className="text-gray-600 mt-2">Description of product three.</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
