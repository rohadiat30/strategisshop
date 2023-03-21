import { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { close, verlogo, menu } from '../Assets'
import { navLinks } from '../Data/data'
import { FaShoppingBag } from 'react-icons/fa'
import { SidebarContext } from '../Context/SidebarContext'
import { CartContext } from '../Context/CartContext'
import { navVariants } from '../Utils/motion'
import { motion } from 'framer-motion'

const Header = () => {
  const [active, setActive] = useState('Home')
  const [isActicve, setIsActive] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const [toggle, setToggle] = useState(false)
  const { itemAmount } = useContext(CartContext)

  const menuRef = useRef();
  const btnRef = useRef();

  const auth = localStorage.getItem('Email')
  const hadleClick = () => {
    localStorage.clear()
    window.location.reload()
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
    window.addEventListener("click", (e) => {
      if (e.target !== menuRef.current && e.target !== btnRef.current) {
        setToggle(false);
      }
    });
  })

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={` ${
        isActicve
          ? 'bg-black-gradient-2 fixed shadow-md z-50 transition-all'
          : 'bg-none py-6 relative z-50'
      } w-full flex py-4 justify-between navbar px-10`}
    >
      <img src={verlogo} alt="hoobank" className="h-[40px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-secondary
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => setActive(nav.title)}
          >
            <Link id="product" to={nav.link}>
              {nav.title}
            </Link>
          </li>
        ))}
        {auth ? (
          <button
            onClick={hadleClick}
            type="button"
            className="text-white bg-secondary hover:bg-[#66CDAA] font-medium rounded-lg text-sm px-5 py-1 mx-6 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Sign Out
          </button>
        ) : (
          <Link to={'/login'}>
            <button
              type="button"
              className="text-white bg-secondary hover:bg-[#66CDAA] font-medium rounded-lg text-sm px-5 py-1 mx-6 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Sign In
            </button>
          </Link>
        )}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <FaShoppingBag className="text-xl text-dimWhite hover:text-secondary" />
          <div className="bg-secondary absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-50">
        <img
          src={toggle ? close : menu}
          alt="menu"
          ref={btnRef}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-99`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className="font-poppins font-medium cursor-pointer text-[16px] text-dimWhite my-2 hover:text-secondary"
              >
                <Link to={nav.link}>{nav.title}</Link>
              </li>
            ))}
            {auth ? (
              <button
                type="button"
                className="text-white bg-secondary hover:bg-[#66CDAA] font-medium rounded-md my-3 text-sm px-5 py-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Sign Out
              </button>
            ) : (
              <Link to={'/login'}>
                <button
                  type="button"
                  className="text-white bg-secondary hover:bg-[#66CDAA] font-medium rounded-md my-3 text-sm px-5 py-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Sign In
                </button>
              </Link>
            )}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer flex relative"
            >
              <FaShoppingBag className="text-xl text-dimWhite hover:text-secondary" />
              <div className="bg-secondary absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default Header
