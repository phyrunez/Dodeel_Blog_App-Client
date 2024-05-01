import { useEffect, useState } from 'react'
import MainLayout from '../../components/MainLayout'
import ProfilePicture from '../../components/ProfilePicture'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getUserProfile, updateProfile } from '../../services/users'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { userActions } from '../../store/reducers/userReducer'
import toast from 'react-hot-toast'

const ProfilePage = () => {
  const [nameVal, setNameVal] = useState("")
  const [emailVal, setEmailVal] = useState("")
  const [passwordVal, setPasswordVal] = useState("")

  const dispatch = useDispatch()
  const userState = useSelector(state => state.user)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data: profileData, isPending: profileIsPending, error } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo?.token })
    },
    queryKey: ['profile']
  })

  const { mutate, isLoading: updateProfileIsLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return updateProfile({
        token: userState.userInfo.token,
        userData: { name, email, password }
      })
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
      queryClient.invalidateQueries(["profile"]);
      toast.success("Profile updated successfully")
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const { register, handleSubmit, formState: { errors, isValid }} = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },
    values: {
      name: profileIsPending ? " " : profileData.name,
      email: profileIsPending ? " " : profileData.email,
    },
    mode: 'onChange'
  })

  const submitHandler = (data) => {
    const { name, email, password } = data
    mutate({ name, email, password })
  }

  useEffect(() => {
    if(!userState.userInfo) navigate("/")
  }, [navigate, userState.userInfo])

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <ProfilePicture avatar={ profileData?.avatar } />
          <form onSubmit={handleSubmit(submitHandler)} className='mt-6'>
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
                outline-none border ${errors.name ? "border-red-500" : "border-[#c3cad9]"} ${nameVal && "border-green-500"}`} 
              />

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
                outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad9]"} ${emailVal.includes('@') && "border-green-500"}`} 
              />

              {errors.email?.message && (
                  <p className='text-red-500 text-xs mt-1'>{ errors?.email.message }</p>
              )}
            </div>

            <div className="flex flex-col mb-6 w-full">
                <label htmlFor="password" className='text-[#5a7184] font-semibold block'>New Password (optional)</label>
                <input 
                  type="password" 
                  id="password" 
                  {...register("password")} 
                  onChange={e => setPasswordVal(e.target.value)}
                  placeholder="Enter New Password"
                  className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block
                  outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad9]"} ${passwordVal.length >= 6 && "border-green-500"}`} 
                />

                {errors.password?.message && (
                    <p className='text-red-500 text-xs mt-1'>{ errors?.password.message }</p>
                )}
            </div>

            <button 
              type='submit' 
              disabled={passwordVal === "" || passwordVal.length < 6 || !isValid || profileIsPending || updateProfileIsLoading}
              className='bg-[#025750] text-white font-bold text-lg py-4 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed'
            >
              Update 
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  )
}

export default ProfilePage