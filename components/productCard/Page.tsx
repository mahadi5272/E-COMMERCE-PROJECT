import React from 'react';
import { TbCurrencyTaka } from "react-icons/tb";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="group border rounded-xl p-3 bg-white hover:shadow-xl transition-all duration-300 relative">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-lg h-60 bg-gray-100">
        <img 
          src={product.image_url} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Sale Tag */}
        {product.status === "on_sale" && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-md font-bold shadow-sm">
            SALE
          </span>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
           <button className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
              <FaHeart size={16} />
           </button>
           <button className="bg-white p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
              <FaShoppingCart size={16} />
           </button>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="mt-4 space-y-1">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">{product.brand}</p>
        <h3 className="font-medium text-gray-800 text-sm line-clamp-1">{product.name}</h3>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center text-lg font-bold text-primary">
            <TbCurrencyTaka />
            <span>{product.base_price}</span>
          </div>
          <button className="text-[10px] font-semibold border border-primary px-2 py-1 rounded hover:bg-primary hover:text-white transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;