import MainLayout from "../../components/MainLayout"
import Articles from "./container/Articles"
import Hero from "./container/Hero"
import CarouselSlides from './container/CarouselSlides'
import { images } from "../../constants"

const HomePage = () => {
  return (
    <MainLayout>
        <div className=' xl:w-screen lg:h-[50vh] md:h-[40vh] h-[30vh] xl:h-[70vh] bg-[#025750] relative w-full xl:mx-0 mb-[10vh] lg:mb-[10vh] md:mb-[10vh]  flex items-center justify-center'>
          <h2 className='text-white font-bold xl:font-bold leading-[31.99px] text-[30px] xl:text-[40px] text-center mt-[2rem] absolute top-0'>Lagos State Digital Onboarders CDS</h2>
          <img src = {images.Group1} alt="svg" className = "absolute bottom-[5vh] xl:bottom-[15vh]" />
          <img src={images.Vector} alt="vector" className = "hidden xl:block absolute rotate-180 right-0 bottom-[-25vh] w-[25%]"/>
          <img src={images.Vector} alt="vector" className = "hidden xl:block absolute rotate-180 left-0 bottom-[-25vh] w-[25%]" />
        </div>
        <Hero />
        <Articles />
        <CarouselSlides />
    </MainLayout>
  )
}

export default HomePage