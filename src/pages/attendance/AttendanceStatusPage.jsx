import MainLayout from "../../components/MainLayout"
import { images } from "../../constants"
import { Link } from "react-router-dom"

const AttendanceStatusPage = () => {

  return (
    <MainLayout>
        <section className='bg-[#F6F6F6]'>
            <h1 className='xl:leading-[63.96px] lg:leading-[63.96px] md:leading-[60px] xl:text-[48px] lg:text-[48px] md:text-[35px] text-[25px] font-bold text-center lg:mb-[4rem] md:mb-[4rem] mb-[4.5rem] mt-[4rem]'>Check Attendance Status</h1>

            <div className='flex flex-col space-y-4 mx-auto w-[100%] lg:flex-row md:mb-10 items-center justify-evenly my-[1rem] xl:mt-[6rem]'>
                <div className="flex flex-col lg:flex-row justify-around max-h-[30rem] lg:mb-4 md:mb-[10rem] mb-20">
                    <iframe src="https://script.google.com/macros/s/AKfycbwJEuGh3mwDVDtMybxg8izBXN7vLHyqPCoqOTboUr4bzFEkPIJ55Qhs6T3YWvb4dlTKdA/exec" className="w-[100%] h-[30rem] overflow-hidden"></iframe>
            
                </div>
            </div>
        </section>
    </MainLayout>
  )
}

export default AttendanceStatusPage