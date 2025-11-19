import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <img src="/logo.png" alt="InceptionForce" className="h-10 mb-4" />
          <p className="text-gray-400 text-sm">
            Digitize operations. Eliminate paper. Accelerate workflows.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-3">Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Inventory</li>
            <li>Sales & POS</li>
            <li>Delivery Tracking</li>
            <li>AI Sketchpad</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Contact</li>
            <li>API Docs</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} InceptionForce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
