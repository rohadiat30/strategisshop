import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ProductProvider from './Context/ProductContext'
import CartProvider from './Context/CartContext'
import SidebarProvider from './Context/SidebarContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ProductProvider>
      </CartProvider>
  </SidebarProvider>,
)
