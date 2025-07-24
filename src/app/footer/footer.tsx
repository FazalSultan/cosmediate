import React from "react";
import {
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-white py-12 md:px-10 px-3">
      <div className="container ">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-7 mb-12">
          <div className="sm:col-span-2 md:col-span-3">
            <h2 className="text-xl font-bold mb-3">Cosmediate</h2>
            <p>5123 Market St. #22B</p>
            <p>Charlottesville, California 44546</p>

            <div className="mt-6">
              <p className="mb-2 font-semibold">
                Sign up for personalized offers
              </p>
              <div className="flex items-center border border-gray-700 rounded-full overflow-hidden w-[300px] sm:max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-4 py-2 w-full text-white outline-none"
                />
                <button className="bg-[#0D5AE5] p-2 cursor-pointer rounded">
                  <FaPaperPlane className="text-white h-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 grid grid-cols-2 gap-6 md:col-span-4 md:flex md:gap-20">

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>About us</li>
                <li>Contact us</li>
                <li>Career</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact us</li>
                <li>Request a demo</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Privacy policy</li>
                <li>Terms of services</li>
              </ul>
            </div>
           
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 text-sm text-gray-400">
          <p>©2025 Doctify. All Rights Reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
