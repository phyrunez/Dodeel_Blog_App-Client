import { useState } from 'react'
import { sendMessage } from '../../../services/contacts'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import toast from "react-hot-toast"

function ContactForm() {

    const [defaultContactInputVal, setDefaultContactInputVal] = useState({
        name: "", email: "", phoneNumber: "", subject: "", message: ""
    })

    const [loadingState, setLoadingState] = useState(false)

    const { mutate } = useMutation({
        mutationFn: ({ name, email, phoneNumber, subject, message }) => {
          return sendMessage({
            contactData: { name, email, phoneNumber, subject, message }
          })
        },
        onSuccess: () => {
          toast.success("Message sent successfully, Kindly check your email for more details. Thanks!!")
          setLoadingState(prev => !prev)
        },
        onError: (error) => {
          toast.error(error.message)
        }
      })

    const { register, handleSubmit, formState: { errors, isValid }} = useForm({
        defaultValues: {
            name: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
        },
        mode: 'onChange'
    })

    const submitHandler = (data) => {
        const { name, email, phoneNumber, subject, message } = data  
        mutate({ name, email, phoneNumber, subject, message })
        setLoadingState(prev => !prev)
    }

    const handleChange = e => {
        setDefaultContactInputVal({
            ...defaultContactInputVal,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className='absolute top-[45vh] xl:top-[55vh] w-[90%] xl:w-[50%] bg-white rounded-lg shadow-xl p-8'>
        <form onSubmit={handleSubmit(submitHandler)}>
            <h2 className='mb-[2rem] text-[32px] font-bold leading-[63.96px]'>Contact Us</h2>
            <div className='flex flex-col xl:flex-row xl:flex-wrap items-center justify-evenly'>
                <div className='w-full xl:w-[45%] flex flex-col '>
                    <label htmlFor="name" className='mb-[0.5rem] xl:mb-[1rem]'>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        {...register("name", {
                            minLength: { value: 5, message: "Name length must be greater than 5 character"},
                            required: { value: true, message: "Name field is required!"},
                        })} 
                        onChange={handleChange}
                        className={`border border-[rgba(0, 0, 0, 0.7)] p-1 rounded-lg mb-[1rem] xl:mb-[2rem] ${errors.name ? "border-red-500" : "border-[#c3cad9]"} ${defaultContactInputVal.name >= 5 && "border-green-500"}`}
                    />
                </div>
                <div className='w-full xl:w-[45%] flex flex-col '>
                    <label htmlFor="email" className='mb-[0.5rem] xl:mb-[1rem]' >Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        {...register('email', {
                            pattern: {
                              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Enter a valid Email address"
                            },
                            required: { value: true, message: "Email address field is required!" }
                        })}
                        onChange={handleChange} 
                        className={`border border-[rgba(0, 0, 0, 0.7)] p-1 rounded-lg mb-[1rem] xl:mb-[2rem] ${errors.email ? "border-red-500" : "border-[#c3cad9]"} ${defaultContactInputVal.email.includes('@') && "border-green-500"}`}
                    />
                </div>
                <div className='w-full xl:w-[45%] flex flex-col '>
                    <label htmlFor="phone" className='mb-[0.5rem] xl:mb-[1rem]'>Phone</label>
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        id="phoneNumber"
                        {...register("phoneNumber", {
                            minLength: { value: 11, message: "Phone Number length must be 11 characters long!"},
                            required: { value: true, message: "Phone Number field is required!"},
                        })}  
                        onChange={handleChange}
                        className={`border border-[rgba(0, 0, 0, 0.7)] p-1 rounded-lg mb-[1rem] xl:mb-[2rem] ${errors.phoneNumber ? "border-red-500" : "border-[#c3cad9]"} ${defaultContactInputVal.phoneNumber === 11 && "border-green-500"}`}
                    />
                </div>
                <div className='w-full xl:w-[45%] flex flex-col '>
                    <label htmlFor="subject" className='mb-[0.5rem] xl:mb-[1rem]'>Subject</label>
                    <input 
                        type="text" 
                        name="subject" 
                        id="subject"
                        {...register("subject", {
                            minLength: { value: 5, message: "Subject length must be greater than 5 character"},
                            required: { value: true, message: "Subject field is required!"},
                        })} 
                        onChange={handleChange} 
                        className={`border border-[rgba(0, 0, 0, 0.7)] p-1 rounded-lg mb-[1rem] xl:mb-[2rem] ${errors.subject ? "border-red-500" : "border-[#c3cad9]"} ${defaultContactInputVal.subject >= 5 && "border-green-500"}`} 
                    />
                </div>
            </div>
            <div className='w-[100%] px-0 xl:px-[3.5%] flex flex-col '>
                <label htmlFor="message" className='mb-[0.5rem] xl:mb-[1rem]'>Message</label>
                <textarea 
                    type="text" 
                    name="message" 
                    id="message" 
                    {...register("message", {
                        minLength: { value: 5, message: "Message length must be greater than 5 character"},
                        required: { value: true, message: "Message field is required!"},
                    })} 
                    onChange={handleChange}
                    className={`border border-[rgba(0, 0, 0, 0.7)] p-1 rounded-lg mb-[1rem] xl:mb-[2rem] h-[100px] xl:h-[150px] ${errors.message ? "border-red-500" : "border-[#c3cad9]"} ${defaultContactInputVal.message >= 5 && "border-green-500"}`} 
                />
            </div>
            <div className='w-full flex items-center justify-center'>
                <button 
                    type="submit" 
                    // disabled={!isValid || isLoading}
                    className='bg-[#025750] px-[1.5rem] py-[0.5rem] rounded-md text-white cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed'
                >
                    {!loadingState ? "Send Message" : "Sending..."}
                </button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm