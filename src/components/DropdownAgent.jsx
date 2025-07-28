import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const DropdownAgent = ({ label }) => {
  const [open, setOpen] = useState(false);

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>

<button className="text-blue-500 text-[13px]  font-medium transition flex gap-2 items-center">
  {label}
  <ChevronDown className="mt-1 h-4 w-4 text-blue-500" />
</button>


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-full w-screen bg-black text-white shadow-lg z-50 overflow-hidden"
          >
            <div className="max-w-5xl mx-auto m-auto flex  gap-28">
              {/* Left Column */}
              <div>
                <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray border mb-4">
                  BUY AND SALE WITH PROPY
                </button>
                <p className="text-[16px] text-gray-600 w-[300px]">
                  Our products cater to real estate buyers, sellers & agents
                </p>
              </div>

              {/* Center Column */}
              <div>
                <ul className=" text-[16px] text-gray-600">
                  <li>
                    <a href="#">List A Property</a>
                  </li>
                  <li>
                    <a href="#">Buy A Property</a>
                  </li>
                  <li>
                    <a href="#">Net Sheet Calculator</a>
                  </li>
                  <li>
                    <a href="#">Browse All Listings</a>
                  </li>
                  <li>
                    <a href="#">Title & Escrow</a>
                  </li>
                  <li>
                    <a href="#">Record Blockchain Deed</a>
                  </li>
                  <li>
                    <a href="#">Membership</a>
                  </li>
                  <li>
                    <a href="#">Earn Propy Tokens</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Platform features</a>
                  </li>
                  <li>
                    <a href="#">Download Propy App</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className=" text-[16px] text-gray-600">
                  <li>
                    <a href="#">Transaction Platform</a>
                  </li>
                  <li>
                    <a href="#">Offer Management</a>
                  </li>
                  <li>
                    <a href="#">Get Crypto Certified</a>
                  </li>
                  <li>
                    <a href="#">Get Meta Certified</a>
                  </li>
                  <li>
                    <a href="#">Propy Blog</a>
                  </li>
                  <li>
                    <a href="#">Webinars</a>
                  </li>
                  <li>
                    <a href="#">Case Studies</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownAgent;
