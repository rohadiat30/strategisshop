import React from "react";
import { bannerimg } from "../Assets/index";
import { motion } from "framer-motion";

const HeroProduct = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-[2]"
      >
        <img src={bannerimg} alt="banner" />
      </motion.div>
    </div>
  );
};

export default HeroProduct;
