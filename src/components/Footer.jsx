import { images } from "../constants"
import { Link } from "react-router-dom"

const footerNav = [
    { link: '/', name: 'Home' },
    { link: '/', name: 'Blog' },
    { link: '/about', name: 'About' },
    { link: '/contact-us', name: 'Contact Us' }
]

const NavItem = ({ item }) => {
    return (
        <li className="hover:text-[#025750]">
            <Link to={item.link} className='px-2 py-1'>{item.name}</Link>         
        </li>
    )
}

const Footer = () => {
  return (
    <>
        <section className="bg-[rgb(2,87,80)] lg:py-[5rem]">
            <div className="rounded-xl">
                <img className="absolute object-cover bg-center bg-contain max-h-[150px] w-[40%] -mt-20" src={images.Vector} alt="vector" />
            </div>
            <footer className="container my-15 mx-auto max-w-[40%] px-12 py-4 items-center">
                <h1 className='font-montserrat text-3xl text-center font-bold py-5 text-white md:text-center md:text-3xl lg:text-center lg:text-3xl lg:font-bold'>
                    Get our stories delivered From us to your inbox weekly.
                </h1>
                <div className="flex flex-row gap-x-2 my-4 mx-auto w-[70%]">
                <input 
                    className='placeholder:font-ss font-ss text-[#c4c4c4] placeholder:text-[#c4c4c4] rounded-lg pl-4 pr-3 py-2 w-[60%] focus:outline-none shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] md:py-2'
                    type="email" 
                    name='email'
                    placeholder="Your Email"
                />
                <button
                    className="mt-5 lg:mt-0 border border-white rounded-md bg-[#025750] px-3 py-1 text-white font-semibold hover:bg-white hover:text-[#025750] transition-all duration-300"
                >
                    Get started
                </button>
                </div>
                <p className='font-montserrat text-xs mx-auto max-w-md text-center text-[#bbbbbb] mt-5 md:text-center md:text-xs lg:text-center lg:text-xs'>
                    Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
                </p>
            </footer>
        </section>
        <div className="mt-7">
            <div className="flex flex-col">
                <img src={images.Logo} className="mx-auto" alt="Dodeel Logo" />
                <div className='lg:mt-2 mx-auto max-w-sm lg:text-center gap-x-3 items-center'>
                <ul className=' text-[#333333] text-center text-sm font-montserrat gap-y-5 flex lg:flex-row cursor-pointer gap-x-3 font-xs'>
                    {footerNav.map(item => {
                        return (
                            <NavItem key={item.name} item={item} />
                        )
                    })}
                </ul>
                </div>
            </div>
            <div className="text-[#333333] text-center text-sm font-montserrat mx-auto max-w-sm">
                <div className="mt-8 mb-3 flex flex-row mx-auto justify-center max-w-sm gap-x-3 items-center">
                    <img className="cursor-pointer" src={images.Instagram} alt="instagram" />
                    <img className="cursor-pointer" src={images.Twitter} alt="twitter" />
                    <img className="cursor-pointer" src={images.Youtube} alt="youtube" />
                    <img className="cursor-pointer" src={images.LinkedIn} alt="linkedin" />
                </div>
                <p>Follow us</p>
            </div>

            <hr className="border border-[#025750] mt-8 mb-2 container mx-auto w-[77%] items-center" />

            <p className="text-[#333333] py-4 text-center text-sm font-montserrat mx-auto max-w-lg">Copyright Lagos Digital Onboarders Cds Inc © 2024. All Right Reserved</p>
        </div>
    </>
  )
}

export default Footer