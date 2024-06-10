import { images } from "../../../constants"
import BlogCard from "../../../components/BlogCard"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "../../../services/posts"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Spinner from "../../../components/Spinner"

const AllblogPost = () => {
  const [allPosts, setAllPosts] = useState([])
  const [searchKeyword, setSearchKeyword] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const { data: postsData, isLoading: postsIsLoading, refetch } = useQuery({
    queryKey: ["posts", searchKeyword],
    queryFn: () => getAllPosts(searchKeyword, currentPage)
  })

  useEffect(() => {
    if(postsData) {
      let start = postsData?.data.length - 4
      setAllPosts(postsData?.data.slice(start, start + 3))
    }
  }, [])
  

  return (
    <>
      
        <div class="container p-4 mx-auto w-[78.5%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 items-center lg:my-6 md:justify-between">
        {allPosts ? allPosts.map(data => ( 
            <div className ="card card-compact lg:w-[100%] md:w-[100%] xl:w-[100%] md:my-4 my-4">
              <figure>
                  <img className="w-[100%] h-[15rem]" src={data?.mainPhoto} alt="Shoes" />
              </figure>
              <div className="card-body -mx-4">
                  <div  className="flex flex-row mt-5">
                      <span className="bg-[#025750] text-white font-bold px-1 py-1 border rounded-md">{data?.category}</span>
                      <p className="px-4 py-1 text-[#025750]">
                        {new Date(data?.createdAt).toLocaleDateString(
                          'en-US',
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                          }
                        )}
                      </p>
                  </div>
                  <h2 className="card-title text-[#333333] font-bold text-2xl">{data?.title}</h2>
                  <div>
                      <span className="py-5 text-[#025750] font-sm">{data?.author}</span>
                      <p className="py-5 text-base">{data.introText.substring(0, 100)}...</p>
                  </div>
                  <div className="mt-[1rem]">
                    <Link to={`/blog/${data?.slug}`} className="text-[#003140] font-montserrat text-base underline">
                      Read More...
                    </Link>
                      
                  </div>
              </div>    
            </div>
          )) : ( <Spinner /> )}
         
        </div>
        
    </>
  )

}

export default AllblogPost