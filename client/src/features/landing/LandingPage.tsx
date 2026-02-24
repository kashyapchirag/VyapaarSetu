import CTAsection from "./components/CTAsection"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const LandingPage = () => {
    return (
        <div>
            <div className="bg-[#F3F6FF] dark:bg-[#0F172A] transition-colors duration-300 min-h-screen w-full pb-6 px-5 md:px-15 flex flex-col gap-6 md:gap-20">
                <div className="min-h-screen relative flex flex-col">
                    <Navbar/>
                    <Hero/>
                    <img src="/src/assets/buildings.png" className='hidden md:block w-80 absolute bottom-0 left-0 opacity-40' alt="" />
                    <img src="/src/assets/bg2.png" className='hidden md:block w-110 absolute bottom-0 right-0 opacity-40' alt="" />
                </div>
                <Features/>
                <CTAsection/>
            </div>
                <Footer/>
        </div>
    )
}

export default LandingPage
