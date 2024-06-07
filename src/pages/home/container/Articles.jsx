import { useEffect, useMemo, useState } from "react"
import ArticlesNav from "./ArticlesNav"
import SearchArticles from "./SearchArticles"
import LatestRelease from "./LatestRelease"
import AllBlogPost from "./AllblogPost"
import PopularPost from "./PopularPost"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "../../../services/posts"
import Spinner from "../../../components/Spinner"
import { Link } from "react-router-dom"

const blogCategories = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Education' },
    { id: 3, name: 'Lifestyle' },
    { id: 4, name: 'Entertainment' },
    { id: 5, name: 'Opportunities' },
]

const Articles = () => {
  const [ activeNavName, setActiveNavName ] = useState("All")
  
  const [activeState, setActiveState] = useState(true)
  
  const { data: postsData, isLoading: postsIsLoading, refetch } = useQuery({
    queryKey: ["posts", searchKeyword],
    queryFn: () => getAllPosts(searchKeyword, currentPage)
  })

  console.log(postsData)
  console.log(activeNavName)
  

  let filteredCat
  if(!postsIsLoading) {
    filteredCat = postsData?.data.filter(d => d.category === activeNavName)
    console.log(filteredCat)
  }

  return (
    <div>
      <div className="container mx-auto w-10/12 px-12 flex justify-between py-3 items-center">
        <SearchArticles />
        <div className="hidden xl:flex flex-row justify-end gap-x-4">
          {blogCategories.map(item => {
            return (
              <ArticlesNav
                key={item.id}
                item={item.name}
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
                setActiveState={setActiveState}
              />
            )
          })}
        </div>
      </div>
      

      {activeNavName === "All" ? (
          <>
            <LatestRelease  />
            <AllBlogPost />
            <PopularPost  />
          </>
        ) : (
          <div class="container p-4 mx-auto w-[78.5%] flex flex-row gap-x-15 items-center lg:my-6 md:justify-between">
            {filteredCat.map(data => (
              <div className ="card card-compact lg:w-[30%] md:w-[45%] xl:w-[30%]">
                <figure>
                    <img className="w-[100%] h-[15rem]" src={data?.mainPhoto} alt="photo" />
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
            ))}
          </div>
        )}

     
      
    </div>
    
  )
}

export default Articles