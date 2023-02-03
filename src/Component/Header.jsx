import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, verlogo, menu } from "../Assets";
import { navLinks } from "../Data/data";
import { FaShoppingBag } from "react-icons/fa";
import { SidebarContext } from "../Context/SidebarContext";
import { CartContext } from "../Context/CartContext";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [isActicve, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [toggle, setToggle] = useState(false);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <nav
      className={` ${
        isActicve
          ? "bg-black-gradient-2 fixed shadow-md z-10 transition-all"
          : "bg-none py-6"
      } w-full flex py-4 justify-between navbar px-10`}
    >
      <img src={verlogo} alt="hoobank" className="h-[40px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite hover:text-secondary
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link id="product" to={nav.link}>
              {nav.title}
            </Link>
          </li>
        ))}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative ml-10"
        >
          <FaShoppingBag className="text-xl text-dimWhite hover:text-secondary" />
          <div className="bg-secondary absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute z-50 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
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
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer flex relative my-3"
            >
              <FaShoppingBag className="text-xl text-dimWhite hover:text-secondary" />
              <div className="bg-secondary absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
