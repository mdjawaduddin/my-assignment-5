import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies/Technologies";
import { Suspense } from "react";
import type { Itech } from "./types/Itech";




const techFetch = async() :Promise<Itech[]> => {
  const res = await fetch ('/data.json');
 const data = await  res.json();
 return data;
}

function App() {
const techPromise = techFetch();

           
           
  return (
    <>
     
      <Nav ></Nav>
      <div className="divider"></div>
      <Banner></Banner>
       <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies techPromise={techPromise} />
      </Suspense>
      
      
    </>
  )
}

export default App
