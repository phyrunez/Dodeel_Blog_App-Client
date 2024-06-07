import React from 'react'
import { Link } from 'react-router-dom'

function ContactCard({icon, title, contact}) {
  return (
    <div className='bg-white flex flex-col w-full lg:w-[30%] p-8 items-center shadow-lg rounded-lg cursor-pointer'>
        <div className='flex flex-col items-center justify-center p-8 space-y-4 rounded-full w-[10%] bg-[#025750]'>
            <img src={icon} alt="icon" className='w-[20px] absolute' />
        </div>
        <div className='mt-[1rem] text-[#025750] font-bold'>{title}</div>
        <p className='leading-[28px] text-[16px] font-thin text-center mt-[2rem]'>
          {contact === 'lagosdodeelcds@gmail.com' ? 
            <Link to="mailto:lagosdodeelcds@gmail.com">{contact}</Link>
          : contact === '(+234) 8123 456 789' ? 
            <Link to="tel:+2348123456789">{contact}</Link>
          : contact}
          
        </p>
    </div>
  )
}

export default ContactCard