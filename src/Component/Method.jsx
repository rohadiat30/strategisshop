import React from "react";
import styles, { layout } from "../Styles";
import { methodimg } from "../Assets/index";
import { method } from "../Data/data";
import { motion } from "framer-motion";

function Method() {
  return (
    <motion.section
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={layout.sectionReverse}
      id="method"
    >
      <div className={layout.sectionImgReverse}>
        <img src={methodimg} alt="Method" className="h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[60px] text-white ss:leading-[70px] leading-[60px]">
            How We <span className="text-gradient">Approach</span>
            <br className="sm:block hidden" /> <span>Our Method</span>{" "}
          </h1>
        </div>
        {method.map((method, index) => (
          <div className={`${styles.flexCenter} flex-row mt-5`} key={method.id}>
            <div
              className={`${styles.flexCenter} w-[50px] h-[50px] rounded-[24px] bg-[#323F5D]`}
            >
              <p className="font-bold text-[20px] text-white">{method.id}</p>
            </div>
            <p className="flex-1 ml-[30px] font-normal text-[20px] text-dimWhite leading-[32.4px]">
              {method.title}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Method;
