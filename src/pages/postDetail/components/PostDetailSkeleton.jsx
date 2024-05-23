import { BiImageAlt } from "react-icons/bi";

const ArticleDetailSkeleton = () => {
  return (
    <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start animate-pulse">
      {/* <article className="flex-1">
        
        <div className="rounded-xl w-full aspect-video bg-slate-300 flex justify-center items-center">
          <BiImageAlt className="text-4xl text-slate-400" />
        </div>
       
        <div className="mt-4 md:text-[26px] w-2/5 h-2 rounded-lg bg-slate-400" />
        <div className="mt-4">
          <p className="w-1/2 h-2 mt-6 rounded-lg bg-slate-300"></p>
          <p className="w-full h-2 mt-4 rounded-lg bg-slate-300"></p>
          <p className="w-[70%] h-2 mt-4 rounded-lg bg-slate-300"></p>
          <p className="w-4/5 h-2 mt-4 rounded-lg bg-slate-300"></p>
        </div>
      </article> */}

      <article className="flex-1">
          <div className="mx-auto max-w-5xl">
              {/* <BreadCrumbs data={breadCrumbsData} /> */}

              <div  className="flex flex-row my-4 prose prose-sm sm:prose-base">
                  <span className="text-white font-bold px-1 py-1 border rounded-md bg-slate-300"></span>
                  <p className="px-4 py-1 text-sm bg-slate-300">
                      
                  </p>
              </div>

              <div className="flex flex-col my-4 prose prose-sm sm:prose-base">
                  <p className='text-5xl bg-slate-300'></p>
                  <span className='py-4 text-xs text-[#025750] bg-slate-300'></span>
              </div>
          </div>

          <BiImageAlt className="w-[100%] h-[30rem] text-slate-400" />
          
          <div className="mx-auto max-w-5xl mt-10 text-sm leading-7 prose prose-sm sm:prose-base">
              <div className="bg-slate-300">
                  <p className="bg-slate-300"></p>
              </div>

              <div className="my-7 mx-auto max-w-3xl border-s-4 border-l-[#E1D83D] prose prose-sm sm:prose-base">
                  <p className='italic py-3 px-3 bg-slate-300'>
                      
                  </p>
              </div>

              <div className='mt-5 prose prose-sm sm:prose-base'>
                  <p className="bg-slate-300"></p>
              </div>
              
              <BiImageAlt className="w-[65%] h-[18rem] text-slate-400" />

              <div className='my-10 prose prose-sm sm:prose-base'>
                  <p className="bg-slate-300"></p>
              </div>

              <div className="text-[#333333] text-center text-xs bg-slate-300">
                  <div className="mt-8 mb-3 flex flex-row gap-x-2 prose prose-sm sm:prose-base">
                  <BiImageAlt className="w-4 h-4 text-slate-400" />
                  <BiImageAlt className="w-4 h-4 text-slate-400" />
                  <BiImageAlt className="w-4 h-4 text-slate-400" />
                  <BiImageAlt className="w-4 h-4 text-slate-400" />
                  </div>
              </div>
          </div>
      </article>
    </section>
  );
};

export default ArticleDetailSkeleton;