import { useOutletContext } from "react-router-dom"
import { X } from "lucide-react";
import { useState } from "react";
//@ts-ignore
const OtpModal = ({phone}) => {

    const verify = () =>{

    }
    //@ts-ignore
    const {isOpen,setIsOpen,mode,setMode} = useOutletContext();
    const [newPhone, setNewPhone] = useState("")

    return (
        <div onClick={()=>{
            setIsOpen(false)
        }} className="fixed z-50 inset-0 bg-[#1E3A8A]/15 backdrop-blur-[3px] flex justify-center items-center px-4">

            <div onClick={(e)=>{
                e.stopPropagation()
            }} className="popup bg-white w-110 p-8 rounded-xl relative flex flex-col gap-5 shadow-lg">

                <button 
                onClick={()=>{setIsOpen(false)}}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#1E3A8A] transition-colors cursor-pointer">
                    <X size={18}/>
                </button>

                {
                    // if phone number is not there
                    mode=="withoutPhone" && 
                    <>
                        <div className="text-[#1E3A8A] text-2xl font-bold">Login to VyapaarSetu</div>
                        <div className="flex justify-between px-4 items-center gap-10 w-full bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-[#334155] h-12 rounded-xl">
                            <span className='w-[5%] text-gray-800 dark:text-gray-200'>+91</span> 
                            <input
                            value={newPhone}
                            onChange={(e)=>{
                                setNewPhone(e.target.value.replace(/\D/g, ""))
                            }}
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            minLength={10}
                            maxLength={10}
                            required
                            className='w-[95%] h-full outline-none text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500'
                            placeholder='Enter your phone number' 
                            />
                        </div>
                        <button
                        onClick={()=>{
                            setMode("withPhone")
                        }}
                        className="text-center bg-[#1E3A8A] text-white w-full h-12 rounded-xl shadow-md hover:bg-[#1b2957] hover:-translate-y-0.5 transition-all duration-200  cursor-pointer">
                            Generate OTP
                        </button>
                    
                    </>
                    

                }

                {
                    // if phone number is there
                    mode=="withPhone" &&  
                    <>
                        <div className="text-[#1E3A8A] text-2xl font-bold">Verify OTP</div>
                        <div className="bg-[#F3F6FF] p-3 rounded-xl text-gray-600 text-sm">
                            OTP sent to <span className="font-semibold text-[#1E3A8A]">+91 {phone || newPhone}</span>
                        </div>
                        <div className="flex justify-between px-4 items-center gap-10 w-full bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-[#334155] h-12 rounded-xl">
                                    <input
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    minLength={6}
                                    maxLength={6}
                                    required
                                    className='w-[90%] h-full outline-none text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500'
                                    placeholder='Enter 6-digit OTP' 
                                    />
                        </div>

                        <button  onClick={verify} className="text-center bg-[#0EA5A4] text-white w-full h-12 rounded-xl shadow-md hover:bg-[#1b2957] hover:-translate-y-0.5 transition-all duration-200  cursor-pointer">
                            Verify OTP
                        </button>
                    </>

                }
                
            </div>

        
        </div>
    )
}

export default OtpModal