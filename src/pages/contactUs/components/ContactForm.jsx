import React from 'react'

function ContactForm() {
  return (
    <div className='absolute top-[45vh] xl:top-[55vh] w-[90%] xl:w-[50%] bg-white rounded-lg shadow-xl p-8'>
        <form action="#">
            <h2 className='mb-[2rem] text-[32px] font-bold leading-[63.96px]'>Contact Us</h2>
            <div className='flex flex-col xl:flex-row xl:flex-wrap items-center justify-evenly'>
                <div className='w-full xl:w-[45%] flex flex-col '>
                    <label htmlFor="name" className='mb-[0.5rem] xl:mb-[1rem]'>Name</label>
                    <input type="text" name="name" id="name" className='border border-[rgba(0, 0, 0, 0.7)] p-1 rounded-lg mb-[1rem] xl:mb-[2rem]'/>
                </div>
                <div className='w-full xl:w-[45%] flex flex-col '>
                    <label htmlFor="email" className='mb-[0.5rem] xl:mb-[1rem]' >Email</label>
                    <input type="email" name="email" id="email" className='border border-[rgba(0, 0, 0, 0.7)] p-1 rounded-lg mb-[1rem] xl:mb-[2rem]' />
                </div>
                <div className='w-full xl:w-[45%] flex flex-col '>
                    <label htmlFor="phone" className='mb-[0.5rem] xl:mb-[1rem]'>Phone</label>
                    <input type="tel" name="phone" id="phone" className='border border-[rgba(0, 0, 0, 0.7)] p-1 rounded-lg mb-[1rem] xl:mb-[2rem]' />
                </div>
                <div className='w-full xl:w-[45%] flex flex-col '>
                    <label htmlFor="subject" className='mb-[0.5rem] xl:mb-[1rem]'>Subject</label>
                    <input type="text" name="subject" id="subject" className='border border-[rgba(0, 0, 0, 0.7)] p-1 rounded-lg mb-[1rem] xl:mb-[2rem]' />
                </div>
            </div>
            <div className='w-[100%] px-0 xl:px-[3.5%] flex flex-col '>
                <label htmlFor="message" className='mb-[0.5rem] xl:mb-[1rem]'>Message</label>
                <input type="text" name="message" id="message" className='border border-[rgba(0, 0, 0, 0.7)] p-1 rounded-lg mb-[1rem] xl:mb-[2rem] h-[100px] xl:h-[150px]' />
            </div>
            <div className='w-full flex items-center justify-center'>
            <input type="submit" value="Send Message" className='bg-[#025750] px-[1.5rem] py-[0.5rem] rounded-md text-white cursor-pointer' />
            </div>
        </form>
    </div>
  )
}

export default ContactForm