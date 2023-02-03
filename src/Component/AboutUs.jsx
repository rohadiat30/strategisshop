import React from "react";
import styles from "../Styles";
import { aboutusimg } from "../Assets";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.section
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="aboutUs"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[60px] text-white ss:leading-[70px] leading-[60px]">
            About <span className="text-gradient">Us</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
          Strategisshop, provides GPS TRACKER and CCTV CAMERA UNIT products,
          with the best quality products in the field of safety and security.
          GPS TRACKER as a vehicle tracking device and home / office CCTV to
          protect your assets.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={aboutusimg}
          alt="billing"
          className="w-[75%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </motion.section>
  );
}

export default AboutUs;
