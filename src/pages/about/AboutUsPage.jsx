import React from 'react'
import MainLayout from '../../components/MainLayout'
import CarouselSlides from './CarouselSlides'
import { images } from '../../constants'

const AboutUsPage = () => {
  return (
    <MainLayout>
      <div className='bg-[#F6F6F6]'>
        <div className='w-screen h-auto xl:h-screen p-8'>
          <h1 className='leading-[63.96px] text-[48px] font-bold text-center mt-[3rem]'>Who we are</h1>
          <p className='leading-[24px] text-[16px] font-light text-center max-w-xl mx-auto mt-[1rem]'>
            We are a CDS group committed to mentoring and empowering members to identify and build a digital career path, while also fostering connections among youth,
            businesses, and host communities to actively engage in the digital economy
          </p>
          <div className='flex flex-col space-y-4 mx-auto lg:w-[70%] md:w-[70%] w-[100%] lg:flex-row items-center justify-evenly my-[1rem] xl:mt-[6rem]'>
            <div className="flex flex-col justify-between border md:my-5 bg-white shadow-md rounded-[1rem] max-h-[30rem]">
                
                <div className="w-full lg:justify-start px-2 lg:px-[50px]">
                    <div className="flex flex-col py-2 lg:py-[20px] ">
                      <div className=''>
                        <h1 className='text-[#FFBF00] md:text-2xl lg:text-2xl text-base'>Our Culture</h1>

                        <div className='mt-[0.5rem] md:leading-10 xl:leading-7 lg:leading-8 leading-6 lg:text-xl md:text-xl text-sm'>
                          <p className='font font-poppins'>At Digital Onboarders CDS, our culture thrives on skill development, open communication, order, and a strong community spirit. We
                            honor and respect diverse perspectives, consistently pursue excellence, and encourage innovative thinking. Above all, we embrace a growth
                            mindset that propels us to overcome challenges and achieve continuous personal and collective growth.
                          </p>
                        </div>

                      </div>
                    </div>  
                </div>
                
            </div>
          </div>
        </div>

        <div className=' xl:w-screen lg:h-[50vh] md:h-[40vh] h-[30vh] xl:h-[70vh] bg-[#025750] relative w-full xl:mx-0 mb-[150vh] lg:mb-[80vh] md:mb-[120vh] xl:mt-[20%] lg:mt-[0%] md:mt-[30%] flex items-center justify-center'>
          <h2 className='text-white font-semibold xl:font-bold leading-[31.99px] text-[20px] xl:text-[40px] text-center mt-[2rem] absolute top-0'>Lagos State Digital Onboarders CDS</h2>
          <img src = {images.Group1} alt="svg" className = "absolute bottom-[5vh] xl:bottom-[15vh]" />
          <img src={images.Vector} alt="vector" className = "hidden xl:block absolute rotate-180 right-0 bottom-[-25vh] w-[25%]"/>
          <img src={images.Vector} alt="vector" className = "hidden xl:block absolute rotate-180 left-0 bottom-[-25vh] w-[25%]" />
          
          <div className='absolute lg:top-[40vh] md:top-[45vh] top-[38vh] xl:top-[55vh] xs:mb-[10rem]  md:w-[80%] w-[85%] xl:w-[50%] bg-white rounded-lg shadow-xl p-8'>
            <div>
              <h1 className='text-[#AF6E4D] text-2xl '>Mission</h1>

              <div className='mt-[0.5rem] lg:leading-10 md:leading-8 leading-6'>
                <p className='font font-poppins'>
                  To accelerate inclusive digital adoption, optimization, and transformation; improve members' employability, facilitate MSME growth, and deepen digital literacy of secondary school students.
                </p>
              </div>
            </div>

            <div className='mt-[2rem]'>
              <h1 className='text-[#AF6E4D] text-2xl'>Vision</h1>

              <div className='mt-[0.5rem] lg:leading-10 md:leading-8 leading-6'>
                <p className='font font-poppins'>
                  Be the best NYSC CDS, enabling every member to make the most of their service year.
                </p>
              </div>
            </div>

            <div className='mt-[2rem]'>
              <h1 className='text-[#AF6E4D] text-2xl'>Our Meeting Schedule</h1>

              <div className='mt-[0.5rem] lg:leading-8 md:leading-8 leading-7'>
                <p className='font font-poppins'>
                  PHYSICAL MEETINGS: Every Third Thursdays of the Month
                </p>
                <p className='font font-poppins'>
                  VIRTUAL MEETINGS: Every Second and Forth(If the month has 5 weeks) Thursdays of the Month
                </p>
              </div>
            </div>
          </div>
        </div>

        <CarouselSlides />
        
      </div>
    </MainLayout>
  )
}

export default AboutUsPage