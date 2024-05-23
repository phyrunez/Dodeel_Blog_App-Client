import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactCard from './components/ContactCard'
import ContactForm from './components/ContactForm'
import { images } from '../../constants'

const ContactUsPage = () => {
  return (
    <div className='bg-[#F6F6F6]'>
      <Header />
      <div className='w-screen h-auto xl:h-screen p-8'>
        <h1 className='leading-[63.96px] text-[48px] font-bold text-center mt-[4rem]'>Get in Touch</h1>
        <p className='leading-[24px] text-[16px] font-light text-center mt-[2rem]'>
          Reach out to us for collaboration and sponsorships. 
          For other inquiries kindly fill out the contact form below
        </p>
        <div className='flex flex-col space-y-4 lg:flex-row items-center justify-evenly mt-[2rem] xl:mt-[6rem]'>
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
            contact={"(+234) 8123 456 789"}
          />
        </div>
      </div>

      <div className='w-[90%] xl:w-screen h-[40vh] xl:h-[70vh] bg-[#025750] relative mx-[5%] xl:mx-0 mb-[90vh] flex items-center justify-center'>
        <h2 className='text-white font-semibold xl:font-bold leading-[31.99px] text-[20px] xl:text-[40px] text-center mt-[2rem] absolute top-0'>Lagos State Digital Onboarders CDS</h2>
        <img src = {images.Group1} alt="svg" className = "absolute bottom-[5vh] xl:bottom-[15vh]" />
        <img src={images.Vector} alt="vector" className = "hidden xl:block absolute rotate-180 right-0 bottom-[-25vh] w-[25%]"/>
        <img src={images.Vector} alt="vector" className = "hidden xl:block absolute rotate-180 left-0 bottom-[-25vh] w-[25%]" />
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default ContactUsPage