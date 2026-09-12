
import Banner from "./components/Banner";

import Nav from "./components/Nav";




const techFetch = async() => {
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
      
      
    </>
  )
}

export default App
