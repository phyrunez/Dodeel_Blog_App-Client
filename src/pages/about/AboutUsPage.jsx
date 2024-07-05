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
          <div className='flex flex-col space-y-4 mx-auto lg:w-[70%] md:w-[70%] w-[90%] lg:flex-row items-center justify-evenly my-[1rem] xl:mt-[6rem]'>
            <div className="flex flex-col justify-between border md:my-5 bg-white shadow-md rounded-[1rem] max-h-[30rem]">
                
                <div className="w-full lg:justify-start px-2 lg:px-[50px]">
                    <div className="flex flex-col py-2 lg:py-[20px]">
                      <div className=''>
                        <h1 className='text-[#FFBF00] md:text-2xl lg:text-lg text-base'>Our Culture</h1>

                        <div className='mt-[0.5rem] md:leading-10 xl:leading-7 lg:leading-5 leading-6'>
                          <p className='font font-poppins'>At Digital Onboarders CDS, our culture thrives on skill development, open communication, order, and a strong community spirit. We
                            honor and respect diverse perspectives, consistently pursue excellence, and encourage innovative thinking. Above all, we embrace a growth
                            mindset that propels us to overcome challenges and achieve continuous personal and collective growth.
                          </p>
                        </div>

                      </div>

                      <div className='mt-[2.5rem] '>
                        {/* <h1 className='text-[#FFBF00] md:text-2xl lg:text-lg text-base'>Our NYSC Officials</h1> */}
                        
                        {/* <div className='flex flex-row justify-center gap-x-20 mx-auto max-w-[50%] mt-[1.5rem]'>
                            {officialsArr.map(official => {
                              return <div className='rounded-full w-[100%] h-[40%]'>
                                <img key={official.id} className='rounded-full w-[100%] h-[100%] gap-y-10' src={official.name} alt='official' />
                                <div className='w-[100%]'>
                                  <h2 className='text-sm w-[100%]'>{official.officialName}</h2>
                                  <p className='text-[#FFBF00]'>{official.title}</p>
                                </div>
                              </div>
                            })}
                        </div> */}

                        
                      </div>
                    </div>
                    
                </div>
                {/* <img className="w-full lg:w-1/2 lg:block md:block hidden lg:h-[29.5rem] md:h-[40rem]" src={images.Official_3}  alt="schedule" /> */}
            </div>
          </div>
        </div>

        <CarouselSlides />

        <div className=' xl:w-screen h-[40vh] xl:h-[70vh] bg-[#025750] relative w-full xl:mx-0 mb-[150vh] lg:mb-[100vh] md:mb-[120vh] xl:mt-[20%] lg:mt-[10%] md:mt-[70%] flex items-center justify-center'>
          <h2 className='text-white font-semibold xl:font-bold leading-[31.99px] text-[20px] xl:text-[40px] text-center mt-[2rem] absolute top-0'>Lagos State Digital Onboarders CDS</h2>
          <img src = {images.Group1} alt="svg" className = "absolute bottom-[5vh] xl:bottom-[15vh]" />
          <img src={images.Vector} alt="vector" className = "hidden xl:block absolute rotate-180 right-0 bottom-[-25vh] w-[25%]"/>
          <img src={images.Vector} alt="vector" className = "hidden xl:block absolute rotate-180 left-0 bottom-[-25vh] w-[25%]" />
          
          <div className='absolute top-[45vh] xl:top-[55vh] xs:mb-[10rem] md:w-[80%] w-[85%] xl:w-[50%] bg-white rounded-lg shadow-xl p-8'>
            <div className='text-center'>
              <h1 className='text-[#AF6E4D] text-2xl '>Mission</h1>

              <div className='mt-[0.5rem] leading-10'>
                <p className='font font-poppins'>
                  To accelerate the achievement of this goal. In response to the ongoing requests from Corp Members to join DIGITAL ONBORADERS as a Community Development Service
                  (CDS), we've recognized the need to engage Corp Members constructively beyond camp. Hence, we've established the
                  Digital Onboarders CDS Group in line with the NYSC mandate.
                </p>
              </div>
            </div>

            <div className='mt-[2rem] text-center'>
              <h1 className='text-[#AF6E4D] text-2xl'>Vision</h1>

              <div className='mt-[0.5rem] leading-10'>
                <p className='font font-poppins'>
                  To serve as a catalyst for personal development and economic growth.
                </p>
              </div>
            </div>

            <div className='mt-[3rem]'>
              <h1 className='text-[#AF6E4D] text-2xl'>Our Meeting Schedule</h1>

              <div className='mt-[0.5rem] leading-8'>
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
        
      </div>
    </MainLayout>
  )
}

export default AboutUsPage