import { useState, useEffect } from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'
import MainLayout from '../../components/MainLayout'
import { images, stables } from '../../constants'
import { Link, useParams } from 'react-router-dom'
import SocialShareButtons from '../../components/SocialShareButtons.jsx'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getAllPosts, getSinglePost, likePost, rankedPost } from '../../services/posts.js'
import ErrorMessage from '../../components/ErrorMessage'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import PopularPost from '../home/container/PopularPost.jsx'
import Spinner from '../../components/Spinner.jsx'
import { postActions } from '../../store/reducers/postReducer.js'

const ArticleDetailPage = () => {
    const { slug } = useParams();
    const userState = useSelector(state => state.user)
    const postState = useSelector(state => state.post)
    const [ breadCrumbsData, setBreadCrumbsData ] = useState([]);
    const [ body, setBody ] = useState(null)
    const [ clickedState, setClickedState] = useState(false)
    const [ postLikes, setPostLikes ] = useState({})
    const [profileDropdown, setProfileDropdown] = useState(false)

    const dispatch = useDispatch()

    const { data, isError, isLoading, refetch } = useQuery({
        queryKey: ["blog", slug], 
        queryFn: () => getSinglePost({ slug }),                                                  
    })

    console.log(data)
    dispatch(postActions.setPostDetails(data))

    const { data: postData } = useQuery({
        queryFn: () => getAllPosts(),
        queryKey: ["posts"],
        onError: (error) => {
          toast.error(error.message);
          console.log(error)
        }
    })

    // const { data: rankedPosts } = useQuery({
    //     queryKey: ["ranked"], 
    //     queryFn: () => rankedPost(),                                                  
    // })

    const { mutate, isPending } = useMutation({
        mutationFn: ({ slug }) => {
          return likePost({ slug })
        },
        onSuccess: (data) => {
           console.log(data)
           setPostLikes((prevLikes) => ({
                ...prevLikes,
                [slug]: (prevLikes[slug] || data?.likes) + 1
            }));
            console.log(postLikes)
        },
        onError: (error) => {  
          console.log(error)
          toast.error(error.message)
        }
      })
    
    
    useEffect(() => {
        if(!isLoading) {
            setBreadCrumbsData([
                { name: 'Home', link: '/' },
                { name: 'Blog', link: '/blog' },
                { name: `${data.title}`, link: `https://dodeel-blog-app-client.onrender.com/blog/${data.slug}` }
            ])
        } 

        console.log(postLikes)
        refetch()

        if(!isError) {
            console.log(data);

            // const bodyHandler = parse(generateHTML(data?.body, [Bold, Paragraph, Document, Text, Italic]))
            
            // setBody(bodyHandler)
        }

        
    }, [refetch])

    const handleLike = (data) => {
        const { slug } = data
        console.log(slug)
        mutate({ slug })  
        setClickedState(true)
    }

  return (
    <MainLayout>
        {isLoading ? <Spinner /> : isError ? <ErrorMessage message="couldn't fetch post detail, make sure you have good network and try again!!" /> : (
            <>
                <section className='container mx-auto w-[78%] flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
                    <article className="flex-1">
                        <div className="mx-auto max-w-5xl">
                            <BreadCrumbs data={breadCrumbsData} />

                            <div  className="flex flex-row my-4">
                                <span className="bg-[#025750] text-white font-bold px-1 py-1 border rounded-md">{data?.category}</span>
                                <p className="px-4 py-1 text-sm">
                                    {new Date(data?.createdAt).toLocaleDateString(
                                        'en-US',
                                        {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric"
                                        }
                                    )}
                                </p>
                            </div>

                            <div className="flex flex-col my-4">
                                <p className='text-5xl text-black'>{data?.title}</p>
                                <span className='py-4 text-xs text-[#025750]'>By {data.author}</span>
                            </div>
                        </div>
                        <img 
                            className='rounded-xl w-[100%] h-[15rem] md:w-[100%] md:h-[24rem] lg:w-[100%] lg:h-[40rem]'
                            src={data?.mainPhoto ? data?.mainPhoto : images.defaultBg} 
                            alt={data?.title}
                        />
                        
                        <div className="mx-auto max-w-5xl mt-10 text-sm leading-7">
                            <div>
                                <p>{data?.introText}</p>
                            </div>

                            <div className="my-7 mx-auto max-w-3xl border-s-4 border-l-[#E1D83D]">
                                <p className='italic py-3 px-3'>
                                    {`"${data?.italicText}"`}
                                </p>
                            </div>

                            <div className='mt-5'>
                                <p>{data?.supportText}</p>
                            </div>

                            <img 
                                className='rounded-xl mx-auto mt-10 w-[100%] h-[15rem] md:w-[70%] md:h-[23rem] lg:w-[63%] lg:h-[23rem]'
                                src={data?.supportPhoto ? data?.supportPhoto : images.defaultBg} 
                                alt={data?.title}
                            />

                            <div className='my-10'>
                                <p>{data?.summaryText}</p>
                            </div>

                            <div className="text-[#333333] text-center text-xs">
                                <div className="mt-8 mb-3 flex flex-row gap-x-2">
                                    <img 
                                    className='cursor-pointer h-4 w-4' 
                                    src={clickedState ? images.Vector__2 : images.Vector_2} 
                                    alt="instagram" onClick={() => handleLike(data)} /><span className="text-[#025750]">{isPending ? "Thanks for stopping by..." : postLikes[data?.slug] || data?.likes}</span>
                                    {/* <img className="cursor-pointer h-4 w-4" src={images.Union} alt="twitter" /> */}
                                   
                                    <img className="cursor-pointer h-4 w-4 mb-1" src={images.Polygon} onClick={() => setProfileDropdown(!profileDropdown)} alt="youtube" /><span className={`${profileDropdown ? 'block' : 'hidden' }`}><SocialShareButtons url={`https://dodeel-blog-app-client.onrender.com/blog/${data.slug}`} title={data.title} /></span>
                                    {/* <img className="cursor-pointer h-4 w-4" src={images.Rectangle} alt="linkedin" /> */}
                                </div>
                            </div>
                        </div>
                    </article>
                    
                </section>

                <PopularPost />
            </>
        )}
    </MainLayout>
  )
}

export default ArticleDetailPage