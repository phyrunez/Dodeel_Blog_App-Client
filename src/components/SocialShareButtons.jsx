import React from 'react'
// import { FaFacebookSquare, FaRedditSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa'
import { images } from '../constants'

const SocialShareButtons = ({ url, title, }) => {
  return (
    <div className={`flex justify-between flex-col`}>
        <a target="_blank" rel="noreferrer" className='flex flex-row' href={`https://twitter.com/intent/tweet?url=${url}`}>
            <img src={images.TwitterLogo} className='cursor-pointer h-6 w-6' /><span className='ml-[0.5rem] mt-1'>Share on Twitter</span>
        </a>
        <a target="_blank" rel="noreferrer" className='flex flex-row -ml-2' href={`https://api.whatsapp.com/send?text=${url}`}>
            <img src={images.WhatsAppLogo} className='cursor-pointer h-10 w-10' /><span className=' mt-[0.75rem]'>Share on WhatsApp</span>
        </a>
        <a target="_blank" rel="noreferrer" className='flex flex-row ml-1' href={`https://www.instagram.com/?url=${url}`}>
            <img src={images.Instagram} className='cursor-pointer h-5 w-5' /><span className='ml-[0.5rem] mt-1'>Share on Instagram</span>
        </a>
    </div>
  )
}

export default SocialShareButtons