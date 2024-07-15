import { images, stables } from '../../../constants';
import Spinner from '../../../components/Spinner';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
// import Pagination from '../../../components/Pagination';

const ManagePost = ({
  postData,
  isLoading,
  isFetching,
  searchKeyword,
  searchKeywordHandler,
  submitSearchKeywordHandler,
  deleteHandler,
  changeStateHandler,
  setSearchKeyword
}) => {
  
  return (
    <div className='font font-montserrat'>
      <h1 className="text-2xl font-semibold">Manage Posts</h1>
      <div className="w-full px-4 mx-auto">
        <div className="py-8">
          <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
              <h2 className="text-2xl leading-tight">
                Blog Posts
              </h2>
              <div className="text-end">
                  <form onSubmit={submitSearchKeywordHandler} className="flex lg:flex-row flex-col lg:mt-0 justify-center w-full max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
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
                  <div className="inline-block w-full overflow-x-auto rounded-lg shadow">
                      <table className="min-w-full leading-normal">
                          <thead>
                              <tr>
                                  <th scope="col" className="px-10 lg:px-5 md:px-5 py-3 text-xs lg:text-sm md:text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                      Title
                                  </th>
                                  <th scope="col" className="px-10 lg:px-5 md:px-5 py-3 text-xs lg:text-sm md:text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                      Category
                                  </th>
                                  <th scope="col" className="px-10 lg:px-5 md:px-5 py-3 text-xs lg:text-sm md:text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                      Created at
                                  </th>
                                  <th scope="col" className="px-10 lg:px-5 md:px-5 py-3 text-xs lg:text-sm md:text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                      Author
                                  </th>
                                  <th scope="col" className="px-10 lg:px-5 md:px-5 py-3 text-xs lg:text-sm md:text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                  </th>
                                  <th scope="col" className="px-10 lg:px-5 md:px-5 py-3 text-xs lg:text-sm md:text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
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
                                  <td className="px-5 py-5 text-xs lg:text-sm md:text-sm bg-white border-b border-gray-200">
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
                                  <td className="px-12 lg:px-5 md:px-5 py-5 text-xs lg:text-sm md:text-sm bg-white border-b border-gray-200">
                                      <p className="text-gray-900 whitespace-no-wrap">
                                          {post.category ? post.category : "Uncategorized"}
                                      </p>
                                  </td>
                                  <td className="px-5 py-5 text-xs lg:text-sm md:text-sm bg-white border-b border-gray-200">
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
                                  <td className="px-5 py-5 text-xs lg:text-sm md:text-sm bg-white border-b border-gray-200">
                                      <div className="flex gap-x-2">
                                        {post.author ? post.author : "Do Deel"}
                                      </div>
                                  </td>
                                  <td className="px-5 py-5 text-xs lg:text-sm md:text-sm bg-white border-b border-gray-200" onClick={() => deleteHandler(post.slug)}>
  
                                      <AiFillDelete className='text-red-500 cursor-pointer' />
                                  </td>
                                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200" onClick={() => changeStateHandler(post.slug)}>
                                      <Link className="text-indigo-600 hover:text-indigo-900">
                                          Edit
                                      </Link>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                      </table>
                      
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ManagePost