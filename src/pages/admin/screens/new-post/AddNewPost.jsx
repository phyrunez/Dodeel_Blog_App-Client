import { useEffect, useState } from 'react'
// import MainLayout from '../../../../components/MainLayout'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query'
import { postActions } from '../../../../store/reducers/postReducer'
import toast from 'react-hot-toast'

import { addPost } from '../../../../services/posts'
import AddNewPostForm from './AddNewPostForm'

const AddNewPost = () => {
  const [defaultInputValues, setDefaultInputValues] = useState({
    titleVal: "", authorVal: "", introTextVal: "", supportTextVal: "", italicTextVal: "",
    summaryTextVal: "", mainPhotoVal: "", supportPhotoVal: "", categoryVal: "", dateVal: "", 
    likesVal: ""
})

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const postState = useSelector(state => state.post)

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ title, author, introText, supportText, italicText,
        summaryText, mainPhoto, supportPhoto, category, date, 
        likes }) => {
        return addPost({ title, author, introText, supportText, italicText,
            summaryText, mainPhoto, supportPhoto, category, date, likes 
        })
    },
    onSuccess: (data) => {
        dispatch(postActions.setPostDetails(data))
        toast.success("Successfully added Post")
        // navigate("/")
    },
    onError: (error) => {
        console.log(error)
        toast.error(error.message)
    }
  })

  const submitHandler = data => {
    const { title, author, introText, supportText, italicText,
        summaryText, mainPhoto, supportPhoto, category, date, 
        likes
    } = data

    mutate({ title, author, introText, supportText, italicText,
        summaryText, mainPhoto, supportPhoto, category, date, 
        likes 
    })
  }

  // useEffect(() => {
  //   if(!postState.postDetails) navigate("/")
  // }, [navigate, postState.postDetails])

  return (
    <>
        <section className='container mx-auto px-5 py-10'>
            <div className="w-full max-w-lg mx-auto">
                <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
                    Add New Blog Post
                </h1>
                <AddNewPostForm 
                    isLoading={isLoading}
                    defaultInputValues={defaultInputValues}
                    setDefaultInputValues={setDefaultInputValues}
                    submitHandler={submitHandler}
                />
            </div>
        </section>
    </>
  )
}

export default AddNewPost