import { images } from "../../../constants"

const AllblogPost = () => {
  return (
    <div class="container mx-auto w-[77%] grid grid-cols-3 my-20 gap-4">
        <div className="card card-compact w-96">
            <figure>
                <img src={images.firstBlog} alt="Shoes" />
            </figure>
            <div className="card-body -mx-4">
                <div  className="flex flex-row mt-5">
                    <span className="bg-[#025750] text-white font-bold px-1 py-1 border rounded-md">Entertainment</span>
                    <p className="px-4 py-1 text-[#025750]">13 March 2024</p>
                </div>
                <h2 className="card-title text-[#333333] font-bold text-2xl">Who is the best singer on chart?Know him?</h2>
                <div>
                    <span className="py-5 text-[#025750] font-sm">By Joseph Brain</span>
                    <p className="py-5 text-base">chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and  </p>
                </div>
                <div className="mt-[1rem]">
                    <a href="/" className="text-[#003140] font-montserrat text-base underline">Read More...</a>
                </div>
            </div>
        </div>
        <div className="card card-compact w-96">
            <figure>
                <img src={images.secondBlog} alt="Shoes" />
            </figure>
            <div className="card-body -mx-4">
                <div  className="flex flex-row mt-5">
                    <span className="bg-[#025750] text-white font-bold px-1 py-1 border rounded-md">Opportunities</span>
                    <p className="px-4 py-1">13 March 2024</p>
                </div>
                <h2 className="card-title text-[#333333] font-bold text-2xl">How to start export import business from home?</h2>
                <div>
                    <span className="py-5 text-[#025750] font-sm">By Joseph Brain</span>
                    <p className="py-5 text-base">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs </p>
                </div>
                <div className="mt-[1rem]">
                    <a href="/" className="text-[#003140] font-montserrat text-base underline">Read More...</a>
                </div>
            </div>
        </div>
        <div className="card card-compact w-96">
            <figure>
                <img src={images.thirdBlog} alt="Shoes" />
            </figure>
            <div className="card-body -mx-4">
                <div  className="flex flex-row mt-5">
                    <span className="bg-[#025750] text-white font-bold px-1 py-1 border rounded-md">Lifestyle</span>
                    <p className="px-4 py-1">13 March 2024</p>
                </div>
                <h2 className="card-title text-[#333333] font-bold text-2xl">Make some drinks with chocolates chocolates and milk</h2>
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
  )
}

export default AllblogPost