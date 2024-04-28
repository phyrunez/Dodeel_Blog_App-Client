import { images } from "../constants"

const Footer = () => {
  return (
    <>
        <section className="bg-[#025750] lg:py-[5rem]">
            <footer className="container my-15 mx-auto w-[40%] px-12 py-4 items-center">
                <h1 className='font-montserrat text-3xl text-center font-bold lg:pr-10 py-5 text-white md:text-center md:text-3xl lg:text-center lg:text-3xl lg:font-bold'>
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
                <p className='font-montserrat text-xs mx-auto w-[80%] text-center lg:pr-10 text-[#bbbbbb] mt-5 md:text-center md:text-xs lg:text-center lg:text-xs'>
                    Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
                </p>
            </footer>
        </section>
        <div className="my-15  py-4 items-center">
            <img src={images.Logo} className="mx-auto" alt="Dodeel Logo" />
            <div className='lg:mt-2 mx-auto lg:flex-row lg:text-center gap-x-3 items-center'>
              <ul className=' text-[#c4c4c4] items-center text-sm gap-y-5 lg:text-[#c4c4c4] flex lg:flex-row cursor-pointer gap-x-5 font-xs'>
                <li>Home</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact Us</li>
              </ul>
            </div>
        </div>
    </>
  )
}

export default Footer