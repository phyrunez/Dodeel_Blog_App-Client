import { images } from "../../../constants"
import BlogCard from "../../../components/BlogCard"

const AllblogPost = () => {
  return (
    <div class="container p-4 mx-auto w-[78.5%] flex flex-col gap-x-15 items-center md:flex-row lg:my-6 md:justify-between">
        <BlogCard 
          css = {"card card-compact lg:w-[30%] md:w-[45%] xl:w-[30%]"}
          images = {images.firstBlog}
          category = {"Entertainment"}
          date = {"13 March 2024"}
          title = {"Who is the best singer on the chart?"}
          author = {"By " + "Joseph Brian"}
          desc = {"chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and "}
        />    

        <BlogCard 
          css = {"card card-compact w-full md:w-[45%] xl:w-[30%]"}
          images = {images.thirdBlog}
          category = {"Entertainment"}
          date = {"13 March 2024"}
          title = {"Who is the best singer on the chart?"}
          author = {"By " + "Joseph Brian"}
          desc = {"chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and "}
        />    

        <BlogCard 
          css = {"hidden xl:block card card-compact w-full md:w-[45%] xl:w-[30%]"}
          images = {images.secondBlog}
          category = {"Entertainment"}
          date = {"13 March 2024"}
          title = {"Who is the best singer on the chart?"}
          author = {"By " + "Joseph Brian"}
          desc = {"chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and "}
        />            

            
    </div>
  )
}

export default AllblogPost