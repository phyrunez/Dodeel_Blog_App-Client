import MainLayout from "../../components/MainLayout"
import { images } from "../../constants"
import { Link } from "react-router-dom"

const PaymentStatusPage = () => {

  return (
    <MainLayout>
        <section className='bg-[#F6F6F6]'>
            <h1 className='xl:leading-[63.96px] lg:leading-[63.96px] md:leading-[60px] leading-[20px] xl:text-[48px] lg:text-[48px] md:text-[35px] text-[38px] font-bold text-center lg:mb-[4rem] md:mb-[4rem] mb-[4.5rem] mt-[4rem]'>CDS Dues Payment Status</h1>

            <div className='flex flex-col space-y-4 mx-auto w-[70%] lg:flex-row md:mb-10 items-center justify-evenly my-[1rem] xl:mt-[6rem]'>
                <div className="flex flex-col lg:flex-row justify-around max-h-[30rem] lg:mb-4 md:mb-[10rem] mb-20">
                    
                    <div className="w-full lg:justify-start px-2 lg:px-[50px]">
                        <div className="flex flex-col py-2 lg:py-[20px]">
                            <div className=''>
                                <h1 className='text-[#FFBF00] text-2xl'>Stay Up to date</h1>

                                <div className='mt-[0.5rem] leading-10'>
                                <p className='font font-poppins'>
                                </p>
                                    Pay up and confirm payment of your one time CDS dues for the smooth running of it activities 
                                    via the link below and seamlessly filling out your details
                                </div>
                            </div>
                        </div>

                        <button 
                            type='submit' 
                            className='bg-[#025750] text-white font-bold text-lg py-3 mx-auto md:w-[28%] lg:w-[30%] w-[25%] rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed'
                        >
                            <Link to="https://script.google.com/macros/s/AKfycbz6ycnWSLxfaS2RmYbceDr2pd60ywUtH7RjXANdzw-lSLaq4ZVMNcyn9GILvygUBfWS/exec">
                                Visit Site
                            </Link>
                        </button>
                        
                    </div>
                    <img className="w-full lg:w-1/2 xs:hidden md:visible lg:visible" src={images.Payment}  alt="schedule" />
                </div>
            </div>
        </section>
    </MainLayout>
  )
}

export default PaymentStatusPage