import MainLayout from "../../components/MainLayout"
import { images } from "../../constants"
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <MainLayout>
        <section className='container mx-auto px-5 py-10'>
            <div className="w-full max-w-md mx-auto rounded-md bg-[#025750]">
                <img className="absolute object-cover bg-center bg-contain max-h-[70px] w-[30%]" src={images.Vector} alt="vector" />
                <h1 className='font-montserrat leading-[3rem] text-[2.5rem] text-center font-bold  py-5 pt-12 text-white md:text-center md:text-[3rem] lg:text-center lg:text-[3.5rem] lg:font-bold'>404</h1>
                <div className="py-9 px-4 text-white text-center">
                    <span>Sorry!</span>
                    <p>The link is broken, try to refresh or go to home</p>
                </div>
                <div className="flex justify-center">
                <button
                    onClick={() => navigate('/')}
                    className="mt-5 lg:mt-0 border-2 border-white rounded-md bg-white px-5 my-6 py-1.5 text-[#025750] font-semibold transition-all duration-300"
                >
                    Go To Home
                </button>
                </div>
                
            </div>
        </section>
    </MainLayout>
  )
}

export default NotFoundPage