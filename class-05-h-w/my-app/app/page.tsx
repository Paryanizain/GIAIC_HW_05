import Nav from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Nav />
      <div className="flex place-content-center px-10 mt-8 justify-center gap-3">
        <div className="w-1/3 h-72 bg-slate-600 rounded-lg font-bold px-2 text-black text-2xl">Card1</div> 
        <div className="w-1/3 h-72 bg-blue-800 rounded-lg font-bold px-2 text-black text-2xl">Card2</div> 
        <div className="w-1/3 h-72 bg-green-500 rounded-lg font-bold px-2 text-black text-2xl">Card3</div>
      </div>
      <div className="mt-8">
        <div className="flex justify-center px-10 gap-3">
          <div className="w-1/2 h-80 bg-yellow-400 rounded-lg font-bold px-2 text-black text-2xl">Card4</div> 
          <div className="w-1/2 h-80 bg-red-600 rounded-lg font-bold px-2 text-black text-2xl">Card5</div>    
        </div>
      </div> 
      <Footer />
    </div>
  );
}

