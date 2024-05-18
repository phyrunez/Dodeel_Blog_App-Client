import { useState } from 'react'
import CropEasy from './crop/CropEasy'
import { stables } from '../constants'
import { HiOutlineCamera } from "react-icons/hi"
import { useDispatch, useSelector } from 'react-redux'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateProfilePicture } from '../services/users'
import { userActions } from '../store/reducers/userReducer'
import toast from 'react-hot-toast'
import { createPortal } from 'react-dom'

const ProfilePicture = ({ avatar }) => {
  const [openCrop, setOpenCrop] = useState(false)
  const [photo, setPhoto] = useState(null)

  const dispatch = useDispatch();
  const queryClient = useQueryClient()
  const userState = useSelector(state => state.user)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if(e.target.files.length !== 0) setPhoto({ url: URL.createObjectURL(file), file})
    setOpenCrop(true)
  }

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ token, formData }) => {
        return updateProfilePicture({
            token: token,
            formData: formData
         })
    },
    onSuccess: (data) => {
        dispatch(userActions.setUserInfo(data));
        setOpenCrop(false)
        localStorage.setItem("user-account", JSON.stringify(data));
        queryClient.invalidateQueries(["profile"]);
        toast.success("Profile photo is Removed")
    },
    onError: (error) => {
        toast.error(error.message)
    }
  })

  const handleDeleteImage = () => {
    const warningMsg = createPortal(window.confirm("Do you want to delete your profile picture?"), document.getElementById('portal'))
    if(warningMsg) {
        try {
            const formData = new FormData()
            formData.append("profilePicture", undefined)

            mutate({ token: userState.userInfo.token, formData: formData })
        } catch (error) {
            toast.error(error.message)
        }
    }
  }
 
  return (
    <>
        { openCrop && createPortal(<CropEasy photo={photo} setOpenCrop={setOpenCrop} />, document.getElementById('portal')) }

        <div className='w-full flex items-center gap-x-4'>
            <div className='relative w-20 h-20 rounded-full  outline outline-offset-2 outline-1 outline-[#025750] overflow-hidden'>
                <label htmlFor="profilePicture" className='cursor-pointer absolute inset-0 rounded-full bg-transparent'>
                    {console.log(avatar)}
                    {avatar ? (
                        <img 
                            src={stables.UPLOAD_FOLDER_BASE_URL + avatar} 
                            alt="avatar" 
                            className='w-full h-full object-cover' 
                        />
                    ) : (
                        <div className='h-full w-full bg-blue-50/50 flex justify-center items-center'>
                            <HiOutlineCamera className='w-7 h-auto text-[#025750]' />
                        </div>
                    )}
                </label>
                <input type="file" className='sr-only' id="profilePicture" onChange={handleFileChange} />
            </div>
            <button 
                onClick={handleDeleteImage}
                type="button" 
                className='border border-red-500 rounded-md text-red-500 px-2 py-1 hover:bg-red-500 hover:text-white'
            >
                Delete
            </button>
        </div>
    </>
  )
}

export default ProfilePicture