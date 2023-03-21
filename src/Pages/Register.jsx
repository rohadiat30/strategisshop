import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Swal from 'sweetalert2'

function Register() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [street, setStreet] = useState('')
  const [country, setCountry] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault()
    localStorage.setItem('Email', JSON.stringify(email))
    localStorage.setItem('Username', JSON.stringify(userName))
    localStorage.setItem('Phone', JSON.stringify(phoneNumber))
    localStorage.setItem('Street', JSON.stringify(street))
    localStorage.setItem('Country', JSON.stringify(country))
    localStorage.setItem('Code', JSON.stringify(code))
    localStorage.setItem('Password', JSON.stringify(password))
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
  return (
    <section className="bg-primary flex content-center items-center justify-center">
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      <div className="w-full lg:w-4/12 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-primary border-0"
        >
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h4 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[60px] ss:leading-[70px] leading-[60px] text-gradient">
                Register
              </h4>
            </div>
            <hr className="mt-6 border-b-1 border-gray-400" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleFormSubmit}>
              <div className="relative w-full mb-3">
                <label
                  htmlFor="email"
                  className="mt-4 mb-2 block text-sm font-medium text-dimWhite"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-md border border-gray-700 bg-black-gradient-2 px-4 py-3 pl-11 text-sm text-dimWhite shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary "
                    placeholder="your.email@gmail.com"
                    required
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
              </div>

              <div className="relative w-full mb-3">
                <label
                  htmlFor="fullname"
                  className="mt-4 mb-2 block text-sm font-medium text-dimWhite"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    onChange={(event) => setUserName(event.target.value)}
                    className="w-full rounded-md border border-gray-700 bg-black-gradient-2 px-4 py-3 pl-11 text-sm text-dimWhite shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                    placeholder="Your Full Name Here"
                    required
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
              </div>

              <div className="relative w-full mb-3">
                <label
                  htmlFor="phone"
                  className="mt-4 mb-2 block text-sm font-medium text-dimWhite"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    className="w-full rounded-md border border-gray-700 bg-black-gradient-2 px-4 py-3 pl-11 text-dimWhite text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary "
                    placeholder="08x-xxx-xxx"
                    required
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
                      {' '}
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />{' '}
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />{' '}
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative w-full mb-3">
                <label
                  htmlFor="phone"
                  className="mt-4 mb-2 block text-sm font-medium text-dimWhite"
                >
                  Address
                </label>
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex-shrink-0 sm:w-7/12">
                    <input
                      type="text"
                      id="billing-address"
                      name="billing-address"
                      onChange={(event) => setStreet(event.target.value)}
                      className="w-full rounded-md border border-gray-700 bg-black-gradient-2 text-dimWhite px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary "
                      placeholder="Street Address"
                      required
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
                        {' '}
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />{' '}
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="billing-Country"
                    onChange={(event) => setCountry(event.target.value)}
                    className="flex-shrink-0 rounded-md border border-gray-700 bg-black-gradient-2 text-dimWhite px-4 py-3 text-sm shadow-sm outline-none sm:w-1/4 focus:z-10 focus:border-secondary focus:ring-secondary"
                    placeholder="Country"
                    required
                  />
                  <input
                    type="text"
                    name="billing-zip"
                    onChange={(event) => setCode(event.target.value)}
                    className="flex-shrink-0 rounded-md border border-gray-700 bg-black-gradient-2 text-dimWhite px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-secondary focus:ring-secondary"
                    placeholder="ZIP"
                    required
                  />
                </div>
              </div>

              <div className="relative w-full mb-3">
                <label
                  htmlFor="password"
                  className="mt-4 mb-2 block text-sm font-medium text-dimWhite"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-md border border-gray-700 bg-black-gradient-2 text-dimWhite px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary "
                    placeholder="Type your password"
                    required
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400 border-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M21 13V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V14C3 15.1046 3.89543 16 5 16H12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{' '}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.8789 16.9174C21.3727 17.2211 21.3423 17.9604 20.8337 18.0181L18.2671 18.309L17.1159 20.6213C16.8878 21.0795 16.1827 20.8552 16.0661 20.2873L14.8108 14.1713C14.7123 13.6913 15.1437 13.3892 15.561 13.646L20.8789 16.9174Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />{' '}
                      <path
                        d="M12 11.01L12.01 10.9989"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{' '}
                      <path
                        d="M16 11.01L16.01 10.9989"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{' '}
                      <path
                        d="M8 11.01L8.01 10.9989"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="relative w-full mb-3">
                <label
                  htmlFor="conf-pass"
                  className="mt-4 mb-2 block text-sm font-medium text-dimWhite"
                >
                  Retype Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="conf-pass"
                    name="conf-pass"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="w-full rounded-md border border-gray-700 bg-black-gradient-2 text-dimWhite px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary "
                    placeholder="Type your password"
                    required
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400 border-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M21 13V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V14C3 15.1046 3.89543 16 5 16H12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{' '}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.8789 16.9174C21.3727 17.2211 21.3423 17.9604 20.8337 18.0181L18.2671 18.309L17.1159 20.6213C16.8878 21.0795 16.1827 20.8552 16.0661 20.2873L14.8108 14.1713C14.7123 13.6913 15.1437 13.3892 15.561 13.646L20.8789 16.9174Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />{' '}
                      <path
                        d="M12 11.01L12.01 10.9989"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{' '}
                      <path
                        d="M16 11.01L16.01 10.9989"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />{' '}
                      <path
                        d="M8 11.01L8.01 10.9989"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  className="bg-secondary text-white active:bg-secondary/60 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 w-full"
                  type="submit"
                  style={{ transition: 'all .15s ease' }}
                >
                  Register
                </button>
              </div>
              <Link
                to={'/login'}
                className="text-dimWhite py-10 text-sm hover:text-secondary"
              >
                Have an Account?
              </Link>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Register
