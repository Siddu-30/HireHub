import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 px-6 py-8 mt-auto">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        
        {/* 🏢 Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">HireHub</h2>
          <p className="text-sm">
            Connecting job seekers with recruiters efficiently.
          </p>
        </div>

        {/* 🔗 Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:text-white">Jobs</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-white">Help</Link>
            </li>
          </ul>
        </div>

        {/* 📩 Contact */}
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p className="text-sm">support@hirehub.com</p>
          <p className="text-sm">+91 98765 43210</p>
        </div>

      </div>

      {/* ⚖️ Bottom */}
      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} HireHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;