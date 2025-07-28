import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ label }) => {
  const [open, setOpen] = useState(false);

  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
<button className="text-blue-500 text-[13px]  font-medium transition flex gap-2 justify-center items-center">
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
            <div className="max-w-5xl mx-auto m-auto py-10 flex  gap-28">
              {/* Left Column */}
              <div>
                <button className="bg-black text-white px-5 py-2 rounded hover:bg-gray border mb-4">
                  SALE WITH PROPY
                </button>
                <p className="text-[16px] text-gray-600 w-[300px]">
                Promote your listing to the Propy community - close fast & securely, in USD or crypto.
                </p>
              </div>

              {/* Center Column */}
              <div>
                <ul className="space-y-1 text-[16px] text-gray-600">
                  <li>
                    <a href="#"> Title & Escrow</a>
                  </li>
                  <li>
                    <a href="#">List A Property</a>
                  </li>
                  <li>
                    <a href="#">View My Listings</a>
                  </li>
                  <li>
                    <a href="#">Sell as an RWA</a>
                  </li>
                  <li>
                    <a href="#">Webinars</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-1 text-[16px] text-gray-600">
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Transaction Platform</a>
                  </li>
                  <li>
                    <a href="#">Offer Management</a>
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

export default Dropdown;
