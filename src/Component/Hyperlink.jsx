import React from 'react'
import styles from '../Styles'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../Utils/motion'

function Hyperlink() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="flex-1 flex flex-col"
      >
        <h2 className={styles.heading2}>Let’s try our Product now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          what you need to maintain and guarantee the security of your assets we
          have provided here
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}
      >
        <a
          href="https://api.whatsapp.com/send?phone=6281120011647"
          type="button"
          className="text-white bg-secondary hover:bg-[#66CDAA] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Go To Store
        </a>
      </motion.div>
    </motion.section>
  )
}

export default Hyperlink
