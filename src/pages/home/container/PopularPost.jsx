import { useNavigate } from "react-router-dom"
import { images } from "../../../constants"
import BlogCard from "../../../components/BlogCard"

const PopularPost = () => {
  const navigate = useNavigate()

  return (
    <>
        <div className="container mx-auto w-full xl:w-10/12 px-4 xl:px-12 flex justify-between py-3 items-center">
            <h1 className="text-[#333333] text-3xl py-5 font-bold">Popular Post</h1>
            <button
                onClick={() => navigate('/')}
                className="border-2 border-[#025750] rounded-md bg-[#025750] px-5 py-1 text-white font-semibold hover:bg-transparent hover:text-[#025750] transition-all duration-300"
            >
                View All
            </button>
        </div>
        <div class="container p-4 mx-auto w-full flex flex-col items-center md:flex-row lg:my-6 md:justify-evenly">
            <BlogCard 
                css = {"card card-compact w-full md:w-[45%] xl:w-96"}
                images = {images.popularPost_1}
                category = {"Education"}
                date = {"13 March 2024"}
                title = {"8 Rules of Travelling In Sea You Need To Know"}
                author = {"By " + "Joseph Brian"}
                desc = {"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs "}
            />    

            <BlogCard 
                css = {"card card-compact w-full md:w-[45%] xl:w-96"}
                images = {images.popularPost_2}
                category = {"Education"}
                date = {"13 March 2024"}
                title = {"8 Rules of Travelling In Sea You Need To Know"}
                author = {"By " + "Joseph Brian"}
                desc = {"Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs "}
            />    

            <BlogCard 
                css = {"hidden xl:block card card-compact w-full md:w-[45%] xl:w-96"}
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