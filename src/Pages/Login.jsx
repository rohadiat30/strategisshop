import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Swal from 'sweetalert2';

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [error, setError] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setError(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setError(true);
    } else {
      Swal.fire({
        icon: "success",
        title: "Congratulations !",
        text: "Anda Berhasil Login",
        footer: '<a href="/">Back to Home</a> ',
      });
      setError(false);
    }
  }
  return (
    <section className="bg-primary h-screen flex items-center justify-center">
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
              <h4 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[60px] text-white ss:leading-[70px] leading-[60px]">
                Sign <span className="text-gradient">In</span>{' '}
              </h4>
            </div>
            <hr className="mt-6 border-b-1 border-gray-400" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleLogin}>
              <div className="relative w-full mb-3">
                <label
                  htmlFor="email"
                  className="mt-4 mb-2 block text-sm font-medium text-dimWhite"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={(event) => setEmaillog(event.target.value)}
                    className="w-full rounded-md border border-gray-700 bg-black-gradient-2 text-dimWhite px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary "
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
                    onChange={(event) => setPasswordlog(event.target.value)}
                    className="w-full rounded-md border text-dimWhite border-gray-700 bg-black-gradient-2 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary "
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
                  Sign In
                </button>
              </div>
              <Link
                to={'/register'}
                className="text-dimWhite py-10 text-sm hover:text-secondary"
              >
                Create new Account
              </Link>
            </form>
          </div>
        </motion.div>
        {error && (
          <p color="primary" variant="warning">
            Fill correct Info else keep trying.
          </p>
        )}
      </div>
    </section>
  )
}

export default Login
