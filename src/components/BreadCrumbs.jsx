import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({ data }) => {
  console.log(data)
  return (
    <div className='flex items-center py-4 overflow-x-auto whitespace-nowrap'>
        {data.map((item, index) => (
            <div key={index} className='text-black opacity-50 text-xs font-poppins md:text-xs'>
                <Link to={item.link} className={`${item.name === 'Home' || item.name === 'Blog' ? 'text-black' : 'text-[#025750]'}`}>{item.name}</Link>
                {index !== data.length - 1 && <span className='px-3'>/</span>}
            </div>
        ))}
    </div>
  )
}

export default BreadCrumbs