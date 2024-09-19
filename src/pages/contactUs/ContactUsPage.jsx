import React from 'react'
import MainLayout from '../../components/MainLayout'
import ContactCard from './components/ContactCard'
import ContactForm from './components/ContactForm'
import { images } from '../../constants'

const ContactUsPage = () => {
  return (
    <MainLayout>
      <div className='bg-[#F6F6F6]'>
        <div className='w-screen h-auto xl:h-screen p-8'>
          <h1 className='leading-[63.96px] text-[48px] font-bold text-center mt-[3rem]'>Get in Touch</h1>
          <p className='leading-[24px] text-[16px] font-light text-center max-w-md mx-auto mt-[2rem]'>
            Reach out to us for collaboration and sponsorships. 
            For other inquiries kindly fill out the contact form below
          </p>
          <div className='flex flex-col space-y-4 mx-auto w-[84%] lg:flex-row items-center justify-evenly mt-[1rem] xl:mt-[6rem]'>
            <ContactCard
              icon={images.Office}
              title={"Office"}
              contact={"Surulere, Lagos"}
            />
            <ContactCard 
              icon={images.Mail}
              title={"Email"}
              contact={"lagosdodeelcds@gmail.com"}
            />
            <ContactCard 
              icon={images.Phone}
              title={"Phone"}
              contact={"(+234) 7051 417 492"}
            />
          </div>
        </div>

        <div className=' xl:w-screen lg:h-[50vh] md:h-[40vh] h-[30vh] xl:h-[70vh] bg-[#025750] relative w-full xl:mx-0 mb-[110vh] lg:mb-[120vh] md:mb-[120vh] flex items-center justify-center'>
          <h2 className='text-white font-bold xl:font-bold leading-[31.99px] text-center mt-[4rem] absolute top-0 font-anton tracking-[0.3em] text-[20px] lg:text-[57px] md:text-[40px] xl:text-[50px]'>Lagos State Digital Onboarders CDS</h2>
          <img src = {images.Group1} alt="svg" className = "absolute bottom-[5vh] xl:bottom-[15vh]" />
          <img src={images.Vector} alt="vector" className = "hidden xl:block absolute rotate-180 right-0 bottom-[-25vh] w-[25%]"/>
          <img src={images.Vector} alt="vector" className = "hidden xl:block absolute rotate-180 left-0 bottom-[-25vh] w-[25%]" />
          <ContactForm />
        </div>
        
      </div>
    </MainLayout>
  )
}

export default ContactUsPage