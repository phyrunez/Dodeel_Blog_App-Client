
import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { images } from "../../constants";

const officialsArr = [
    { id: 1, name: images.Official_1, officialName: 'Mr. Tayo Olosunde', title: 'CDS Founder' },
    { id: 2, name: images.Official_2, officialName: 'Mr. Mayowa Odetayo', title: 'National Coordinator' },
    { id: 3, name: images.Official_3, officialName: 'Mrs. Folakemi Obadina', title: 'Schedule Officer' },
    { id: 4, name: images.Official_4, officialName: 'Mr. Femi Ilori', title: 'Community Manager' },
    { id: 5, name: images.Official_5, officialName: 'Mrs. Mohammed Tumininu', title: 'Asst Community Manager' },
      
]
  

const CarouselSlides = () => {
  return (
    <div className="container mx-auto w-10/12 px-12 flex flex-col  justify-between py-3 items-center">
        <h1 className="text-[#333333] text-3xl text-center my-10 font-bold">Our NYSC Officials</h1>
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
    
            {officialsArr.map((official, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className="relative">
                            <img src={official.name} className="w-[100%] h-[40rem]" alt={`Slide ${index + 1}`} />
                            <div className="absolute top-[10px] left-[10px] text-[#fff] bg-[#000000] opacity-50 py-[5px] px-[10px] rounded-[5px]">
                                {official.officialName}
                            </div>
                            <div className="absolute bottom-[10px] right-[10px] text-[#fff] bg-[#025750] py-[5px] px-[10px] rounded-[5px]">
                                {official.title}
                            </div>
                        </div>                 
                    </SwiperSlide>
                )
            })}
       
        </Swiper>
    </div>
  )
}

export default CarouselSlides
