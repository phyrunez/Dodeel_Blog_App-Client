import { useState } from "react"
import { useForm } from "react-hook-form"
import MainLayout from "../../components/MainLayout"
import { useMutation } from "@tanstack/react-query"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { signin } from "../../services/users.js"
import { userActions } from "../../store/reducers/userReducer"
import toast from "react-hot-toast"
import { FaEye, FaEyeSlash } from "react-icons/fa"

const SigninPage = () => {
  const [emailVal, setEmailVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')
  const [loadingState, setLoadingState] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return signin({ email, password })
    },
    onSuccess: (data) => {
      console.log(data)
      dispatch(userActions.setUserInfo(data))
      localStorage.setItem('user-account', JSON.stringify(data))
      toast.success("welcome back to DODEEL Blog App")
      navigate("/")
    },
    onError: (error) => {   
      toast.error("Invalid Email or Password, Please try again. Also make sure you have internet connection!")
      console.log(error)
    }
  })

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    mode: 'onChange'
  })

  const submitHandler = (data) => {
    const { email, password } = data
    mutate({ email, password })
    setLoadingState(prev => !prev)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <MainLayout>
      <section className='container mx-auto px-5 py-10'>
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-[#333333] mb-8">
            Login to your Account
          </h1>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="email" className="text-[#333333] font-semibold block">Email Address</label>
              <input 
                type="email"  
                id="email" 
                {...register('email', {
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Enter a valid Email address"
                  },
                  required: { value: true, message: "Email address field is required!" }
                })}
                onChange={e => setEmailVal(e.target.value)}
                placeholder='Enter Email'
                className={`placeholder:text-[#c4c4c4] text-[#c4c4c4] mt-3 rounded-lg px-5 py-4 font-semibold block
                outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad9]"} ${emailVal.includes('@') && "border-green-500"}`}
              />

              {errors.email?.message && (
                <p className="text-red-500 text-xs mt-1">{ errors.email?.message }</p>
              )}
            </div>

            <div className="flex flex-col mb-6 w-full">
              <label htmlFor="password" className="text-[#333333] font-semibold block">Password</label>
              <div className="flex flex-row relative border w-full rounded-lg mt-3">
                <input 
                  type={showPassword ? "text" : "password"}  
                  id="password" 
                  {...register('password', {
                    minLength: { value: 6, message: "password length must be atleast 6 characters long!" },
                    required: { value: true, message: "Email address field is required!" }
                  })}
                  onChange={e => setPasswordVal(e.target.value)}
                  placeholder='Enter Password'
                  className={`placeholder:text-[#c4c4c4] text-[#c4c4c4] rounded-lg px-5 py-4 font-semibold block w-full
                  outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad9]"} ${passwordVal.length >= 6 && "border-green-500"}`}
                />
                <span onClick={togglePasswordVisibility} className="absolute right-5 bottom-5 cursor-pointer">
                  {!showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {errors.password?.message && (
                <p className="text-red-500 text-xs mt-1">{ errors.password?.message }</p>
              )}
            </div>

            {/* <Link to="/forgot-password" className='text-sm font-semibold text-primary'>
              Forgot Password?
            </Link> */}
            <p className="text-sm font-semibold text-primary">Welcome Back🤗!!!</p>
            <button 
              type='submit' 
              // disabled={!isValid || isLoading}
              className='bg-[#025750] text-white font-bold text-lg py-4 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed'
            >
              {!loadingState ? "Signin" : "Getting In..."}
            </button>
            <p className="text-sm text-center font-semibold text-[#5a7184]">
              Create an account? <Link to="/register" className='text-primary'>Register now</Link>
            </p>
          </form>
        </div>
      </section>
    </MainLayout>
  )
}

export default SigninPage