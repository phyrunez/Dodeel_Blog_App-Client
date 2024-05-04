import { useState } from "react"
import ArticlesNav from "./ArticlesNav"
import SearchArticles from "./SearchArticles"
import LatestRelease from "./LatestRelease"
import AllBlogPost from "./AllblogPost"
import PopularPost from "./PopularPost"

const blogCategories = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Education' },
    { id: 3, name: 'Lifestyle' },
    { id: 4, name: 'Entertainment' },
    { id: 5, name: 'Opportunities' },
]

const Articles = () => {
  // let defaultState = {
  //   selectedBlogId: undefined,
  //   blogs: []
  // }

  // const [blogState, setBlogState] = useState(defaultState)
  const [ activeNavName, setActiveNavName ] = useState("All")
  // const [ isMenuActive, setIsMenuActive ] = useState(false)

  return (
    <>
      <div className="container mx-auto w-10/12 px-12 flex justify-between py-3 items-center">
        <SearchArticles />
        <div className="flex flex-row justify-end gap-x-4">
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
      <LatestRelease />
      <AllBlogPost />
      <PopularPost />
    </>
    
  )
}

export default Articles