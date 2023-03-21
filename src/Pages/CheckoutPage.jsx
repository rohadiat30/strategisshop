import React, { useContext, useEffect, useState } from 'react'
import ItemCheckout from '../Component/ItemCheckout'
import { CartContext } from '../Context/CartContext'
import Select from 'react-tailwindcss-select'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../Utils/motion'

const options1 = [
  { value: 'Jawa Barat', label: 'Jawa Barat' },
  { value: 'Jawa Timur', label: 'Jawa Timur' },
  { value: 'DKI Jakarta', label: 'DKI Jakarta' },
]
const options2 = [
  { value: 'Bandung', label: 'Bandung' },
  { value: 'Jakarta', label: 'Jakarta' },
  { value: 'Surabaya', label: 'Surabaya' },
]

const options3 = [
  { value: 'JNE', label: 'JNE' },
  { value: 'J&T', label: 'J&T' },
  { value: 'Sicepat', label: 'Sicepat' },
]

function CheckoutPage() {
  const [provinsi, setProvinsi] = useState([])
  const [province, setProvince] = useState(null)
  const [city, setCity] = useState(null)
  const [courier, setCourier] = useState(null)


  const handleChanges1 = (value) => {
    console.log('value:', value)
    setProvince(value)
  }

  const handleChanges2 = (value) => {
    console.log('value:', value)
    setCity(value)
  }

  const handleChanges3 = (value) => {
    console.log('value:', value)
    setCourier(value)
  }

  const { cart, total, rupiah } = useContext(CartContext)
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="bg-primary"
    >
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 shadow-secondary relative z-[2] my-10">
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="px-8 py-8 bg-primary/80 rounded-l-2xl"
        >
          <p className="text-lg font-medium text-secondary">Shipping Details</p>
          <label
            htmlFor="countries"
            className="block mb-2 font-medium text-dimWhite mt-8"
          >
            Select Province
          </label>
          <Select
            value={province}
            onChange={handleChanges1}
            options={options1}
            classNames={{
              menuButton: ({ isDisabled }) =>
                `flex text-sm items-center text-dimWhite bg-black-gradient-2 h-14 rounded-xl shadow-sm transition-all duration-300 focus:outline-none ${
                  isDisabled
                    ? 'bg-gray-200'
                    : 'bg-white hover:border-gray-400 focus:border-secondary focus:ring focus:ring-secondary/20'
                }`,
              menu:
                'absolute z-10 w-full bg-black-gradient-2 shadow-lg rounded py-1 mt-1.5 text-sm text-gray-700',
              listItem: ({ isSelected }) =>
                `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                  isSelected
                    ? `text-white bg-secondary`
                    : `text-dimWhite hover:bg-secondary/20 hover:text-secondary`
                }`,
            }}
          />

          <label
            htmlFor="countries"
            className="block mb-2 font-medium text-dimWhite mt-8"
          >
            Select City
          </label>
          <Select
            value={city}
            onChange={handleChanges2}
            options={options2}
            classNames={{
              menuButton: ({ isDisabled }) =>
                `flex text-sm items-center text-dimWhite bg-black-gradient-2 h-14 rounded-xl shadow-sm transition-all duration-300 focus:outline-none ${
                  isDisabled
                    ? 'bg-gray-200'
                    : 'bg-white hover:border-gray-400 focus:border-secondary focus:ring focus:ring-secondary/20'
                }`,
              menu:
                'absolute z-10 w-full bg-black-gradient-2 shadow-lg rounded py-1 mt-1.5 text-sm text-gray-700',
              listItem: ({ isSelected }) =>
                `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                  isSelected
                    ? `text-white bg-secondary`
                    : `text-dimWhite hover:bg-secondary/20 hover:text-secondary`
                }`,
            }}
          />

          <label
            htmlFor="countries"
            className="block mb-2 font-medium text-dimWhite mt-8"
          >
            Select Courier
          </label>
          <Select
            value={courier}
            onChange={handleChanges3}
            options={options3}
            classNames={{
              menuButton: ({ isDisabled }) =>
                `flex text-sm items-center text-dimWhite bg-black-gradient-2 h-14 rounded-xl shadow-sm transition-all duration-300 focus:outline-none ${
                  isDisabled
                    ? 'bg-gray-200'
                    : 'bg-white hover:border-gray-400 focus:border-secondary focus:ring focus:ring-secondary/20'
                }`,
              menu:
                'absolute z-10 w-full bg-black-gradient-2 shadow-lg rounded py-1 mt-1.5 text-sm text-gray-700',
              listItem: ({ isSelected }) =>
                `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                  isSelected
                    ? `text-white bg-secondary`
                    : `text-dimWhite hover:bg-secondary/20 hover:text-secondary`
                }`,
            }}
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="mt-10 bg-primary/80 px-8 py-8 lg:mt-0 text-dimWhite rounded-r-2xl"
        >
          <p className="text-xl font-medium text-secondary">Order Summary</p>
          <p className="text-dimWhite">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-xl bg-black-gradient px-2 py-4 sm:px-6">
            {cart.map((item) => {
              return <ItemCheckout item={item} key={item.id} />
            })}
          </div>
          <div className="mt-6 border-t border-b border-dimWhite py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-dimWhite">Subtotal</p>
              <p className="font-semibold text-secondary">{rupiah(total)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-dimWhite">Shipping</p>
              <p className="font-semibold text-secondary">{rupiah(0)}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-dimWhite">Total</p>
            <p className="text-2xl font-semibold text-secondary">
              {rupiah(total)}
            </p>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-secondary hover:bg-secondary/75 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CheckoutPage
