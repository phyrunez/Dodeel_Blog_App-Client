import { useNavigate } from "react-router-dom"
import { images } from "../../../constants"
import BlogCard from "../../../components/BlogCard"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts, rankedPost } from "../../../services/posts"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Spinner from "../../../components/Spinner"

const PopularPost = () => {
    const [searchKeyword, setSearchKeyword] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const { data: postsData, isLoading: postsIsLoading, refetch } = useQuery({
        queryKey: ["posts", searchKeyword],
        queryFn: () => getAllPosts(searchKeyword, currentPage)
    })

    let newArray
    if(postsData) {
        newArray = postsData?.data.sort((a, b) => {
            if(a.likes === null) return 1
            if(b.likes === null) return -1
            return b.likes - a.likes
        })
    }
  
  const navigate = useNavigate()


  return (
    <>
        <div className="container mx-auto lg:w-[78%] md:w-[78%] w-[98%] xl:w-10/12 px-4 xl:px-12 flex justify-between pt-20 items-center">
            <h1 className="text-[#333333] text-3xl  font-bold">Popular Post</h1>
            {/* <button
                onClick={() => navigate('/')}
                className="border-2 border-[#025750] rounded-md bg-[#025750] px-5 py-1 text-white font-semibold hover:bg-transparent hover:text-[#025750] transition-all duration-300"
            >
                View All
            </button> */}
        </div>

        <div class="container p-4 mx-auto lg:w-[78.5%] md:w-[78.5%] w-[98%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 items-center lg:my-6 md:justify-between">
            {newArray ? newArray.slice(0, 3).map(data => ( 
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

export default PopularPost