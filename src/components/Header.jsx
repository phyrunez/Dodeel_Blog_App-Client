import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { images } from '../constants'
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/actions/userAction"

const navItemInfo = [
    { name: 'Blog', type: 'link', href: '/'},
    { name: 'About', type: 'link', href: '/about'},
    { name: 'Contact Us', type: 'link', href: '/contact-us'},
]

const NavItem = ({ item }) => {
    return (
        <li className="relative group">
            {item.type === 'link' && (
                <>
                    <Link to={item.href} className='px-3 py-1'>{item.name}</Link>
                    <span className='text-[#025750] absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[110%] opacity-0 group-hover:opacity-100'>/</span>
                </>
            )}
        </li>
    )
}

const Header = () => {
  const dispatch = useDispatch()
  const [navIsVisible, setNavIsVisible] = useState(false)
  const [profileDropdown, setProfileDropdown] = useState(false)

  const userState = useSelector(state => state.user)

  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    navigate("/")
  }

  const navVisibilityHandler = () => {
    setNavIsVisible(curState => {
        return !curState
    })
  }

  return (
    <section className="sticky top-0 right-0 left-0 z-50 bg-white">
        <header className="container mx-auto lg:w-10/12 md:w-10/12 w-[100%] px-12 flex justify-between py-4 items-center">
            <Link to='/'>
                <img className="w-20" src={images.NewLogo} alt="Dodeel Logo" />
            </Link>
            <div className="lg:hidden z-50">
                { navIsVisible ? (
                    <AiOutlineClose 
                        className="w-6 h-6 cursor-pointer"
                        onClick={navVisibilityHandler}
                    />
                ): (
                    // <AiOutlineMenuUnfold 
                    //     className="w-6 h-6 cursor-pointer"
                    //     onClick={navVisibilityHandler}
                    // />
                    <img src={images.Menu} className="w-8 h-8 cursor-pointer" onClick={navVisibilityHandler} alt="menu-icon" />
                )}
            </div>
            <div className={`${
                navIsVisible ? "right-0" : "-right-full"
            } transition-all duration-300 mt-[74px] lg:mt-0 bg-[#929E9B] lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}>
                <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-8 font-semibold">
                    {navItemInfo.map(item => {
                        return <NavItem key={item.name} item={item} />
                    })}
                </ul>
                {/* <div className="relative group">
                    <div className='flex flex-col items-center'>
                        <button className='flex gap-x-1 items-center mt-5 lg:mt-0 border-2text-white rounded-md px-5 py-1 text-whte font-semibold transition-all duration-300' onClick={() => setProfileDropdown(!profileDropdown)}>
                            <span>Status</span>
                            <MdOutlineKeyboardArrowDown />
                        </button>
                        <div className={`${profileDropdown ? 'block' : 'hidden' } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                            <ul className="bg-[#929E9B] text-center flex flex-col shadow-lg rounded-lg overflow-hidden">         
                                <button 
                                    onClick={ () => navigate("/attendanceStatus") }
                                    type='button'
                                    className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'
                                >
                                    Attendance
                                </button>
                                <button 
                                    onClick={ () => navigate("/paymentStatus") }
                                    type='button'
                                    className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'
                                >
                                    Dues
                                </button>
                            </ul>
                        </div>
                    </div>
                </div> */}
                {/* {console.log(userState.userInfo)} */}
                {userState.userInfo ? (

                    <div className='text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-8 font-semibold'>
                        <div className="relative group">
                            <div className='flex flex-col items-center'>
                                <button className='flex gap-x-1 items-center mt-5 lg:mt-0 border-2text-white rounded-md px-5 py-1 text-whte font-semibold transition-all duration-300' onClick={() => setProfileDropdown(!profileDropdown)}>
                                    <span>Status</span>
                                    <MdOutlineKeyboardArrowDown />
                                </button>
                                <div className={`${profileDropdown ? 'block' : 'hidden' } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                                    <ul className="bg-[#929E9B] text-center flex flex-col shadow-lg rounded-lg overflow-hidden">         
                                        <button 
                                            onClick={ () => navigate("/attendanceStatus") }
                                            type='button'
                                            className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'
                                        >
                                            Attendance
                                        </button>
                                        <button 
                                            onClick={ () => navigate("/paymentStatus") }
                                            type='button'
                                            className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'
                                        >
                                            Dues
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className='flex flex-col items-center'>
                                <button className='flex gap-x-1 items-center mt-5 lg:mt-0 border-2 border-[#025750] text-white rounded-md bg-[#025750] px-5 py-1 text-whte font-semibold transition-all duration-300' onClick={() => setProfileDropdown(!profileDropdown)}>
                                    <span className="text-white ">Account</span>
                                    <MdOutlineKeyboardArrowDown className="text-white" />
                                </button>
                                <div className={`${profileDropdown ? 'block' : 'hidden' } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                                    <ul className="bg-[#929E9B] text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                                        {userState?.userInfo?.admin && (
                                            <button 
                                                onClick={ () => navigate("/admin") }
                                                type='button'
                                                className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'
                                            >
                                                Dashboard
                                            </button>
                                        )}
                                        <button 
                                            onClick={ () => navigate("/profile") }
                                            type='button'
                                            className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'
                                        >
                                            Profile
                                        </button>
                                        <button 
                                            onClick={logoutHandler}
                                            type='button'
                                            className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'
                                        >
                                            Logout
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className="mt-5 lg:mt-0 border-2 border-[#025750] rounded-md bg-[#025750] px-5 py-1 text-white font-semibold hover:bg-transparent hover:text-[#025750] transition-all duration-300"
                    >
                        Sign in
                    </button>
                )} 
            </div>
        </header>
    </section>
  )
}

export default Header