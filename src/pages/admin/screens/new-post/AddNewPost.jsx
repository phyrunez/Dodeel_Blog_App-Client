import { useEffect, useState } from 'react'
// import MainLayout from '../../../../components/MainLayout'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation, useQuery } from '@tanstack/react-query'
import { postActions } from '../../../../store/reducers/postReducer'
import toast from 'react-hot-toast'

import { addPost, getSinglePost } from '../../../../services/posts'
import AddNewPostForm from './AddNewPostForm'
import EditPostForm from './EditPostForm'

const AddNewPost = () => {
  const [defaultInputValues, setDefaultInputValues] = useState({
        titleVal: "", authorVal: "", introTextVal: "", supportTextVal: "", italicTextVal: "",
        summaryTextVal: "", mainPhotoVal: "", supportPhotoVal: "", categoryVal: "", dateVal: "", 
        likesVal: ""
    })

  const [loadingState, setLoadingState] = useState(false)

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
        setLoadingState(prev => !prev)
        toast.success("Successfully added Post")
        // navigate("/")
    },
    onError: (error) => {
        console.log(error)
        setLoadingState(prev => !prev)
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
    setLoadingState(prev => !prev)
  }

  // useEffect(() => {
  //   if(!postState.postDetails) navigate("/")
  // }, [navigate, postState.postDetails])

  return (
    <>
        <section className='container mx-auto px-5 py-10'>
            <div className="w-full max-w-4xl mx-auto">
                <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
                    Add New Blog Post
                </h1>
                <AddNewPostForm 
                    isLoading={loadingState}
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