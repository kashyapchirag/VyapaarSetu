import React from 'react'

const CTAsection = () => {
    return (
        <div className='hidden relative md:flex md:flex-col md:items-center md:gap-10 lg:items-start bg-linear-to-r from-[#EAF0FF] to-[#DCE6FF] w-full rounded-2xl p-15 md:mt-7 md:mb-7 lg:mt-35 lg:mb-35 shadow-xl'>
            <div className="left md:flex flex-col gap-5 w-3/4">
                <h1 className='text-[#1E3A8A] text-5xl font-bold'>Get started with VyapaarSetu.</h1>
                <p className='text-gray-600 text-2xl'>Manage Digital Bahi Khata, send payment reminders, and grow your business faster.</p>

                <div className="flex gap-4">
                    <div className="flex justify-between px-4 items-center gap-10 w-full md:w-[20rem] bg-white h-12 rounded-xl shadow-md">
                        <span className='w-[10%]'>+91</span>
                        <input
                        className='w-[90%] h-full outline-none'
                        type="text" 
                        placeholder='Enter your phone number' 
                        />
                    </div>

                    <button className="text-center bg-[#1E3A8A] text-white w-full md:w-40 h-12 rounded-xl shadow-md hover:bg-[#1b2957] hover:-translate-y-0.5 transition-all duration-200  cursor-pointer">
                        Get Started
                    </button>
                </div>
                <div className='flex gap-4 text-gray-600 mt-4'>
                    <div>Manage Digital Bahi Khata</div>
                    <div>|</div>
                    <div>Send Payment Reminders</div>
                    <div>|</div>
                    <div>Track Daily Profit</div>

                </div>
            </div>
            <img className='lg:absolute md:hidden lg:block bottom-20 right-20 w-55 h-auto' src="/src/assets/phoneView.png" alt="phone-snippet" />
                
        </div>
    )
}

export default CTAsection
