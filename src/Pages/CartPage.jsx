import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItemPage from "../Component/CartItemPage";
import { CartContext } from "../Context/CartContext";

function FullCart() {
  const { cart, total, rupiah } = useContext(CartContext);
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="flex items-center justify-center">
        <h1 className="flex-1 font-poppins font-semibold text-center ss:text-[60px] text-[60px] text-white ss:leading-[70px] leading-[60px]">
          Your <span className="text-gradient">Cart</span>{" "}
        </h1>
      </div>

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      <div className="mx-auto mt-8 max-w-3xl md:mt-12 relative z-[2]">
        <div className="bg-primary shadow-lg shadow-secondary rounded-2xl">
          <div className="px-4 py-6 sm:px-8 sm:py-10">
            {cart.map((item) => {
              return <CartItemPage item={item} key={item.id} />;
            })}

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-dimWhite">Subtotal</p>
                <p className="text-lg font-semibold text-secondary">
                  {rupiah(total)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-dimWhite">Shipping</p>
                <p className="text-lg font-semibold text-secondary">$0.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-dimWhite">Total</p>
              <p className="text-2xl font-semibold text-secondary">
                <span className="text-xs font-normal text-dimWhite">IDR</span>{" "}
                {rupiah(total)}
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link to="/checkout">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center rounded-md bg-secondary px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-secondary/75"
                >
                  Checkout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullCart;
