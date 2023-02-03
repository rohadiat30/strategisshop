import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { CartContext } from '../Context/CartContext'

const CartItemPage = ({ item }) => {
  const { removeCart, increaseAmount, decreaseAmount, rupiah, total } = useContext(CartContext)
  const { prId, prNama, linkImage, prHargaJual, amount } = item
  return (
    <div>
      <div className="flow-root mb-6 bg-black-gradient px-6 rounded-2xl">
        <ul className="my-1">
          <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
            <div className="shrink-0 h-32 w-32 bg-secondary/20 flex justify-center items-center rounded-2xl">
              <img
                className="max-w-[80px] rounded-lg object-cover"
                src={linkImage}
                alt="produkimage"
              />
            </div>
            <div className="relative flex flex-1 flex-col justify-between">
              <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                <div className="pr-4 sm:pr-5">
                  <p className="text-base font-semibold text-dimWhite">
                    {prNama}
                  </p>
                  <p className="mx-0 mt-1 mb-0 text-sm text-secondary">
                    {rupiah(prHargaJual)}
                  </p>
                </div>

                <div className="mt-4 mr-10 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                  <p className="shrink-0 w-20 text-base font-semibold text-secondary sm:order-2 sm:ml-8 sm:text-right">
                    {rupiah(total)}
                  </p>

                  <div className="sm:order-1">
                    <div className="mx-auto flex h-8 items-stretch text-white">
                      <button
                        onClick={() => decreaseAmount(prId)}
                        className="flex items-center justify-center rounded-l-md bg-secondary px-4 transition hover:bg-secondary/70 hover:text-white"
                      >
                        -
                      </button>
                      <div className="flex w-full items-center justify-center bg-secondary px-4 text-xs uppercase transition">
                        {amount}
                      </div>
                      <button
                        onClick={() => increaseAmount(prId)}
                        className="flex items-center justify-center rounded-r-md bg-secondary px-4 transition hover:bg-secondary/70 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                <button
                  onClick={() => removeCart(prId)}
                  type="button"
                  className="flex rounded p-2 text-center text-dimWhite transition-all duration-200 ease-in-out focus:shadow hover:text-secondary"
                >
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                      className=""
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CartItemPage
