import React from 'react'

function ContactCard({icon, title, contact}) {
  return (
    <div className='bg-white flex flex-col w-full lg:w-[25%] p-8 items-center shadow-lg rounded-lg cursor-pointer'>
        <div className='flex flex-col items-center justify-center p-8 space-y-4 rounded-full w-[10%] bg-[#025750]'>
            <img src={icon} alt="icon" className='w-[20px] absolute' />
        </div>
        <div className='mt-[1rem] text-[#025750] font-bold'>{title}</div>
        <p className='leading-[28px] text-[16px] font-thin text-center mt-[2rem]'>{contact}</p>
    </div>
  )
}

export default ContactCard