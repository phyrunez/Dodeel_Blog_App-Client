import { BiSearchAlt } from 'react-icons/bi'

const ArticlesNav = ({ blogCategories }) => {
  return (
    <section className=''>
        <header className='mx-auto w-[80%] px-5 flex justify-between items-center'>
            <div className='flex flex-col gap-y-2.5 mt-5 relative'>
                <div className='relative'>
                    <BiSearchAlt className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]' />
                    <input 
                        className='placeholder:font-ss font-ss text-[#c4c4c4] placeholder:text-[#c4c4c4] rounded-lg pl-12 pr-3 w-full py-2 focus:outline-none shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] md:py-2'
                        type="text" 
                        placeholder="Search Blog Post"
                    />
                </div>
            </div>

            <div className='lg:hidden md:block block'>
              <select></select>
             </div> 

            <div className='mt-[56px] lg:mt-2 lg:bg-transparent w-full lg:w-auto lg:justify-end lg:flex-row lg:static gap-x-4 items-center'>
              <ul className='text-[#c4c4c4] items-center gap-y-5 lg:text-[#c4c4c4] flex lg:flex-row cursor-pointer gap-x-8 font-xs'>
                {blogCategories.map(item => {
                  return (
                    <li key={item.id} className={`${item.name === 'All' && 'active active:bg-slate-600'}`}>
                        {item.name}
                    </li>
                  )
                })}
              </ul>
            </div>
        </header>
    </section>
  )
}

export default ArticlesNav