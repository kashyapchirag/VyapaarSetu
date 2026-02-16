import { Phone, Mail, MapPin, Youtube, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <div className="bg-[#EAF0FF] border-t border-t-[#dbe4ff] w-full py-17 px-5 md:px-15 text-gray-600 text-[0.875rem] flex flex-col gap-10">
            
            <div className="top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-x-15 lg:gap-x-20">
                <div className="">
                    <img src="/src/assets/logo2.png" className="w-35 md:w-40 h-auto" alt="VyapaarSetu-logo" />
                    <p className="">VyapaarSetu helps small vendors and local businesses manage digital transactions easily and securely.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-[#1E3A8A] text-xl mb-1">Company</h1>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Blogs</p>
                    <p>Newsroom</p>
                </div>

                <div className="legal flex flex-col gap-2">
                    <h1 className="text-[#1E3A8A] text-xl mb-1">Legal</h1>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Refund Policy</p>
                    <p>Code of Conduct</p>
                </div>

                <div className="legal flex flex-col gap-2">
                    <h1 className="text-[#1E3A8A] text-xl mb-1">We’d love to hear from you!</h1>
                    <div className="flex gap-5">
                        <span className="text-[#1E3A8A]"><Phone size={18}/></span>
                        <span>+91-9876543210</span>
                    </div>
                    <div className="flex gap-5">
                        <span className="text-[#1E3A8A]"><Mail size={18}/></span>
                        <span>support@vyapaarsetu.com</span>
                    </div>
                    <div className="flex gap-5">
                        <span className="text-[#1E3A8A]"><MapPin size={18}/></span>
                        <span>Sector 3, HSR Layout, Bengaluru, Karnataka, India</span>
                    </div>

                    <div className="icons flex gap-5 mt-5">
                        <div className="bg-white rounded-4xl w-9 h-9 flex justify-center items-center p-2.5 shadow-md text-black hover:bg-[#1E3A8A] hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"><Youtube/></div>
                        <div className="bg-white rounded-4xl w-9 h-9 flex justify-center items-center p-2.5 shadow-md text-black hover:bg-[#1E3A8A] hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"><Twitter/></div>
                        <div className="bg-white rounded-4xl w-9 h-9 flex justify-center items-center p-2.5 shadow-md text-black hover:bg-[#1E3A8A] hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"><Facebook/></div>
                        <div className="bg-white rounded-4xl w-9 h-9 flex justify-center items-center p-2.5 shadow-md text-black hover:bg-[#1E3A8A] hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"><Linkedin/></div>
                    </div>
                </div>
            </div>

            <div className="line border border-[#dbe4ff]"></div>

            <div className="bottom flex flex-col md:flex-row gap-3 justify-between items-center text-gray-500">
                <div>© 2026 VyapaarSetu. All rights reserved.</div>
                <div>Built with ❤️ to promote businesses</div>
            </div>

        </div>
    )
}

export default Footer
