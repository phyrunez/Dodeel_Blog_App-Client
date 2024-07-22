
const Hero = () => {
  return (
    <section className='flex flex-col'>
        <div className='mt-8 lg:mt-15 md:mt-15'>
            <p className='font-montserrat text-xs text-center  text-[#666666] md:text-center md:text-xs lg:text-center lg:text-sm'>
                OUR BLOG
            </p>
            <h1 className='font-montserrat text-3xl text-center font-bold py-5 text-[#333333] md:text-center md:text-3xl lg:text-center lg:text-3xl lg:font-bold'>
                Find all our blogs from here
            </h1>
            <p className='font-montserrat text-xs mx-auto w-[75%] xl:w-[40%] text-center  text-[#666666] md:text-center md:text-xs lg:text-center lg:text-sm'>
                Our blogs are written through thorough research by competent writers providing you with the best, juiciest, most educative, and most exciting blogs and articles for you to read all day long.
            </p>
            <hr className="border border-[#003140] mt-20 container mx-auto w-[77%] items-center" />
        </div>
    </section>    
  )
}

export default Hero