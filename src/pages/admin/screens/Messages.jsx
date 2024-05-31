import { useQuery } from "@tanstack/react-query"
import { useState, useEffect } from "react"
import { getAllMessages } from "../../../services/contacts"
import Pagination from "../../../components/Pagination"
import Spinner from "../../../components/Spinner"

const Messages = () => {
  const [searchKeyword, setSearchKeyword] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const pageSize = 10

  const { data: messageData, isLoading, refetch } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => getAllMessages(searchKeyword, currentPage, pageSize),
  })

  console.log(messageData)
  

  useEffect(() => {
    refetch()

    // setTotalPages(Number(messageData?.data))
  }, [refetch])

  const searchKeywordHandler = (e) => {
    const { value } = e.target
    setSearchKeyword(value)

    if(!value) refetch()
  }

  const handlePageChange = (page) => {
    if(page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const submitSearchKeywordHandler = (e) => {
    e.preventDefault()
    if(searchKeyword) refetch()
  }

  return (
    <>
      <div className="flex flex-row justify-between w-full mb-12 sm:mb-0">
        <h2 className="text-2xl leading-tight">
          View All Messages
        </h2>
        <div className="text-end">
          <form onSubmit={submitSearchKeywordHandler} className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
            <div className=" relative ">
              <input 
                type="text" 
                id="&quot;form-subscribe-Filter" 
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#025750] focus:border-transparent" 
                placeholder="search by Email..."
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

      {messageData.data.messages.map(msg => (
        <div className="collapse bg-red-200 text-white my-6 mx-auto max-w-[60%]">
          <input type="radio" name="my-accordion-3" /> 
          <div className="collapse-title bg-[#025750] opacity-4 flex flex-row justify-between w-full">
            <p className=" text-white">Message Subject: {msg.subject.toUpperCase()} by {msg.email}</p>
            
          </div>
          <div className="collapse-content"> 
            <p className="py-2">{msg.message}</p>
          </div>
        </div>
      ))}

      {isLoading && <Spinner />}      
      

      <div className="my-8">
      <Pagination 
        onPageChange={handlePageChange} 
        currentPage={currentPage}
        totalPageCount={totalPages}
      /> 
      </div>
    </>
  )
}

export default Messages