import { useEffect, useState } from "react"
import ArticlesNav from "./ArticlesNav"
import SearchArticles from "./SearchArticles"
import LatestRelease from "./LatestRelease"
import AllBlogPost from "./AllblogPost"
import PopularPost from "./PopularPost"
import { useQuery } from "@tanstack/react-query"
import { getAllPosts } from "../../../services/posts"
import Spinner from "../../../components/Spinner"

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
  
  const { data: postsData, isLoading: postsIsLoading, refetch } = useQuery({
    queryKey: ["posts", searchKeyword],
    queryFn: () => getAllPosts(searchKeyword, currentPage)
  })

  useEffect(() => {
    refetch()
  }, [])

  console.log(postsData)

  return (
    <>
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
              />
            )
          })}
        </div>
      </div>
      {postsIsLoading ? <Spinner /> : (
        <>
          <LatestRelease latestData={postsData} />
          <AllBlogPost allData={postsData} />
        </>
      )}
      <PopularPost />
    </>
    
  )
}

export default Articles