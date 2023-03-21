import {
  Home,
  ProductPage,
  CheckoutPage,
  FormInformation,
  ProductDetails,
  CartPage,
  Login,
  Register
} from './Pages/index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer, Header, Sidebar } from './Component'
import styles from './Styles'

function App() {
  return (
    <div className="overflow-hidden bg-primary w-full">
      <Router>
        <div className={`${styles.flexCenter}`}>
          <div className="w-full">
            <Header />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route
            path="/product/productdetail/:id"
            element={<ProductDetails />}
          />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/form" element={<FormInformation />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Sidebar />
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
