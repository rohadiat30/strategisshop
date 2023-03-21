import React, { useContext, useState } from 'react'
import { Pagination, Searchbar } from '../Component'
import { motion } from 'framer-motion'
import { ProductContext } from '../Context/ProductContext'
import { HeroProduct, ItemProduct } from '../Component'
import { fadeIn, staggerContainer } from '../Utils/motion'

function Product() {
  const { product } = useContext(ProductContext)
  //filter
  console.log(...product)
  const [search, setSearch] = useState('')

  return (
    <div className="flex flex-col justify-center items-center">
      <HeroProduct />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="py-16 flex flex-col items-center relative"
      >
        <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[60px] text-white ss:leading-[70px] leading-[60px]">
          Product <span className="text-gradient">List</span>{' '}
        </h1>
        <div className="my-20">
          <form className="w-[70vw]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                id="default-search"
                className="block w-full p-4 pl-10 text-sm rounded-xl border text-dimWhite border-gray-700 bg-primary shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                placeholder="Search Products..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
              />
              <button
                type="submit"
                className="text-dimWhite absolute right-2.5 bottom-2.5 bg-secondary hover:bg-secondary/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        {/* <Searchbar seacrProduct={product}/> */}
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0"
          >
            {product
              .filter((row) => {
                if (search === '') {
                  return row
                } else if (
                  row.prNama.toLowerCase().includes(search.toLocaleLowerCase())
                ) {
                  return row
                }
              })
              .map((product, index) => {
                return <ItemProduct product={product} key={product.prId} index={index} />
              })}
          </div>
        </div>
      </motion.section>
      {/* <Pagination /> */}
    </div>
  )
}

export default Product
