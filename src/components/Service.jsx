import { Outlet, useNavigate } from "react-router-dom"

const Service = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1 className="text-5xl font-thin mb-5">Service</h1>
      <button
        onClick={() => navigate("/service/details")} 
        className="bg-white text-black px-4 py-2 rounded mr-10" >
        Our Services
      </button>
      <button
        onClick={() => navigate("/service/updates")} 
        className="bg-white text-black px-4 py-2 rounded" >
        More Updates
      </button>
      <hr className="my-10"/>
      <Outlet/>
    </div>
  )
}

export default Service