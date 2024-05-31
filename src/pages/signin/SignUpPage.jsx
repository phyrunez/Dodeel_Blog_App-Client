import { useState, useEffect }  from 'react'
import MainLayout from '../../components/MainLayout.jsx'
import { useForm } from "react-hook-form"
import { useMutation } from '@tanstack/react-query'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux'
import { signup } from "../../services/users.js"
import { userActions } from '../../store/reducers/userReducer.js';
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const SignUpPage = () => {
  const [ nameVal, setNameVal ] = useState("");
  const [ emailVal, setEmailVal ] = useState("");
  const [ passwordVal, setPasswordVal ] = useState("");
  const [ confirmPassVal, setConfirmPassVal ] = useState("");
  const [loadingState, setLoadingState] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user)

  const { mutate } = useMutation({
    mutationFn: ({ name, email, password }) => {
        return signup({ name, email, password })
    },
    onSuccess: (data) => {
        dispatch(userActions.setUserInfo(data));
        localStorage.setItem("account", JSON.stringify(data))
        toast.success("successfully sign up")
    },
    onError: (error) => {
        toast.error(error.message)
        console.log(error)
    }
  })

  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm({
    defaultValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    },
    mode: 'onChange'
  })  

  const submitHandler = (data) => { 
    const { name, email, password } = data;
    mutate({ name, email, password });
    setLoadingState(prev => !prev)
   }

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

   useEffect(() => {
    if(userState.userInfo) navigate("/");
   }, [navigate, userState.userInfo])

  const password = watch("password");

  return (
    <MainLayout>
        <section className='container mx-auto px-5 py-10'>
            <div className="w-full max-w-sm mx-auto">
                <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
                    Sign Up
                </h1>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="name" className='text-[#5a7184] font-semibold block'>Name</label>
                        <input 
                        type="text" 
                        id="name" 
                        {...register("name", {
                            minLength: { value: 1, message: "Name length must be greater than 1 character"},
                            required: { value: true, message: "Name field is required!"},
                        })} 
                        onChange={e => setNameVal(e.target.value)}
                        placeholder="Enter Name"
                        className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block
                        outline-none border ${errors.name ? "border-red-500" : "border-[#c3cad9]"} ${nameVal && "border-green-500"}`} />

                        {errors.name?.message &&
                            <p className='text-red-500 text-xs mt-1'>{ errors?.name.message }</p>
                        }
                       
                    </div>

                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="email" className='text-[#5a7184] font-semibold block'>Email Address</label>
                        <input 
                        type="email" 
                        id="email" 
                        {...register("email", {
                            pattern: { 
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
                                message: "Enter a valid Email address"
                            },
                            required: { value: true, message: "Email address field is required!"}
                        })} 
                        onChange={e => setEmailVal(e.target.value)}
                        placeholder="Enter Email"
                        className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block
                        outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad9]"} ${emailVal.includes('@') && "border-green-500"}`} />

                        {errors.email?.message && (
                            <p className='text-red-500 text-xs mt-1'>{ errors?.email.message }</p>
                        )}
                    </div>

                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="password" className='text-[#5a7184] font-semibold block'>Password</label>
                        <div className="flex flex-row relative border w-full rounded-lg mt-3">
                            <input 
                                type={showPassword ? "text" : "password"}
                                id="password" 
                                {...register("password", {
                                    minLength: { value: 6, message: "password length must be atleast 6 character"},
                                    required: { value: true, message: "password field is required!"},
                                })} 
                                onChange={e => setPasswordVal(e.target.value)}
                                placeholder="Enter Password"
                                className={`placeholder:text-[#959ead] text-dark-hard w-full rounded-lg px-5 py-4 font-semibold block
                                outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad9]"} ${passwordVal.length >= 6 && "border-green-500"}`} 
                            />

                            <span onClick={togglePasswordVisibility} className="absolute right-5 bottom-5 cursor-pointer">
                                {!showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {errors.password?.message && (
                            <p className='text-red-500 text-xs mt-1'>{ errors?.password.message }</p>
                        )}
                    </div>

                    <div className="flex flex-col mb-6 w-full">
                        <label htmlFor="confirmPassword" className='text-[#5a7184] font-semibold block'>Confirm Password</label>
                        <div className="flex flex-row relative border w-full rounded-lg mt-3">
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                {...register("confirmPassword", {
                                    required: { value: true, message: "confirm password field is required!"},
                                    validate: (value) => {
                                        if(value !== password) return "Passwords do not match";
                                    }
                                })} 
                                onChange={e => setConfirmPassVal(e.target.value)}
                                placeholder="Enter Confirm Password"
                                className={`placeholder:text-[#959ead] text-dark-hard w-full rounded-lg px-5 py-4 font-semibold block
                                outline-none border ${errors.confirmPassword ? "border-red-500" : "border-[#c3cad9]"} ${confirmPassVal.length >= 6 && "border-green-500"}`} 
                            />

                            <span onClick={togglePasswordVisibility} className="absolute right-5 bottom-5 cursor-pointer">
                                {!showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {errors.confirmPassword?.message && (
                            <p className='text-red-500 text-xs mt-1'>{ errors?.confirmPassword.message }</p>
                        )}
                    </div>

                    <button 
                        type='submit' 
                        // disabled={!isValid || isLoading}
                        className='bg-[#025750] text-white font-bold text-lg py-4 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed'
                    >
                        {!loadingState ? "Register" : "Processing..."}
                    </button>
                    <p className="text-sm text-center font-semibold text-[#5a7184]">
                        You have an account? <Link to="/login" className='text-primary'>Login now</Link>
                    </p>
                </form>
            </div>
        </section>
    </MainLayout>
  )
}

export default SignUpPage