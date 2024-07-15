import { useForm } from 'react-hook-form'
import Spinner from '../../../components/Spinner'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import toast from "react-hot-toast"
import { getSingleUser, updateUser } from '../../../services/users'

const EditUserForm = ({ isLoading, slug, changeStateHandler }) => {
    const [defaultInputValues, setDefaultInputValues] = useState({
        nameVal: "", emailVal: "", roleVal: ""
    })

    const [loadingState, setLoadingState] = useState(false)

    const { data, refetch } = useQuery({
        queryKey: ["posts", slug],
        queryFn: () => getSingleUser({slug})
    })
    
    console.log(data)
    useEffect(() => {
        refetch()
    }, [refetch])

    console.log(slug)

    const { mutate, isLoading: updatePostIsLoading } = useMutation({
        mutationFn: ({ name, email, admin }) => {
          return updateUser({
            slug: slug,
            userData: { name, email, admin }
          })
        },
        onSuccess: (data) => {
          toast.success("User Details updated successfully")
          setLoadingState(prev => !prev)
          changeStateHandler()
        },
        onError: (error) => {
          setLoadingState(prev => !prev)
          toast.error(error.message)
        }
      })

    const submitHandler = (data) => {
        const { name, email, admin } = data
        mutate({ name, email, admin })
        setLoadingState(prev => !prev)
    }

    const { register, handleSubmit, formState: { errors, isValid }} = useForm({
        defaultValues: {
            name: "", 
            email: "", 
            admin: ""
        },
        values: {
            name: !data ? " " : data?.name,
            email: !data ? " " : data?.email,
            admin: !data ? " " : data?.admin === true ? "Admin" : "Corp Member",
        },

        mode: 'onChange'
    })
    
    const handleChange = e => {
        setDefaultInputValues({
            ...defaultInputValues,
            [e.target.name]: e.target.value
        })
    }


  return (
    <div className="mx-auto max-w-5xl">
        <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Edit User Details
        </h1>
        {data ? (
            <form onSubmit={handleSubmit(submitHandler)} className='lg:max-w-[50%] lg:mx-auto md:max-w-[50%] md:mx-auto mx-auto w-full'>
                <div className="flex flex-col mb-6 w-full">
                    <label htmlFor="title" className='text-[#5a7184] font-semibold block'>Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        {...register("name", {
                            minLength: { value: 5, message: "Name length must be greater than 5 character"},
                            required: { value: true, message: "Name field is required!"},
                        })} 
                        onChange={handleChange}
                        placeholder="Enter User Name"
                        // value={postData?.title}
                        className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                        outline-none border ${errors.name ? "border-red-500" : "border-[#c3cad9]"}`} 
                    />
                </div>

                <div className="flex flex-col mb-6 w-full">
                    <label htmlFor="author" className='text-[#5a7184] font-semibold block'>Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        {...register("email", {
                            minLength: { value: 5, message: "Email length must be greater than 5 character"},
                            required: { value: true, message: "Email field is required!"},
                        })} 
                        onChange={handleChange}
                        placeholder="Enter User Email"
                        // value={postData?.author}
                        className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                        outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad9]"}`} 
                    />
                </div>

                <div className="flex flex-col mb-6 w-full">
                    <label htmlFor="author" className='text-[#5a7184] font-semibold block'>Role(Enter "Admin" or "Corp Member")</label>
                    <input 
                        type="text" 
                        id="admin" 
                        {...register("admin", {
                            minLength: { value: 5, message: "Admin length must be greater than 5 character"},
                            required: { value: true, message: "Admin field is required!"},
                        })} 
                        onChange={handleChange}
                        placeholder="Enter Role"
                        // value={postData?.author}
                        className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                        outline-none border ${errors.admin ? "border-red-500" : "border-[#c3cad9]"}`} 
                    />
                </div>

                {isLoading && <Spinner />}

                <button 
                    type='submit' 
                    // disabled={!isValid || isLoading}
                    className='bg-[#025750] text-white font-bold lg:text-lg md:text-lg text-sm py-4 mx-auto lg:w-[30%] md:w-[20%] w-[30%] rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed'
                >
                    {!loadingState ? "Edit User" : "Processing..."}
                </button>
                
            </form>
        ) : (
            <Spinner />
        )}
    </div>
  )
}

export default EditUserForm