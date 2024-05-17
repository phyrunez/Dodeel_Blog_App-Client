import { images } from "../../../constants"

const LatestRelease = () => {
  return (
    <div className="container mx-auto my-10 w-11/12 lg:w-[77%]">
        <h1 className="text-[#333333] text-3xl py-5 font-bold">Latest Release</h1>
        <div className="flex flex-col lg:flex-row justify-between border bg-white shadow-md rounded-[1rem]">
            <img className="w-full lg:w-1/2" src={images.LatestReleaseImage} alt="latest-release" />
            <div className="w-full lg:justify-start px-2 lg:px-[50px]">
                <div className="flex flex-col py-2 lg:py-[20px]">
                    <div  className="flex flex-row mt-5">
                        <span className="bg-[#025750] text-white font-bold px-1 py-1 border rounded-md">Opportunities</span>
                        <p className="px-4 py-1">13 March 2024</p>
                    </div>
                    <div className="text-[#111111]">
                        <h2 className="text-4xl py-5 font-bold">Your passport to the web3 economy</h2>
                        <span className="py-5">By Joseph Brain</span>
                        <p className="py-5">If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple. We’ll explain more below, but in short web3 is the next era of the internet in which blockchain technology will play a central role.</p>
                    </div>
                </div>
                <div className="mt-[1rem] pr-4 pb-2">
                    <a href="/" className="text-[#003140] underline">Read More...</a>
                </div>
                
            </div>
        </div>
        
    </div>
    
  )
}

export default LatestRelease