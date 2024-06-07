import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Spinner from "../../../components/Spinner"
import { getAllPosts } from "../../../services/posts"
import { useQuery } from "@tanstack/react-query"

const LatestRelease = () => {
  const [latest, setLatest] = useState()
  const [searchKeyword, setSearchKeyword] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const { data: postsData, isLoading: postsIsLoading, refetch } = useQuery({
    queryKey: ["posts", searchKeyword],
    queryFn: () => getAllPosts(searchKeyword, currentPage)
  })
  
  useEffect(() => {
  
    setLatest(postsData?.data[latestData?.data.length - 1])
    
  }, [])

  return (
    <div className="container mx-auto my-10 w-11/12 lg:w-[77%]">
        <h1 className="text-[#333333] text-3xl py-5 font-bold">Latest Release</h1>
        {latest ? (
            <div className="flex flex-col lg:flex-row justify-between border bg-white shadow-md rounded-[1rem]">
                <img className="w-full lg:w-1/2" src={latest?.mainPhoto} alt="latest-release" />
                <div className="w-full lg:justify-start px-2 lg:px-[50px]">
                    <div className="flex flex-col py-2 lg:py-[20px]">
                        <div  className="flex flex-row mt-5">
                            <span className="bg-[#025750] text-white font-bold px-1 py-1 border rounded-md">{latest?.category}</span>
                            <p className="px-4 py-1">
                                {new Date(latest?.createdAt).toLocaleDateString(
                                    'en-US',
                                    {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric"
                                    }
                                )}
                            </p>
                        </div>
                        <div className="text-[#111111]">
                            <h2 className="text-4xl py-5 font-bold">{latest.title}</h2>
                            <span className="py-5">By {latest?.author}</span>
                            <p className="py-5">{latest.introText.substring(0, 200)}...</p>
                        </div>
                    </div>
                    <div className="mt-[.5rem] pr-4 pb-2">
                        <Link to={`/blog/${latest?.slug}`} className="text-[#003140] underline">
                            Read More...
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        ) : ( <Spinner /> )}
        
    </div>
    
  )
}

export default LatestRelease