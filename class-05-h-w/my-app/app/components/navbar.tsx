export default function Nav(){
    return(
        <nav className="w-full h-12 bg-indigo-200 flex justify-between px-4 items-center md:px-4 text-black">

            <div className="w-28 h-8 text-2xl font-bold bg-white rounded-lg text-center text-indigo-800">Class 05</div>

                <ul className="md:flex hidden font-semibold">
                    <li className="mx-[12px] w-14 h-6 bg-white rounded-lg text-center">Home</li>
                    <li className="mx-[12px] w-14 h-6 bg-white rounded-lg text-center">About</li>
                    <li className="mx-[12px] w-24 h-6 bg-white rounded-lg text-center">Contect Us</li>
                </ul>

            <div className="w-28 h-6 bg-white font-bold rounded-lg text-center">login/signup</div>

        </nav>
    )
}