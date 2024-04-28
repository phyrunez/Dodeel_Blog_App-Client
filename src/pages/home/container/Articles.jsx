import { useState } from "react"
import ArticlesNav from "./ArticlesNav"

const blogCategories = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Education' },
    { id: 3, name: 'Lifestyle' },
    { id: 4, name: 'Entertainment' },
    { id: 5, name: 'Opportunities' },
]

const Articles = () => {
  let defaultState = {
    selectedBlogId: undefined,
    blogs: []
  }

  const [blogState, setBlogState] = useState(defaultState)

  return (
    <>
        <ArticlesNav
            blogCategories={blogCategories}
        />
    </>
  )
}

export default Articles