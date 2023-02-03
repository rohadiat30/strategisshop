import React, { useContext } from "react";
import ItemCheckout from "../Component/ItemCheckout";
import { CartContext } from "../Context/CartContext";

function CheckoutPage() {
  const { cart, total, rupiah } = useContext(CartContext);
  return (
    <section className="bg-primary">
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 shadow-secondary relative z-[2] my-10">
        <div className="px-8 py-8 bg-primary/80 rounded-l-2xl">
          <p className="text-xl font-medium text-secondary">Order Summary</p>
          <p className="text-dimWhite">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-xl bg-black-gradient px-2 py-4 sm:px-6">
          {cart.map((item) => {
              return <ItemCheckout item={item} key={item.id} />;
            })}
          </div>

          <p className="mt-8 text-lg font-medium text-secondary">
            Shipping Methods
          </p>
          <form className="mt-5 grid gap-6">
            <div className="relative bg-black-gradient-2 border-none rounded-xl ">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-secondary absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-secondary flex cursor-pointer select-none rounded-xl p-4"
                htmlFor="radio_1"
              >
                <div className="ml-5">
                  <span className="mt-2 font-semibold text-secondary">
                    Regular
                  </span>
                  <p className="text-dimWhite text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative bg-black-gradient-2 border-none rounded-xl ">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-secondary absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-secondary flex cursor-pointer select-none rounded-xl p-4"
                htmlFor="radio_2"
              >
                <div className="ml-5">
                  <span className="mt-2 font-semibold text-secondary">
                    Express
                  </span>
                  <p className="text-dimWhite text-sm leading-6">
                    Delivery: 1-2 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-primary/80 px-8 py-8 lg:mt-0 text-dimWhite rounded-r-2xl">
          <p className="text-xl font-medium text-secondary">Payment Details</p>
          <p className="text-dimWhite">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-700 bg-black-gradient-2 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary "
                placeholder="your.email@gmail.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full rounded-md border border-gray-700 bg-black-gradient-2 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary "
                placeholder="Your full name here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="card-no"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Phone Number
            </label>
            <div className="flex">
              <div className="relative w-full flex-shrink-0">
                <input
                  type="text"
                  id="phone-number"
                  name="phone-number"
                  className="w-full rounded-md border border-gray-700 bg-black-gradient-2 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary "
                  placeholder="Your Phone Number Here"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />{" "}
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />{" "}
                  </svg>
                </div>
              </div>
            </div>
            <label
              htmlFor="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full rounded-md border border-gray-700 bg-black-gradient-2 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary "
                  placeholder="Street Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />{" "}
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="billing-Country"
                className="flex-shrink-0 rounded-md border border-gray-700 bg-black-gradient-2 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/4 focus:z-10 focus:border-secondary focus:ring-secondary"
                placeholder="Country"
              />
              <input
                type="text"
                name="billing-zip"
                className="flex-shrink-0 rounded-md border border-gray-700 bg-black-gradient-2 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-secondary focus:ring-secondary"
                placeholder="ZIP"
              />
            </div>
            <div className="mt-6 border-t border-b border-dimWhite py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-dimWhite">Subtotal</p>
                <p className="font-semibold text-secondary">{rupiah(total)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-dimWhite">Shipping</p>
                <p className="font-semibold text-secondary">{rupiah(0)}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-dimWhite">Total</p>
              <p className="text-2xl font-semibold text-secondary">{rupiah(total)}</p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-secondary hover:bg-secondary/75 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;
