
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    
    <div className="w-screen h-screen bg-gray-800 text-white px-[10%]">
      <Nav></Nav>
      <Mainroutes></Mainroutes>
  
    </div>
  )
}

export default App