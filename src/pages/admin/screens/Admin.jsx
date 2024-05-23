import { images } from "../../../constants"
import ManagePost from "./ManagePost"

const Admin = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#FFBF00] rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">2</div>
              </div>
              <div className="text-sm font-medium text-white">Users</div>
            </div>
            <img src={images.userSolid} alt="users" className="h-12 w-12" />        
          </div>
        </div>
        <div className="bg-[#025750] rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-4">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">100</div>
                <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">+30%</div>
              </div>
              <div className="text-sm font-medium text-white">Categories</div>
            </div>
            <img src={images.commentSolid} alt="users" className="h-12 w-12" />          
          </div>
                
        </div>
        <div className="bg-[#AF6E4D] rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="text-2xl font-semibold mb-1">100</div>
              <div className="text-sm font-medium text-white">Blogs</div>
            </div>
            <img src={images.blogSolid} alt="users" className="h-12 w-12" />             
          </div>

        </div>
      </div>

     <div className="mt-10">
      <ManagePost />
     </div>
    </div>
  )
}

export default Admin