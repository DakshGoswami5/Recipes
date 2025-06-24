import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className="py-10 px-[10%] w-screen h-screen text-white fon-thin bg-gray-800">
      <Navbar></Navbar>
      <Mainroutes></Mainroutes>
    </div>
  )
}

export default App