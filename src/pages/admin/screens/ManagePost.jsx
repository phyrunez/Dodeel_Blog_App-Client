import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { deleteSinglePost, getAllPosts } from '../../../services/posts';
import { images, stables } from '../../../constants';
import Spinner from '../../../components/Spinner';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
// import Pagination from '../../../components/Pagination';

const ManagePost = () => {

  const [searchKeyword, setSearchKeyword] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  
  const { data: postData, isLoading, isFetching, refetch } = useQuery({
    queryFn: () => getAllPosts(searchKeyword, currentPage),
    queryKey: ["posts"],
  })

  console.log(postData)

  useEffect(() => {
    refetch()
  }, [refetch, currentPage])

  const searchKeywordHandler = (e) => {
    const { value } = e.target
    setSearchKeyword(value)

    if(!value) refetch()
  }

  const deleteHandler = (slug) => {
    console.log(slug)
    deleteSinglePost({slug})
    refetch()
  }

  const submitSearchKeywordHandler = (e) => {
    e.preventDefault()
    // setCurrentPage(1)
    // setSearchKeyword()
    refetch()
  }

  return (
    <div className='font font-montserrat'>
      <h1 className="text-2xl font-semibold">Manage Posts</h1>
      <div className="w-full px-4 mx-auto">
        <div className="py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
              <h2 className="text-2xl leading-tight">
                  Users
              </h2>
              <div className="text-end">
                  <form onSubmit={submitSearchKeywordHandler} className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                      <div className=" relative ">
                          <input 
                            type="text" 
                            id="&quot;form-subscribe-Filter" 
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#025750] focus:border-transparent" 
                            placeholder="search post title..."
                            onChange={searchKeywordHandler}
                            value={searchKeyword}
                          />
                          </div>
                          <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-[#025750] rounded-lg shadow-md hover:bg-[#025750] focus:outline-none focus:ring-2 focus:ring-[#025750] focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                              Filter
                          </button>
                      </form>
                  </div>
              </div>
              <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                  <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                      <table className="min-w-full leading-normal">
                          <thead>
                              <tr>
                                  <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                      Title
                                  </th>
                                  <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                      Category
                                  </th>
                                  <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                      Created at
                                  </th>
                                  <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                      Author
                                  </th>
                                  <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                  </th>
                                  <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                            {isLoading || isFetching ? (
                              <tr>
                                <td colSpan={5} className='text-center text-[#025750] py-5 w-full'>
                                  Fetching Posts...
                                </td>
                              </tr>
                            ) : !postData?.data ? 
                            <tr>
                              <td colSpan={5} className='text-center text-[#025750] py-5 w-full'>
                                  No Posts Available
                                </td>
                            </tr> : (
                              postData?.data?.map((post) => (
                                <tr key={post?._id}>
                                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                      <div className="flex items-center">
                                          <div className="flex-shrink-0">
                                              <a href="/" className="relative block">
                                                  <img 
                                                    alt={post.title} 
                                                    src={post?.mainPhoto ? post?.mainPhoto : images.defaultBg} 
                                                    className="mx-auto object-cover rounded-lg w-10 aspect-square"
                                                  />
                                              </a>
                                          </div>
                                          <div className="ml-3">
                                              <Link to={`/blog/${post.slug}`}>
                                                <p className="text-gray-900 cursor-pointer whitespace-no-wrap">
                                                  { post.title }
                                                </p>
                                              </Link>
                                          </div>
                                      </div>
                                  </td>
                                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                      <p className="text-gray-900 whitespace-no-wrap">
                                          {post.category ? post.category : "Uncategorized"}
                                      </p>
                                  </td>
                                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                      <p className="text-gray-900 whitespace-no-wrap">
                                          {new Date(post.createdAt).toLocaleDateString(
                                            'en-US',
                                            {
                                              day: "numeric",
                                              month: "short",
                                              year: "numeric"
                                            }
                                          )}
                                      </p>
                                  </td>
                                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                      <div className="flex gap-x-2">
                                        {post.author ? post.author : "Do Deel"}
                                      </div>
                                  </td>
                                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200" onClick={() => deleteHandler(post.slug)}>
                                      {/* <a href="/" className="text-indigo-600 hover:text-indigo-900">
                                          Edit
                                      </a> */}
                                      <AiFillDelete className='text-red-500 cursor-pointer' />
                                  </td>
                                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                      <a href="/" className="text-indigo-600 hover:text-indigo-900">
                                          Edit
                                      </a>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                      </table>
                      {/* {!isLoading && 
                        <Pagination 
                          onPageChange={page => setCurrentPage(page)} 
                          currentPage={currentPage}
                          totalPageCount={postData?.headers["x-totalPageCount"]}
                        /> 
                      } */}
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ManagePost