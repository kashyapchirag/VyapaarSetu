import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row py-10 md:py-0 gap-8 md:justify-center md:items-start relative h-[90%]'>

            <div className="flex justify-center md:justify-between w-full md:py-18 gap-10">
                <div className="hidden md:block img flex justify-center items-center w-1/2">
                    <img src="/src/assets/hero-phone.png" className='w-[85%] h-auto drop-shadow-2xl' alt="person-with-phone" />
                </div>

                <div className='flex flex-col justify-center items-center md:items-start  gap-3 md:w-1/2'>
                    <h1 className='text-[#1E3A8A] text-3xl md:text-5xl font-bold'>Business hua <span className='text-[#0EA5A4]'>easy</span></h1>

                    <p className='text-center md:text-start text-gray-600'>Manage your daily digital transactions effortlessly with VyapaarSetu.</p>

                    <div className="flex flex-col md:flex-row gap-4 w-full mt-5">
                        <div className="flex justify-between px-4 items-center gap-10 w-full md:w-[20rem] bg-white h-12 rounded-xl shadow-md">
                            <span className='w-[10%]'>+91</span>
                            <input
                            className='w-[90%] h-full outline-none'
                            type="text" 
                            placeholder='Enter your phone number' 
                            />
                        </div>

                        <button className="text-center bg-[#1E3A8A] text-white w-full md:w-[10rem] h-12 rounded-xl shadow-md hover:bg-[#1b2957] hover:-translate-y-0.5 transition-all duration-200  cursor-pointer">
                            Get Started
                        </button>
                    </div>

                    <div className="feature z-2 px-7 py-5 md:py-8 rounded-xl mt-5 md:w-full text-center md:text-start flex flex-col gap-3 shadow-md bg-white/60 backdrop-blur-md ">
                        <h1 className='text-[#1E3A8A] text-[1.2rem] font-bold'>One platform for all your business needs</h1>
                        <p className='text-gray-600'>Manage Digital Bahi Khata | Send Payment Reminders | Track Daily Profit</p>
                    </div>

                </div>
            </div>

            <div className="md:hidden img flex justify-center items-center">
                <img src="/src/assets/hero-phone.png" className='min-w-[65%] max-w-[75%] h-auto drop-shadow-2xl' alt="person-with-phone" />
            </div>


                


        </div>
    )
}

export default Hero
