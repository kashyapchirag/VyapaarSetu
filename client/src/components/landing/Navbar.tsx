const Navbar = () => {
    return (
        <nav>
            <ul className="flex justify-between h-[10%]">
                <img src="/src/assets/logo2.png" className="w-35 md:w-40 h-auto" alt="VyapaarSetu-logo" />

                <button className="px-5  bg-white rounded-xl shadow-md hover:bg-[#1b2957] hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">Log In</button>
            </ul>
        </nav>
    )
}

export default Navbar
