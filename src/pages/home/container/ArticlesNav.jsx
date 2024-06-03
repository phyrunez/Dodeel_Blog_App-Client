const ArticlesNav = ({ item, activeNavName, setActiveNavName, setActiveState }) => {

  return (
    <>
      <div className='mt-[56px] lg:mt-2 lg:bg-transparent w-full lg:w-auto lg:justify-end lg:flex-row lg:static gap-x-4 items-center'>
        <ul className='text-[#c4c4c4] items-center gap-y-5 lg:text-[#c4c4c4] lg:flex lg:flex-row cursor-pointer gap-x-8 font-xs'>
          <li 
            className={`
              ${item === activeNavName ? "bg-[#025750] text-white font-bold px-3 py-1 rounded-md" : "font-semibold bg-white text-[#c4c4c4]"}
            border px-3 py-1 rounded-md`}
              onClick={() => setActiveNavName(item)}
          >
            {item}
          </li>
        </ul>
      </div>
    </>
  )
}

export default ArticlesNav