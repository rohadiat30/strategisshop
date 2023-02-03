import React, { createContext, useState, useEffect } from 'react'

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://api.strategisshop.com/master/getAllProduct?product_name=&limit=')
      const data = await response.json()
      setProduct(data.data)
    }
    fetchProducts()
  }, [])
  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
