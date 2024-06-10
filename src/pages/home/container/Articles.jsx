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
import { AiOutlineArrowDown } from "react-icons/ai"

const blogCategories = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Education' },
    { id: 3, name: 'Lifestyle' },
    { id: 4, name: 'Entertainment' },
    { id: 5, name: 'Opportunities' },
]

const Articles = () => {
  const [ activeNavName, setActiveNavName ] = useState("All")
  const [searchKeyword, setSearchKeyword] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [activeState, setActiveState] = useState(true)
  const [selectedOption, setSelectedOption] = useState("")
  
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

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value)
    if(e.target.value !== "All") setActiveNavName(e.target.value)
    if(e.target.value === "All") setActiveNavName(e.target.value)
  }

  return (
    <div>
      <div className="container mx-auto w-10/12 px-12 flex flex-col lg:flex-row md:flex-row justify-between py-3 items-center">
        <SearchArticles />
        <div className="md:hidden hidden xl:flex flex-row justify-end gap-x-4">
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
        <div className="xl:hidden lg:visible md:visible">
          <div className='flex flex-col gap-y-2.5 mt-2 relative'>
            <div className='relative'>
            <select
              id="dynamic-select"
              value={selectedOption}
              onChange={handleSelectChange}
              className='placeholder:font-ss font-ss text-[#c4c4c4] placeholder:text-[#c4c4c4] rounded-lg pl-4 pr-3  lg:w-[15rem] py-2 focus:outline-none shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] md:py-2'
            >
              <option value="">--Select Category--</option>
              {blogCategories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
              {/* <AiOutlineArrowDown className='absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]' /> */}
            </div>
          </div>
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