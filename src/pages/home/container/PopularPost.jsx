import { useNavigate } from "react-router-dom"
import { images } from "../../../constants"

const PopularPost = () => {
  const navigate = useNavigate()

  return (
    <>
        <div className="container mx-auto w-10/12 px-12 flex justify-between py-3 items-center">
            <h1 className="text-[#333333] text-3xl py-5 font-bold">Popular Post</h1>
            <button
                onClick={() => navigate('/')}
                className="border-2 border-[#025750] rounded-md bg-[#025750] px-5 py-1 text-white font-semibold hover:bg-transparent hover:text-[#025750] transition-all duration-300"
            >
                View All
            </button>
        </div>
        <div className="container mx-auto w-[77%] grid grid-cols-3 my-6 gap-4">
            <div className="card card-compact w-96">
                <figure>
                    <img src={images.popularPost_1} alt="Shoes" />
                </figure>
                <div className="card-body -mx-4">
                    <div  className="flex flex-row mt-5">
                        <span className="bg-[#025750] text-white font-bold px-1 py-1 border rounded-md">Education</span>
                        <p className="px-4 py-1 text-[#025750]">13 March 2024</p>
                    </div>
                    <h2 className="card-title text-[#333333] font-bold text-2xl">8 Rules of Travelling In Sea You Need To Know</h2>
                    <div>
                        <span className="py-5 text-[#025750] font-sm">By Joseph Brain</span>
                        <p className="py-5 text-base">Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs </p>
                    </div>
                    <div className="mt-[1rem]">
                        <a href="/" className="text-[#003140] font-montserrat text-base underline">Read More...</a>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96">
                <figure>
                    <img src={images.popularPost_2} alt="Shoes" />
                </figure>
                <div className="card-body -mx-4">
                    <div  className="flex flex-row mt-5">
                        <span className="bg-[#025750] text-white font-bold px-1 py-1 border rounded-md">Opportunities</span>
                        <p className="px-4 py-1">13 March 2024</p>
                    </div>
                    <h2 className="card-title text-[#333333] font-bold text-2xl">How to build strong portfolio and get a Job in UI/UX</h2>
                    <div>
                        <span className="py-5 text-[#025750] font-sm">By Joseph Brain</span>
                        <p className="py-5 text-base">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from </p>
                    </div>
                    <div className="mt-[1rem]">
                        <a href="/" className="text-[#003140] font-montserrat text-base underline">Read More...</a>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96">
                <figure>
                    <img src={images.popularPost_3} alt="Shoes" />
                </figure>
                <div className="card-body -mx-4">
                    <div  className="flex flex-row mt-5">
                        <span className="bg-[#025750] text-white font-bold px-1 py-1 border rounded-md">Lifestyle</span>
                        <p className="px-4 py-1">13 March 2024</p>
                    </div>
                    <h2 className="card-title text-[#333333] font-bold text-2xl">How to Be a Professional Footballer in 2023</h2>
                    <div>
                        <span className="py-5 text-[#025750] font-sm">By Joseph Brain</span>
                        <p className="py-5 text-base">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive</p>
                    </div>
                    <div className="mt-[1rem]">
                        <a href="/" className="text-[#003140] font-montserrat text-base underline">Read More...</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PopularPost