import Features from "../components/landing/Features"
import Hero from "../components/landing/Hero"
import Navbar from "../components/landing/Navbar"

const LandingPage = () => {
    return (
        <div className="bg-[#F3F6FF] min-h-screen w-full py-6 px-5 md:px-15">
            <div className="h-screen">
                <Navbar/>
                <Hero/>
            </div>
            <Features/>
        </div>
    )
}

export default LandingPage
