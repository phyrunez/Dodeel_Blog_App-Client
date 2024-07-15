import { Link } from "react-router-dom"
import { images } from "../../../../constants"
import { AiFillDashboard, AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useWindowSize } from "@uidotdev/usehooks"
import { FaComments, FaUsers } from "react-icons/fa"
import { MdDashboard } from "react-icons/md"
import { useEffect, useState } from "react"
import NavItem from "./NavItem"
import NavItemCollapse from "./NavItemCollapse"


const MENU_ITEMS = [
    {
        title: "Home",
        link: "/",
        icon: <AiFillHome className="text-xl" />,
        name: "home",
        type: "link"
    },
    {
        title: "Dashboard",
        link: "/admin",
        icon: <AiFillDashboard className="text-xl" />,
        name: "dashboard",
        type: "link"
    },
    {
        title: "Comments",
        link: "/admin/comments",
        icon: <FaComments className="text-xl" />,
        name: "comment",
        type: "link"
    },
    {
        title: "Add Posts",
        link: "/admin/posts/add-post" ,
        icon: <MdDashboard className="text-xl" />,
        name: "posts",
        type: "link"
    },
    {
        title: "Users",
        link: "/admin/allUsers" ,
        icon: <FaUsers className="text-xl" />,
        name: "users",
        type: "link"
    }
    // {
    //     title: "Messages",
    //     link: "/admin/messages" ,
    //     icon: <FaEnvelope className="text-xl" />,
    //     name: "messages",
    //     type: "link"
    // }
]

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [ activeNavName, setActiveNavName ] = useState("dashboard")
  
    const windowSize = useWindowSize();
  
    const toggleMenuHandler = () => {
      setIsMenuActive(prevState => !prevState)
    }
  
    useEffect(() => {
      if(windowSize.width < 1024) {
          setIsMenuActive(false)
      }else {
          setIsMenuActive(true)
      }
    }, [windowSize.width])
  
    return (
        <header 
          className="flex h-fit item-center justify-between p-4 
          lg:h-full lg:w-[300px] lg:flex-col lg:items-start lg:justify-start lg:p-0"
        >
            {/* logo */}
            <Link to="/">
                <img src={images.Logo} alt="logo" className="w-16 lg:hidden" />
            </Link>
            <div className="cursor-pointer lg:hidden">
                {isMenuActive ? (
                    <AiOutlineClose className="mt-3 w-6 h-6 cursor-pointer" onClick={toggleMenuHandler} />
                ) : (
                    <img src={images.Menu} className="mt-3 w-8 h-8 cursor-pointer" onClick={toggleMenuHandler} alt="menu-icon" />
                )}
            </div>
  
            {/* sidebar container */}
            {isMenuActive && (
                <div className="fixed inset-0 z-50 lg:static lg:h-full lg:w-full">
                    {/* overlay */}
                    <div className="fixed inset-0 bg-black opacity-50 lg:hidden" onClick={toggleMenuHandler} />
  
                    {/* sidebar */}
                    <div 
                      className="fixed top-0 bottom-0 left-0 w-[50%] overflow-y-auto bg-white p-4 
                      lg:static lg:h-full lg:w-full lg:p-6"
                    >
                        <Link to="/">
                          <img src={images.Logo} alt="logo" className="w-16" />
                        </Link>
                        <h4 className="mt-10 font-bold text-[#C7C7C7]">MAIN MENU</h4>
                        {/* menu items */}
                        <div className="mt-6 flex flex-col gap-y-[0.563rem]">
                            { MENU_ITEMS.map(item => item.type === "link" && 
                                <NavItem
                                  key={item.title}
                                  link={item.link}
                                  title={item.title}
                                  icon={item.icon}
                                  name={item.name}
                                  activeNavName={activeNavName}
                                  setActiveNavName={setActiveNavName}
                                />  
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header