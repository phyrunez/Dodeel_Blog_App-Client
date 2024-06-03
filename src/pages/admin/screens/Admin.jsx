import { images } from "../../../constants"
import React, { useEffect, useState } from 'react'
import { deleteSinglePost, getAllPosts } from '../../../services/posts';
import { useQuery } from '@tanstack/react-query';
import ManagePost from "./ManagePost"
import EditPostForm from "./new-post/EditPostForm";
import Pagination from "../../../components/Pagination";
import { getAllUsers } from "../../../services/users";
import { getAllMessages } from "../../../services/contacts";
import toast from "react-hot-toast";

const Admin = () => {

  const [searchKeyword, setSearchKeyword] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [editState, setEditState] = useState(false)
  const [getSlug, setGetSlug] = useState()
  // const [userData, setUserData] = useState()
  
  const { data: postData, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["posts", searchKeyword],
    queryFn: () => getAllPosts(searchKeyword, currentPage),
  })

  console.log(postData)

  const { data: userData } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  })

  console.log(userData)

  const { data: messageData } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => getAllMessages(),
  })

  console.log(messageData)

  useEffect(() => {
    refetch()
    // refreshUser()
    // refreshContact()
    setTotalPages(Number(postData?.headers["x-totalpagecount"]))
  }, [refetch])

  const searchKeywordHandler = (e) => {
    const { value } = e.target
    setSearchKeyword(value)

    if(!value) refetch()
  }

  const deleteHandler = (slug) => {
    console.log(slug)
    deleteSinglePost({slug})
    toast.success("Post Deleted successfully!!!")
    refetch()
  }

  const handlePageChange = (page) => {
    if(page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const changeStateHandler = (slug) => {
    console.log(slug)
    setGetSlug(slug)
    setEditState(prevState => !prevState)
  }

  const submitSearchKeywordHandler = (e) => {
    e.preventDefault()
    if(searchKeyword) refetch()
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#FFBF00] rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">{userData?.data.length}</div>
              </div>
              <div className="text-sm font-medium text-white">Users</div>
            </div>
            <img src={images.userSolid} alt="users" className="h-12 w-12" />        
          </div>
        </div>
        <div className="bg-[#025750] rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-4">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold text-gray-200">{messageData?.data.messages.length}</div>
                <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">+30%</div>
              </div>
              <div className="text-sm font-medium text-white">Messages</div>
            </div>
            <img src={images.commentSolid} alt="users" className="h-12 w-12" />          
          </div>
                
        </div>
        <div className="bg-[#AF6E4D] rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="text-2xl font-semibold mb-1">{postData?.data.length}</div>
              <div className="text-sm font-medium text-white">Blogs</div>
            </div>
            <img src={images.blogSolid} alt="users" className="h-12 w-12" />             
          </div>

        </div>
      </div>

     {!editState ? (
        <div className="mt-10">
        <ManagePost 
          postData={postData}
          isLoading={isLoading}
          isFetching={isFetching}
          searchKeyword={searchKeyword}
          searchKeywordHandler={searchKeywordHandler}
          submitSearchKeywordHandler={submitSearchKeywordHandler}
          setSearchKeyword={setSearchKeyword}
          deleteHandler={deleteHandler}
          
          changeStateHandler={changeStateHandler}
        />

        {!isLoading && 
          <Pagination 
            onPageChange={handlePageChange} 
            currentPage={currentPage}
            totalPageCount={totalPages}
          /> 
        }
       </div>
       
     ) : (
        <div className="mt-10">
          <EditPostForm slug={getSlug} changeStateHandler={changeStateHandler} />
        </div>
     )}
    </div>
  )
}

export default Admin