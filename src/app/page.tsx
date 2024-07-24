import Image from "next/image";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Ourgame from "./components/ourgame";
import Trending from "./components/trending";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <div className="w-full h-screen bg-cover bg-opacity-80" style={{ backgroundImage: "url('/colorful.png')"}}>
      <div className="bg-black bg-opacity-50">
        <div className="bg-gradient-to-b from-transparent to-black max-h-screen">
         <Main/>
        </div>
        </div>
       </div>
      <Ourgame/>
      <Trending/>
    </main>
  );
}
