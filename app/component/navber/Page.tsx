"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink/Page";
import { FaShoppingCart, FaHeart, FaUser, FaSearch, FaHome } from "react-icons/fa";
import { HiMenuAlt1, HiX } from "react-icons/hi"; 
import { TbCurrencyTaka } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import categories from "@/data/categories.json";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // মেনু স্টেট

  return (
    <>
      {/* --- Main Desktop & Mobile Top Navbar --- */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 md:px-6 h-16 max-w-[1400px] mx-auto gap-4">
          
          {/* ১. লোগো এবং মোবাইল মেনু বাটন (Drawer Trigger) */}
          <div className="flex items-center gap-2">
            <button 
              className="md:hidden p-1 hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(true)} // এখানে ক্লিক করলে ড্রয়ার খুলবে
            >
              <HiMenuAlt1 size={26} />
            </button>
            <div className="flex-shrink-0">
              <img
                src="https://i.ibb.co.com/0P5zbcr/Gemini-Generated-Image-gizgi1gizgi1gizg-removebg-preview.png"
                className="w-20 md:w-28 h-auto object-contain"
                alt="Zayne Fashion"
              />
            </div>
          </div>

          {/* ২. ডেস্কটপ মেনু - (মোবাইলে hidden থাকবে, শুধু ডেস্কটপে md:flex হবে) */}
          <div className="hidden md:flex items-center gap-6">
            {categories.map((category) => (
              <NavLink
                key={category.category_id}
                href={`/category/${category.slug}`}
                className="whitespace-nowrap text-sm font-medium hover:text-primary transition-colors"
              >
                {category.name}
              </NavLink>
            ))}
          </div>

          {/* ৩. রাইট সাইড আইকন (সার্চ, কার্ট, ইউজার) */}
          <div className="flex items-center gap-2 md:gap-5">
            <div className="relative flex items-center">
              {isSearchOpen ? (
                <div className="absolute right-0 top-[-20px] md:relative md:top-0 flex items-center animate-in slide-in-from-right duration-300 z-10">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-full py-1.5 px-4 pr-20 w-40 md:w-60 focus:outline-none focus:ring-1 focus:ring-primary text-xs bg-background shadow-lg"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <Button className="absolute right-1 rounded-full h-7 bg-black text-white text-[10px] px-2 md:px-3">
                    <FaSearch size={10} /> <span className="hidden md:inline">Search</span>
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-9 w-9"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <FaSearch className="h-4 w-4 text-muted-foreground" />
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2 md:gap-4 text-muted-foreground">
              <div className="hidden sm:flex items-center text-sm font-semibold text-foreground">
                <TbCurrencyTaka className="text-xl" /> 0.00
              </div>
              <FaHeart className="hidden md:block cursor-pointer hover:text-primary" size={18} />
              <FaUser className="cursor-pointer hover:text-primary" size={18} />
              <FaShoppingCart className="hidden md:block cursor-pointer hover:text-primary" size={18} />
            </div>
          </div>
        </div>
      </nav>

      {/* --- ৪. মোবাইল ক্যাটাগরি ড্রয়ার (মোবাইলে হ্যামবার্গারে ক্লিক করলে আসবে) --- */}
      <div 
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${isMobileMenuOpen ? "visible" : "invisible"}`}
      >
        {/* Overlay (ক্লিক করলে মেনু বন্ধ হবে) */}
        <div 
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`} 
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Side Panel */}
        <div 
          className={`absolute left-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-4 border-b flex justify-between items-center bg-gray-50">
            <span className="font-bold">Categories</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-1"><HiX size={24} /></button>
          </div>
          <div className="flex flex-col p-4 overflow-y-auto h-[calc(100%-60px)]">
            {categories.map((category) => (
              <Link
                key={category.category_id}
                href={`/category/${category.slug}`}
                className="py-3 border-b text-sm font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)} // ক্লিক করলে বন্ধ হবে
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* --- ৫. মোবাইল বটম নেভিগেশন (ফিক্সড থাকবে) --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 h-16 flex items-center justify-around px-2 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <Link href="/" className="flex flex-col items-center gap-1 text-gray-600">
          <FaHome size={20} />
          <span className="text-[10px]">Home</span>
        </Link>
        <button className="flex flex-col items-center gap-1 text-gray-600" onClick={() => setIsSearchOpen(true)}>
          <FaSearch size={20} />
          <span className="text-[10px]">Search</span>
        </button>
        <Link href="/wishlist" className="flex flex-col items-center gap-1 text-gray-600 relative">
          <FaHeart size={20} />
          <span className="text-[10px]">Wishlist</span>
          <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] rounded-full h-3.5 w-3.5 flex items-center justify-center">0</span>
        </Link>
        <Link href="/account" className="flex flex-col items-center gap-1 text-gray-600">
          <FaUser size={20} />
          <span className="text-[10px]">Account</span>
        </Link>
        <Link href="/cart" className="flex flex-col items-center gap-1 text-gray-600 relative">
          <FaShoppingCart size={20} />
          <span className="text-[10px]">Cart</span>
          <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] rounded-full h-3.5 w-3.5 flex items-center justify-center">0</span>
        </Link>
      </div>

      {/* কন্টেন্ট যেন নিচে চাপা না পড়ে তার জন্য স্পেসার */}
      <div className="md:hidden h-16" />
    </>
  );
};

export default Navbar;