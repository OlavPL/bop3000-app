import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { FaUserAlt, FaPen } from 'react-icons/fa';
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';
import { faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '@/context/state';
import {useSession,signOut,getSession} from 'next-auth/react'
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pageContext = useAppContext();
  // const [title, setTitle] = useAppContext()

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className=" w-full z-10">
      <div className="flex items-center h-20 w-full ">
        <div className="flex items-center mx-4 justify-between w-full">
          
          {/* Logo */}
          <div className="flex justify-center items-center flex-shrink-0">
            <Link href="/">
              <div className="font-bold text-4xl cursor-pointer">
              <span className="text-primary-90 ">Bygde</span><span className="drop-shaodw-md text-primary-400">Sagn</span>
              </div>
            </Link>
          </div>

          <div className="text-3xl  text-center font-bold">
            {/* {pageContext.title} */}
          </div>

        {/* Create Sagn Button */}
          <div className="ml-10 flex items-baseline space-x-8">
            <Link href={"/createSagn"}>
              <button className="flex items-center space-x-1 font-medium text-white hover:text-secondary-800 focus:outline-none bg-blue-500 rounded-md px-4 py-1.5">
                <FontAwesomeIcon icon={faPen} className="text-2xl w-6 h-6 cursor-pointer transition-colors duration-200 ease-in-out fa-lg" />
                <span className="text-lg underline">Nytt Sagn</span>
              </button>
            </Link>


            {/* User Button */}
            <FontAwesomeIcon icon={faUser} onClick={handleClick} className="text-4xl rounded-full w-8 h-8 cursor-pointer transition-colors duration-200 ease-in-out
                  hover:textHover hover:drop-shadow-xl shadow-black"/>
            <div className={`origin-top-right absolute right-0 mt-14 w-40 rounded-md shadow-lg  bg-white ${showMenu ? 'block' : 'hidden'}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
              <div className="py-2" role="none">
                  <Link href="/profilePage" onClick={()=>{useContext}} className="px-2 py-2 text-sm block" role="menuitem" id="menu-item-profile">
                    Min Profil
                  </Link>
                  {/* <Link href="#" className="px-2 py-2 text-sm block" role="menuitem" id="menu-item-2">
                    link2
                  </Link> */}
                  <Link href="/login" className="px-2 py-2 text-sm block text-black hover:text-blue-250" role="menuitem" id="menu-item-3">
                    Login
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
