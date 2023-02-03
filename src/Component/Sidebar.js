import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import { CartItem } from './index'
import { SidebarContext } from '../Context/SidebarContext'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, clearCart, total, itemAmount, rupiah } = useContext(CartContext)
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full bg-black-gradient-2 fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[35vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-4">
        <div className="text-bold text-dimWhite">
          Your Cart ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl text-secondary" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[60vh] overflow-y-auto overflow-x-hidden">
        {cart.map((item) => {
          return <CartItem item={item} key={item.prId} />
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold text-white">
            <span className="mr-2 text-secondary">Total:</span>{rupiah(total)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-secondary rounded-lg text-white w-8 h-8 flex justify-center items-center text-xl hover:bg-secondary/75"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/cartpage"
          className="border border-secondary rounded-lg flex p-2 justify-center items-center text-secondary w-full font-medium hover:bg-secondary/20"
        >
          View Cart
        </Link>
        <Link
          to="/checkout"
          className="bg-secondary rounded-lg flex p-2 justify-center items-center text-white w-full font-medium hover:bg-secondary/75"
        >
          Checkout
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
