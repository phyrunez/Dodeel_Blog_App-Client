

const BlogCard = ({css, images, category, date, title, author, desc}) => {
    return (
        <div className = {css}>
            <figure>
                <img src={images} alt="Shoes" />
            </figure>
            <div className="card-body -mx-4">
                <div  className="flex flex-row mt-5">
                    <span className="bg-[#025750] text-white font-bold px-1 py-1 border rounded-md">{category}</span>
                    <p className="px-4 py-1 text-[#025750]">{date}</p>
                </div>
                <h2 className="card-title text-[#333333] font-bold text-2xl">{title}</h2>
                <div>
                    <span className="py-5 text-[#025750] font-sm">{author}</span>
                    <p className="py-5 text-base">{desc}  </p>
                </div>
                <div className="mt-[1rem]">
                    <a href="/" className="text-[#003140] font-montserrat text-base underline">Read More...</a>
                </div>
            </div>
        </div>
    )
  }
  
  export default BlogCard