import { useState, useEffect } from 'react';
import { images, stables } from '../../../constants';
import Spinner from '../../../components/Spinner';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { deleteSingleUser, getAllUsers } from '../../../services/users';
import Pagination from '../../../components/Pagination';
import EditUserForm from './EditUserForm';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const [searchKeyword, setSearchKeyword] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [editState, setEditState] = useState(false)
    const [getSlug, setGetSlug] = useState()

    const { data: userData, isLoading, isFetching, refetch } = useQuery({
        queryKey: ["users", searchKeyword],
        queryFn: () => getAllUsers(searchKeyword, currentPage),
    })

    const searchKeywordHandler = (e) => {
        const { value } = e.target
        setSearchKeyword(value)
    
        if(!value) refetch()
    }

    useEffect(() => {
        refetch()
        
        setTotalPages(Number(userData?.headers["x-totalpagecount"]))
    }, [refetch])

    const deleteHandler = (slug) => {
        console.log(slug)
        deleteSingleUser({slug})
        toast.success("User Deleted successfully!!!")
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
        refetch()
    }
    
    const submitSearchKeywordHandler = (e) => {
        e.preventDefault()
        if(searchKeyword) refetch()
    }
  
  return (
    // <>
        
        <div className='mt-10'>
        <div className='font font-montserrat'>
            <h1 className="text-2xl font-semibold">Manage Users</h1>
            <div className="w-full px-4 mx-auto">
                <div className="py-8">
                <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
                    <h2 className="text-2xl leading-tight">
                        All Users
                    </h2>
                    
                    <div className="text-end">
                        <form onSubmit={submitSearchKeywordHandler} className="flex lg:flex-row flex-col lg:mt-0 justify-center w-full max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                            <div className=" relative ">
                                <input 
                                    type="text" 
                                    id="&quot;form-subscribe-Filter" 
                                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-[#025750] focus:border-transparent" 
                                    placeholder="search user name..."
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
                    {!editState ? (
                    <>
                    <div className='mt-10'>
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div className="inline-block w-full overflow-hidden overflow-x-auto rounded-lg shadow">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="lg:px-5 md:px-5 px-10 py-3 text-xs lg:text-sm md:text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Name
                                        </th>
                                        <th scope="col" className="lg:px-5 md:px-5 px-10 py-3 text-xs lg:text-sm md:text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Email
                                        </th>
                                        <th scope="col" className="lg:px-5 md:px-5 px-10 py-3 text-xs lg:text-sm md:text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Created at
                                        </th>
                                        <th scope="col" className="lg:px-5 md:px-5 px-10 py-3 text-xs lg:text-sm md:text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Role
                                        </th>
                                        <th scope="col" className="lg:px-5 md:px-5 px-10 py-3 text-xs lg:text-sm md:text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        </th>
                                        <th scope="col" className="lg:px-5 md:px-5 px-10 py-3 text-xs lg:text-sm md:text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {isLoading || isFetching ? (
                                    <tr>
                                        <td colSpan={5} className='text-center text-[#025750] py-5 w-full'>
                                            Fetching Users...
                                        </td>
                                    </tr>
                                    ) : !userData?.data ? 
                                    <tr>
                                    <td colSpan={5} className='text-center text-[#025750] py-5 w-full'>
                                        No Users Available
                                    </td>
                                    </tr> : (
                                    userData?.data?.map((user) => (
                                        <tr key={user?._id}>
                                        <td className="lg:px-5 md:px-5 px-8 py-5 text-xs lg:text-sm md:text-sm bg-white border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <a href="/" className="relative block">
                                                        {user?.avatar ? (
                                                            <img 
                                                                alt={user.name} 
                                                                src={stables.UPLOAD_FOLDER_BASE_URL + user?.avatar} 
                                                                className="mx-auto object-cover rounded-lg w-10 aspect-square"
                                                            />
                                                        ) : (
                                                            <img 
                                                                alt={user.name} 
                                                                src={images.NewLogo} 
                                                                className="mx-auto object-cover rounded-lg w-10 aspect-square"
                                                            />
                                                        )}
                                                        
                                                    </a>
                                                </div>
                                                <div className="ml-3">
                                                        <p className="text-gray-900 cursor-pointer whitespace-no-wrap">
                                                        { user.name }
                                                        </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="lg:px-5 md:px-5 px-8 py-5 text-xs lg:text-sm md:text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {user.email ? user.email : "No Email"}
                                            </p>
                                        </td>
                                        <td className="lg:px-5 md:px-5 px-8 py-5 text-xs lg:text-sm md:text-sm bg-white border-b border-gray-200">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {new Date(user.createdAt).toLocaleDateString(
                                                    'en-US',
                                                    {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric"
                                                    }
                                                )}
                                            </p>
                                        </td>
                                        <td className="lg:px-5 md:px-5 px-8 py-5 text-xs lg:text-sm md:text-sm bg-white border-b border-gray-200">
                                            <div className="flex gap-x-2">
                                                {user.admin === true ? "Admin" : "Corp Member"}
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 text-xs lg:text-sm md:text-sm bg-white border-b border-gray-200" onClick={() => deleteHandler(user?.slug)}>
        
                                            <AiFillDelete className='text-red-500 cursor-pointer' />
                                        </td>
                                        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200" onClick={() => changeStateHandler(user?.slug)}>
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
                        {!isLoading && 
                            <Pagination 
                                onPageChange={handlePageChange} 
                                currentPage={currentPage}
                                totalPageCount={totalPages}
                            /> 
                        }
                    </div>
                    </>
                    
                ) : (
                    <div className="mt-10">
                        <EditUserForm slug={getSlug} changeStateHandler={changeStateHandler} />
                    </div>
                )}
                
            </div>
            </div>
            </div>
        </div>      
        
        
    
  )
}

export default AllUsers