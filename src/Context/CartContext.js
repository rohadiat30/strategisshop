import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.prHargaJual * currentItem.amount
    }, 0)
    setTotal(total)
  }, [cart])

  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount
    }, 0)
    setItemAmount(amount)
  }, [cart])

  const addToCart = (product, prId) => {
    const newItem = { ...product, amount: 1 }
    const cartItem = cart.find((item) => {
      return item.prId === prId
    })
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.prId === prId) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  const removeCart = (prId) => {
    const newCart = cart.filter((item) => {
      return item.prId !== prId
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const increaseAmount = (prId) => {
    const cartItem = cart.find((item) => item.prId === prId)
    addToCart(cartItem, prId)
  }

  const decreaseAmount = (prId) => {
    const cartItem = cart.find((item) => item.prId === prId)
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.prId === prId) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeCart(prId)
    }
  }
  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
        rupiah
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
