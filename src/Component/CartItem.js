import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { CartContext } from '../Context/CartContext'

const CartItem = ({ item }) => {
  const { removeCart, increaseAmount, decreaseAmount, rupiah } = useContext(
    CartContext,
  )
  const { prId, prNama, linkImage, prHargaJual, amount } = item
  return (
    <div className="flex gap-x-4 py-4 px-6 lg:px-6 bg-secondary/10 rounded-xl w-full font-light text-white">
      <div className="w-full min-h-[50px] flex items-center gap-x-4">
        <Link to={`/product/${prId}`}>
          <img className="max-w-[60px]" src={linkImage} alt="product" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${prId}`}
              className="text-sm font-medium max-w-[200px] text-white hover:underline"
            >
              {prNama}
            </Link>
            <div
              onClick={() => removeCart(prId)}
              className="text-lg cursor-pointer"
            >
              <IoMdClose className="text-dimWhite hover:text-secondary transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[25px] text-xs">
            <div className="flex flex-1 max-w-[100px] items-center h-full border border-secondary rounded-md bg-secondary text-white font-medium">
              <div
                onClick={() => decreaseAmount(prId)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(prId)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around font-bold">
              Rp. {prHargaJual}
            </div>
            <div className="flex-1 flex justify-end items-center text-secondary font-extrabold">
              {rupiah(prHargaJual * amount)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
