import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const ItemCheckout = ({ item }) => {
  const { rupiah } = useContext(CartContext)
  const { prNama, linkImage, prHargaJual, amount, prSatuan } = item
  return (
    <div className="flex flex-col rounded-xl bg-[#0f131f] sm:flex-row p-6">
      <img
        className="m-2 h-24 w-24 rounded-md border object-fill object-center"
        src={linkImage}
        alt="product"
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold text-dimWhite">{prNama}</span>
        <span className="float-right text-dimWhite">{amount} {prSatuan}</span>
        <p className="text-lg font-bold text-secondary">{rupiah(prHargaJual)}</p>
      </div>
    </div>
  )
}

export default ItemCheckout
