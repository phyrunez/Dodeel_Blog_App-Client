import { BiSearchAlt } from 'react-icons/bi'

const SearchArticles = () => {
  return (
    <div className='flex flex-col gap-y-2.5 mt-2 relative'>
        <div className='relative'>
            <BiSearchAlt className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]' />
            <input 
                className='placeholder:font-ss font-ss text-[#c4c4c4] placeholder:text-[#c4c4c4] rounded-lg pl-12 pr-3 w-[20rem] py-2 focus:outline-none shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] md:py-2'
                type="text" 
                placeholder="Search Blog Post"
            />
        </div>
    </div>
  )
}

export default SearchArticles