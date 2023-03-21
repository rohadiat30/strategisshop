import React from 'react'
import styles from '../Styles'
import { heroimg } from '../Assets'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { staggerContainer, fadeIn, planetVariants } from '../Utils/motion'

function Hero() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex flex-col justify-between w-full"
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[60px] text-white ss:leading-[70px] leading-[60px]">
            We Are Your <br className="sm:block hidden" />{' '}
            <span className="text-gradient">Best</span> <span>Solution</span>{' '}
          </h1>
          <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
            Provides GPS TRACKER and CCTV CAMERA UNIT products, with the best
            quality products in the field of safety and security. GPS TRACKER as
            a vehicle tracking device and home / office CCTV to protect your
            assets.
          </p>
          <div className="inline-flex rounded-md shadow-sm mt-7" role="group">
            <Link to="/product">
              <button
                type="button"
                className="text-white bg-secondary hover:bg-[#66CDAA] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Shop Now
              </button>
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=6281120011647"
              type="button"
              className="text-secondary border border-secondary hover:bg-secondary/25 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Order Via Whatsapp
            </a>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 flex ${styles.flexEnd} md:my-0 my-10 relative`}
      >
        <img src={heroimg} alt="billing" className="w-[80%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>
    </motion.section>
  )
}

export default Hero
