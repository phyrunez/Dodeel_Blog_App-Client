import { useForm } from 'react-hook-form'
import Spinner from "../../../../components/Spinner"

const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Education" },
    { id: 3, name: "Lifestyle" },
    { id: 4, name: "Entertainment" },
    { id: 5, name: "Opportunities" },
]

const AddNewPostForm = ({ submitHandler, defaultInputValues, setDefaultInputValues, isLoading }) => {
    const { register, handleSubmit, formState: { errors, isValid }} = useForm({
        defaultValues: {
            title: "", 
            author: "", 
            introText: "", supportText: "", italicText: "",
            summaryText: "", mainPhoto: "", supportPhoto: "", 
            category: "", date: "", likes: ""
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
    <form onSubmit={handleSubmit(submitHandler)}>
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
                className={`placeholder:text-[#c4c4c4] text-[#c4c4c4] mt-3 rounded-lg px-5 py-4 font-semibold block
                outline-none border ${errors.title ? "border-red-500" : "border-[#c3cad9]"} ${defaultInputValues.titleVal >= 5 && "border-green-500"}`} 
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
                className={`placeholder:text-[#c4c4c4] text-[#c4c4c4] mt-3 rounded-lg px-5 py-4 font-semibold block
                outline-none border ${errors.title ? "border-red-500" : "border-[#c3cad9]"} ${defaultInputValues.authorVal >= 5 && "border-green-500"}`} 
            />
        </div>

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
                className={`placeholder:text-[#c4c4c4] text-[#c4c4c4] mt-3 rounded-lg px-5 py-4 font-semibold block
                outline-none border ${errors.title ? "border-red-500" : "border-[#c3cad9]"} ${defaultInputValues.introTextVal >= 5 && "border-green-500"}`} 
            />
        </div>

        <div className='flex flex-row w-full gap-x-10'>
            <div className="flex flex-col mb-6 w-[46%]">
                <label htmlFor="mainPhoto" className='text-[#5a7184] font-semibold block'>Main Photo</label>
                <input 
                    type="text" 
                    id="mainPhoto" 
                    {...register("mainPhoto", {
                        required: { value: true, message: "Photo field is required, and must be a link to an image online!"},
                    })} 
                    onChange={handleChange}
                    placeholder="Enter Image Link"
                    className={`placeholder:text-[#c4c4c4] text-[#c4c4c4] mt-3 rounded-lg px-5 py-4 font-semibold block
                    outline-none border ${errors.title ? "border-red-500" : "border-[#c3cad9]"}`} 
                />
            </div>
            <div className="flex flex-col mb-6 w-[46%]">
                <label htmlFor="supportPhoto" className='text-[#5a7184] font-semibold block'>Support Photo</label>
                <input 
                    type="text" 
                    id="supportPhoto" 
                    {...register("supportPhoto", {
                        required: { value: true, message: "Photo field is required, and must be a link to an image online!"},
                    })} 
                    onChange={handleChange}
                    placeholder="Enter Image Link"
                    className={`placeholder:text-[#c4c4c4] text-[#c4c4c4] mt-3 rounded-lg px-5 py-4 font-semibold block
                    outline-none border ${errors.title ? "border-red-500" : "border-[#c3cad9]"}`} 
                />
            </div>
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
                className={`placeholder:text-[#c4c4c4] text-[#c4c4c4] mt-3 rounded-lg px-5 py-4 font-semibold block
                outline-none border ${errors.supportText ? "border-red-500" : "border-[#c3cad9]"} ${defaultInputValues.supportTextVal >= 5 && "border-green-500"}`} 
            />
        </div>

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
                className={`placeholder:text-[#c4c4c4] text-[#c4c4c4] mt-3 rounded-lg px-5 py-4 font-semibold block
                outline-none border ${errors.italicText ? "border-red-500" : "border-[#c3cad9]"} ${defaultInputValues.italicTextVal >= 5 && "border-green-500"}`} 
            />
        </div>

        <div className="flex flex-row w-full gap-x-10">
            <div className="flex flex-col mb-6 w-[46%]">
                <label htmlFor="date" className='text-[#5a7184] font-semibold block'>Date</label>
                <input 
                    type="date" 
                    id="date" 
                    {...register("date", {
                        required: { value: true, message: "Date field is required, and must be a link to an image online!"},
                    })} 
                    onChange={handleChange}
                    placeholder="Choose publishing date"
                    className={`placeholder:text-[#c4c4c4] text-[#c4c4c4] mt-3 rounded-lg px-5 py-4 font-semibold block
                    outline-none border ${errors.date ? "border-red-500" : "border-[#c3cad9]"}`} 
                />
            </div>

            <div className="flex flex-col mb-6 w-[46%]">
                <label htmlFor="category" className='text-[#5a7184] font-semibold block'>Category</label>
                <select 
                    type="category" 
                    id="category" 
                    {...register("category", {
                        required: { value: true, message: "Category field is required, and must be a link to an image online!"},
                    })} 
                    onChange={handleChange}
                    placeholder="Select Category"
                    className={`placeholder:text-[#c4c4c4] text-[#c4c4c4] mt-3 rounded-lg px-5 py-4 font-semibold block
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
                className={`placeholder:text-[#c4c4c4] text-[#c4c4c4] mt-3 rounded-lg px-5 py-4 font-semibold block
                outline-none border ${errors.summaryText ? "border-red-500" : "border-[#c3cad9]"} ${defaultInputValues.summaryTextVal >= 5 && "border-green-500"}`} 
            />
        </div>

        {isLoading && <Spinner />}

        <button 
            type='submit' 
            disabled={!isValid || isLoading}
            className='bg-[#025750] text-white font-bold text-lg py-4 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed'
        >
            Add Post
        </button>
        
    </form>
  )
}

export default AddNewPostForm