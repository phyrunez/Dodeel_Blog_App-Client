// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { images } from '../../../constants';

const slidesArr = [
    { id: 1, name: images.Slide_1 },
    { id: 2, name: images.Slide_2 },
    { id: 3, name: images.Slide_3 },
    { id: 4, name: images.Slide_4 },
    { id: 5, name: images.Slide_5 },
    { id: 6, name: images.Slide_6 },
    { id: 7, name: images.Slide_7 },
]

const CarouselSlides = () => {
  return (
    <div className="container mx-auto lg:w-10/12 md:w-10/12 w-[100%] px-12 flex flex-col  justify-between py-3 items-center">
        <h1 className="text-[#333333] text-3xl text-center my-10 font-bold">Events Gallery</h1>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            // slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-[100%]"
            breakpoints={{
               
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
            }}
        
        >
    
            {slidesArr.map((slide, index) => {
                return(
                    <SwiperSlide key={index}>
                        <img src={slide.name} className="lg:w-[100%] md:w-[100%] w-[100%] lg:h-[26rem] md:h-[25rem] h-[22rem]" alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                )
            })}
       
        </Swiper>
    </div>
  )
}

export default CarouselSlides