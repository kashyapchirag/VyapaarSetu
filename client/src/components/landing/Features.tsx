import React from 'react'
import { BookOpen, Bell, BarChart3, Shield, Smartphone, Users } from "lucide-react";

const Features = () => {

    const features = [
        {
            icon:<BookOpen size={20}/>,
            title:"Digital Bahi Khata",
            desc:"Record all customer transactions digitally and never lose track of payments."
        },
        {
            icon: <Bell size={22} />,
            title: "Auto Payment Reminders",
            desc: "Send automatic WhatsApp & SMS reminders to customers for faster collection.",
        },
        {
            icon: <BarChart3 size={22} />,
            title: "Profit Tracking",
            desc: "Track daily income, expenses, and overall business performance easily.",
        },
        {
            icon: <Shield size={22} />,
            title: "Secure Cloud Backup",
            desc: "Your data is automatically backed up and protected with secure encryption.",
        },
        {
            icon: <Smartphone size={22} />,
            title: "Access Anywhere",
            desc: "Manage your business from mobile or desktop anytime, anywhere.",
        },
        {
            icon: <Users size={22} />,
            title: "Multi-User Access",
            desc: "Give access to staff and manage everything from one central account.",
        },
    ]

    return (
        <div className='flex flex-col w-full gap-10'>
            <div className="sentences text-center flex flex-col gap-5">
                <h1 className='text-[#1E3A8A] text-3xl md:text-4xl font-bold'>Powerfull features for growing businesses</h1>
                <p className='text-gray-600 font-bold text-[1.2rem]'>Everything you need to manage digital transactions and grow your local business.</p>
            </div>

            <div className="cards flex flex-wrap gap-7 justify-center items-center">

                {
                    features.map((ele,index)=>{
                        return(
                            <div key={index} className='group bg-white rounded-xl min-h-50 p-5 md:p-9 flex flex-col justify-center md:w-100 shadow-md hover:-translate-y-0.5 transition-all duration-200'>
                                <div className="icon w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-[#1E3A8A] to-[#0EA5A4] text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                                    {ele.icon}
                                </div>

                                <h1 className='text-[#1E3A8A] font-bold mb-1.5'>
                                    {ele.title}
                                </h1>

                                <p className='text-gray-600'>
                                    {ele.desc}
                                </p>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Features
