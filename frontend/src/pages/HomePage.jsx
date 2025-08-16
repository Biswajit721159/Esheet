import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">E-Sheet</h1>
          <nav>
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">About</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">E-Sheet</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mb-6">
          A simple way to manage and store your details online.  
          Fill in your sheet, keep it organized, and access it anytime.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} E-Sheet. All rights reserved.
      </footer>
    </div>
  );
}
