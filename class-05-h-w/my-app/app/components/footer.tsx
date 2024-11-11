export default function Footer(){
    return(
      <div className="mt-8 w-full h-8 bg-indigo-300 flex place-content-center">
            
          <nav className="w-72 h-8 bg-white text-center text-black text-2xl font-bold">@ made by Zain Shahid</nav>

        <div className="flex items-center px-2 space-x-2">

            <div className="w-32 h-3/4 bg-yellow-500 rounded-md"></div>
            <div className="w-32 h-3/4 bg-red-500 rounded-md"></div>
            <div className="w-32 h-3/4 bg-purple-500 rounded-md"></div>

        </div>
        
      </div>
      
    )
}