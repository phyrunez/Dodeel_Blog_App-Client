import { useNavigate } from "react-router-dom"
import { images } from "../../../constants"
import BlogCard from "../../../components/BlogCard"

const PopularPost = () => {
  const navigate = useNavigate()

  return (
    <>
        <div className="container mx-auto w-[78%] xl:w-10/12 px-4 xl:px-12 flex justify-between pt-20 items-center">
            <h1 className="text-[#333333] text-3xl  font-bold">Popular Post</h1>
            <button
                onClick={() => navigate('/')}
                className="border-2 border-[#025750] rounded-md bg-[#025750] px-5 py-1 text-white font-semibold hover:bg-transparent hover:text-[#025750] transition-all duration-300"
            >
                View All
            </button>
        </div>
        <div class="container p-4 mx-auto w-[78.5%] flex flex-col gap-x-15 items-center md:flex-row lg:my-6 md:justify-between">
            <BlogCard 
                css = {"card card-compact lg:w-[30%] md:w-[45%] xl:w-[30%]"}
                images = {images.popularPost_1}
                category = {"Education"}
                date = {"13 March 2024"}
                title = {"8 Rules of Travelling In Sea You Need To Know"}
                author = {"By " + "Joseph Brian"}
                desc = {"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs "}
            />    

            <BlogCard 
                css = {"card card-compact lg:w-[30%] md:w-[45%] xl:w-[30%]"}
                images = {images.popularPost_2}
                category = {"Education"}
                date = {"13 March 2024"}
                title = {"8 Rules of Travelling In Sea You Need To Know"}
                author = {"By " + "Joseph Brian"}
                desc = {"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs "}
            />    

            <BlogCard 
                css = {"hidden xl:block card card-compact lg:w-[30%] md:w-[45%] xl:w-[30%]"}
                images = {images.popularPost_3}
                category = {"Education"}
                date = {"13 March 2024"}
                title = {"8 Rules of Travelling In Sea You Need To Know"}
                author = {"By " + "Joseph Brian"}
                desc = {"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs "}
            />    

            
        </div>
    </>
  )
}

export default PopularPost