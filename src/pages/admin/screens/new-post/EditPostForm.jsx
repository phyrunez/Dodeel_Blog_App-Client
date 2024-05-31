import { useForm } from 'react-hook-form'
import Spinner from "../../../../components/Spinner"
import { useQuery, useMutation } from '@tanstack/react-query'
import { getSinglePost, updatePost } from '../../../../services/posts'
import { useEffect, useState } from 'react'
import toast from "react-hot-toast"

const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Education" },
    { id: 3, name: "Lifestyle" },
    { id: 4, name: "Entertainment" },
    { id: 5, name: "Opportunities" },
]

const EditPostForm = ({ isLoading, slug, changeStateHandler }) => {
    const [defaultInputValues, setDefaultInputValues] = useState({
        titleVal: "", authorVal: "", introTextVal: "", supportTextVal: "", italicTextVal: "",
        summaryTextVal: "", mainPhotoVal: "", supportPhotoVal: "", categoryVal: "", dateVal: "", 
        likesVal: ""
    })

    const [loadingState, setLoadingState] = useState(false)

    const { data: postData, refetch } = useQuery({
        queryKey: ["posts", slug],
        queryFn: () => getSinglePost({slug})
    })
    
    console.log(postData)
    useEffect(() => {
        refetch()
    }, [refetch])

    console.log(slug)

    const { mutate, isLoading: updatePostIsLoading } = useMutation({
        mutationFn: ({ title, author, category, mainPhoto, supportPhoto, date, likes, introText, supportText, italicText, summaryText}) => {
          return updatePost({
            slug: slug,
            userData: { title, author, category, mainPhoto, supportPhoto, date, likes, introText, supportText, italicText, summaryText}
          })
        },
        onSuccess: (data) => {
          toast.success("Blog Post updated successfully")
          changeStateHandler()
        },
        onError: (error) => {
          toast.error(error.message)
        }
      })

    const submitHandler = (data) => {
        const { title, author, category, mainPhoto, supportPhoto, date, likes, introText, supportText, italicText, summaryText} = data
        mutate({ title, author, category, mainPhoto, supportPhoto, date, likes, introText, supportText, italicText, summaryText})
        setLoadingState(prev => !prev)
    }

    const { register, handleSubmit, formState: { errors, isValid }} = useForm({
        defaultValues: {
            title: "", 
            author: "", 
            introText: "", supportText: "", italicText: "",
            summaryText: "", mainPhoto: "", supportPhoto: "", 
            category: "", date: "", likes: ""
        },
        values: {
            title: !postData ? " " : postData?.title,
            author: !postData ? " " : postData?.author,
            introText: !postData ? " " : postData?.introText,
            supportText: !postData ? " " : postData?.supportText,
            italicText: !postData ? " " : postData?.italicText,
            summaryText: !postData ? " " : postData?.summaryText,
            mainPhoto: !postData ? " " : postData?.mainPhoto,
            supportPhoto: !postData ? " " : postData?.supportPhoto,
            category: !postData ? " " : postData?.category,
            date: !postData ? " " : postData?.date,
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
            Edit Blog Post
        </h1>
        {postData ? (
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className='flex flex-row  gap-x-10'>
                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="title" className='text-[#5a7184] font-semibold block'>Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            {...register("title", {
                                minLength: { value: 5, message: "Title length must be greater than 5 character"},
                                required: { value: true, message: "Title field is required!"},
                            })} 
                            onChange={handleChange}
                            placeholder="Enter Blog Title"
                            // value={postData?.title}
                            className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                            outline-none border ${errors.title ? "border-red-500" : "border-[#c3cad9]"}`} 
                        />
                    </div>

                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="author" className='text-[#5a7184] font-semibold block'>Author</label>
                        <input 
                            type="text" 
                            id="author" 
                            {...register("author", {
                                minLength: { value: 5, message: "Author length must be greater than 5 character"},
                                required: { value: true, message: "Author field is required!"},
                            })} 
                            onChange={handleChange}
                            placeholder="Enter Author's Name"
                            // value={postData?.author}
                            className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                            outline-none border ${errors.title ? "border-red-500" : "border-[#c3cad9]"}`} 
                        />
                    </div>
                </div>
                
                <div className='flex flex-row w-full gap-x-10'>
                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="introText" className='text-[#5a7184] font-semibold block'>Introductory Text</label>
                        <textarea
                            type="text" 
                            id="introText" 
                            {...register("introText", {
                                minLength: { value: 5, message: "Introductory Text length must be greater than 5 character"},
                                required: { value: true, message: "Introductory Text field is required!"},
                            })} 
                            onChange={handleChange}
                            placeholder="Enter Introductory Text"
                            // value={postData?.introText}
                            className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                            outline-none border ${errors.title ? "border-red-500" : "border-[#c3cad9]"}`} 
                        />
                    </div>
                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="supportText" className='text-[#5a7184] font-semibold block'>Additional Text</label>
                        <textarea
                            type="text" 
                            id="supportText" 
                            {...register("supportText", {
                                minLength: { value: 5, message: "Additional Text length must be greater than 5 character"},
                                required: { value: true, message: "Additional Text field is required!"},
                            })} 
                            onChange={handleChange}
                            placeholder="Enter Additional Text"
                            // value={postData?.supportText}
                            className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                            outline-none border ${errors.supportText ? "border-red-500" : "border-[#c3cad9]"}`} 
                        />
                    </div>
                </div>

                <div className='flex flex-row w-full gap-x-10'>
                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="mainPhoto" className='text-[#5a7184] font-semibold block'>Main Photo</label>
                        <input 
                            type="text" 
                            id="mainPhoto" 
                            {...register("mainPhoto", {
                                required: { value: true, message: "Photo field is required, and must be a link to an image online!"},
                            })} 
                            onChange={handleChange}
                            placeholder="Enter Image Link"
                            // value={postData?.mainPhoto}
                            className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                            outline-none border ${errors.title ? "border-red-500" : "border-[#c3cad9]"}`} 
                        />
                    </div>
                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="supportPhoto" className='text-[#5a7184] font-semibold block'>Support Photo</label>
                        <input 
                            type="text" 
                            id="supportPhoto" 
                            {...register("supportPhoto", {
                                required: { value: true, message: "Photo field is required, and must be a link to an image online!"},
                            })} 
                            onChange={handleChange}
                            placeholder="Enter Image Link"
                            // value={postData?.supportPhoto}
                            className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                            outline-none border ${errors.title ? "border-red-500" : "border-[#c3cad9]"}`} 
                        />
                    </div>
                </div>

                <div className="flex flex-row w-full gap-x-10">
                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="date" className='text-[#5a7184] font-semibold block'>Date</label>
                        <input 
                            type="date" 
                            id="date" 
                            {...register("date", {
                                required: { value: true, message: "Date field is required, and must be a link to an image online!"},
                            })} 
                            onChange={handleChange}
                            placeholder="Choose publishing date"
                            
                            className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                            outline-none border ${errors.date ? "border-red-500" : "border-[#c3cad9]"}`} 
                        />
                    </div>

                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="category" className='text-[#5a7184] font-semibold block'>Category</label>
                        <select 
                            type="category" 
                            id="category" 
                            {...register("category", {
                                required: { value: true, message: "Category field is required, and must be a link to an image online!"},
                            })} 
                            onChange={handleChange}
                            placeholder="Select Category"
                            // value={postData?.category}
                            className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                            outline-none border ${errors.category ? "border-red-500" : "border-[#c3cad9]"}`} 
                        >
                            <option value="select category">Select Category</option>
                            {categories && categories.map(item => {
                                return (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                
                <div className="flex flex-row w-full gap-x-10">
                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="italicText" className='text-[#5a7184] font-semibold block'>Italic Text</label>
                        <textarea
                            type="text" 
                            id="italicText" 
                            {...register("italicText", {
                                minLength: { value: 5, message: "Italic Text length must be greater than 5 character"},
                                required: { value: true, message: "Italic Text field is required!"},
                            })} 
                            onChange={handleChange}
                            placeholder="Enter Italic Text"
                            // value={postData?.italicText}
                            className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                            outline-none border ${errors.italicText ? "border-red-500" : "border-[#c3cad9]"}`} 
                        />
                    </div>
                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="summaryText" className='text-[#5a7184] font-semibold block'>Summary Text</label>
                        <textarea
                            type="text" 
                            id="summaryText" 
                            {...register("summaryText", {
                                minLength: { value: 5, message: "Summary Text length must be greater than 5 character"},
                                required: { value: true, message: "Summary Text field is required!"},
                            })} 
                            onChange={handleChange}
                            placeholder="Enter Summary Text"
                            // value={postData?.summaryText}
                            className={`mt-3 rounded-lg px-5 py-4 font-semibold block
                            outline-none border ${errors.summaryText ? "border-red-500" : "border-[#c3cad9]"}`} 
                        />
                    </div>
                </div>

                {isLoading && <Spinner />}

                <button 
                    type='submit' 
                    // disabled={!isValid || isLoading}
                    className='bg-[#025750] text-white font-bold text-lg py-4 mx-auto w-[20%] rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed'
                >
                    {!loadingState ? "Edit Post" : "Processing..."}
                </button>
                
            </form>
        ) : (
            <Spinner />
        )}
    </div>
  )
}

export default EditPostForm